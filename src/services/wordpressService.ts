import axios from 'axios';

const getEnvVar = (name: string) => {
  if (typeof process !== 'undefined' && process.env && process.env[name]) {
    return process.env[name];
  }
  if (typeof import.meta !== 'undefined' && (import.meta as any).env && (import.meta as any).env[name]) {
    return (import.meta as any).env[name];
  }
  return undefined;
};

const API_URL = getEnvVar('VITE_WORDPRESS_API_URL') || 'https://minimuslin.com.tr/wp-json/wp/v2';

export const wordpressService = {
  /**
   * Fetches global site settings from ACF Options Page.
   * Note: Since "ACF to REST API" plugin is deprecated, this relies on 
   * native ACF REST support (available in ACF 5.11+) or custom endpoints.
   */
  async getSiteSettings() {
    // Try different base URLs for ACF Options
    // Native ACF PRO 5.11+ uses /wp-json/acf/v3/options if enabled in register_options_page
    const baseUrls = [
      API_URL.replace('/wp/v2', '/acf/v3/options'),
      API_URL.split('/wp-json')[0] + '/wp-json/acf/v3/options',
      API_URL.replace('/wp/v2', '/acf/v3/site-settings'),
    ];

    const slugs = ['site-settings', 'options', 'global', ''];

    for (const baseUrl of baseUrls) {
      for (const slug of slugs) {
        const url = slug ? `${baseUrl}/${slug}` : baseUrl;
        try {
          const response = await axios.get(url);
          // Native ACF returns data directly or under .acf
          if (response.data) {
            const data = response.data.acf || response.data;
            if (data && Object.keys(data).length > 0) {
              console.log(`Successfully fetched site settings from: ${url}`);
              return data;
            }
          }
        } catch (error: any) {
          if (error.response?.status !== 404) {
            console.warn(`Attempted ${url} but failed:`, error.message);
          }
        }
      }
    }
    
    console.error('Failed to fetch site settings. Since "ACF to REST API" is deprecated, please ensure you have enabled "show_in_rest" in your acf_add_options_page() setting in functions.php.');
    return null;
  },

  /**
   * Fetches page data by slug
   * @param slug The page slug (e.g., 'about', 'certificates')
   */
  async getPageData(slug: string) {
    const searchSlug = slug === 'index' || slug === '' || slug === '/' ? 'home' : slug;
    
    // Try different base URLs for pages if the primary one fails
    const pageEndpoints = [
      `${API_URL}/pages`,
      API_URL.replace('/api/wp-json/wp/v2', '/wp-json/wp/v2/pages'),
      'https://minimuslin.com.tr/wp-json/wp/v2/pages',
      'https://minimuslin.com.tr/api/wp-json/wp/v2/pages',
    ];

    for (const endpoint of pageEndpoints) {
      try {
        console.log(`Fetching page data for slug: ${searchSlug} from ${endpoint}`);
        
        const response = await axios.get(endpoint, {
          params: {
            slug: searchSlug,
            _embed: true
          }
        });

        if (response.data && response.data.length > 0) {
          const page = response.data[0];
          return {
            id: page.id,
            title: page.title.rendered,
            acf: page.acf || {}
          };
        }
      } catch (error: any) {
        if (error.response?.status !== 404) {
          console.warn(`Attempted ${endpoint} but failed:`, error.message);
        }
      }
    }
    
    console.warn(`No page found with slug: ${searchSlug} after trying all endpoints.`);
    return null;
  },

  /**
   * Combined fetch for Vike data() function
   */
  async getPageContent(slug: string) {
    const [siteSettings, pageData] = await Promise.all([
      this.getSiteSettings(),
      this.getPageData(slug)
    ]);

    return {
      siteSettings,
      pageData
    };
  }
};
