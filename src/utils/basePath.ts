/**
 * Get the base path for assets.
 * In development: empty string (root)
 * In production on GitHub Pages: /webcv
 */
export const getBasePath = (): string => {
  // Check if we're on GitHub Pages by looking at the URL
  if (typeof window !== 'undefined') {
    const { hostname, pathname } = window.location;
    // If hosted on github.io and path starts with repo name
    if (hostname.includes('github.io') && pathname.startsWith('/webcv')) {
      return '/webcv';
    }
  }
  return '';
};

/**
 * Get the full path for a public asset
 * @param path - The path starting with / (e.g., '/email_icon.png')
 */
export const getAssetPath = (path: string): string => {
  const basePath = getBasePath();
  // Ensure path starts with /
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${basePath}${normalizedPath}`;
};

