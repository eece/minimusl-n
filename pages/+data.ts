import { getPageContent } from '../src/services/googleSheetsService';
import type { PageContextBuiltIn } from 'vike/types';

export async function data(pageContext: PageContextBuiltIn) {
  const urlPathname = pageContext.urlPathname;
  
  // Determine slug based on pathname
  let slug = urlPathname === '/' ? 'index' : urlPathname.replace(/^\/|\/$/g, '');
  
  // Fetch site settings and page-specific data
  const content = await getPageContent(slug);
  
  return content;
}
