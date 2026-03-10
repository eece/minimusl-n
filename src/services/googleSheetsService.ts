import axios from 'axios';
import Papa from 'papaparse';
import fallbackData from '../content-fallback.json';

// Use environment variable or fallback to a default ID
const SHEET_ID = (((import.meta as any).env.VITE_GOOGLE_SHEETS_ID || '2PACX-1vRBp_QEni0zXQaln_SM2gKHgtvit_-c9-VtsgDeUVWVgnFd4iD9Ykt2-nUNVF6Y44N60fZN6wPVnQLN') as string).trim();

// Mapping of route slugs to Google Sheets GID numbers
export const pageConfig: Record<string, string> = {
  'site-settings': '986511693',
  'index': '789748665',
  'about': '1834964925',
  'certificates': '107760198'
};

export interface SheetData {
  [key: string]: any;
}

/**
 * Fetches data from a specific Google Sheet tab and parses it.
 * Falls back to local JSON if fetching fails.
 */
export async function fetchSheetData(slug: string): Promise<SheetData> {
  const gid = pageConfig[slug];
  
  if (!gid) {
    console.warn(`No GID found for slug: ${slug}. Using fallback.`);
    return (fallbackData as any)[slug] || {};
  }

  // Determine the correct URL based on the ID type
  let url = '';
  if (SHEET_ID.startsWith('2PACX-')) {
    // "Published to Web" URL
    url = `https://docs.google.com/spreadsheets/d/e/${SHEET_ID}/pub?gid=${gid}&single=true&output=csv`;
    console.log({url});
  } else {
    // Regular spreadsheet ID - requires the sheet to be shared as "Anyone with the link can view"
    url = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/export?format=csv&gid=${gid}`;
  }

  try {
    const response = await axios.get(url, { timeout: 10000 });
    
    // If Google returns an HTML page instead of CSV, it's likely an error page or login prompt
    if (typeof response.data === 'string' && response.data.trim().toLowerCase().startsWith('<!doctype html>')) {
      console.error(`Error: Received HTML instead of CSV for ${slug}. Check if the spreadsheet is shared correctly.`);
      return (fallbackData as any)[slug] || {};
    }

    const parsed = Papa.parse(response.data as string, { header: true, skipEmptyLines: true });
    
    if (parsed.errors && parsed.errors.length > 0 && parsed.data.length === 0) {
      console.error(`CSV Parsing errors for ${slug}:`, parsed.errors);
      return (fallbackData as any)[slug] || {};
    }

    // Convert array of objects (Key, Value) to a single object
    const data: SheetData = {};
    parsed.data.forEach((row: any) => {
      if (row.Key && row.Value !== undefined && row.Value !== null) {
        const keys = row.Key.split('.');
        let current = data;
        for (let i = 0; i < keys.length - 1; i++) {
          if (!current[keys[i]]) current[keys[i]] = {};
          current = current[keys[i]];
        }
        
        let value = row.Value;
        // Try to parse JSON if the value looks like an array or object
        const trimmedValue = value.toString().trim();
        if (trimmedValue.startsWith('[') || trimmedValue.startsWith('{')) {
          try {
            value = JSON.parse(trimmedValue);
          } catch (e) {
            // Keep as string if parsing fails
          }
        }
        
        current[keys[keys.length - 1]] = value;
      }
    });

    // Merge with fallback data to ensure all required keys exist
    const fallback = (fallbackData as any)[slug] || {};
    return { ...fallback, ...data };
  } catch (error) {
    console.error(`Error fetching sheet data for ${slug}:`, error);
    return (fallbackData as any)[slug] || {};
  }
}

/**
 * Fetches all necessary data for a page, including site-wide settings.
 */
export async function getPageContent(slug: string) {
  const [siteSettings, pageData] = await Promise.all([
    fetchSheetData('site-settings'),
    fetchSheetData(slug)
  ]);

  return {
    siteSettings,
    pageData
  };
}
