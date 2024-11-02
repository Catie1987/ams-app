const localeMap: Record<string, string> = { 
    'en': 'en-US', 
    'vn': 'vi-VN', 
}; 
export function mapLocale(contentfulLocale: string): string { 
    return localeMap[contentfulLocale] || 'en'; 
}

export function mapToContentfulLocale(locale: string): string { const invertedMap: Record<string, string> = { 
    'en': 'en-US', 
    'vn': 'vi-VN', // Add other mappings as needed 
    }; 
return invertedMap[locale] || 'en-US'; }