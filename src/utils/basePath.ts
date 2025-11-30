/**
 * Get the base path for assets.
 * This uses the NEXT_PUBLIC_BASE_PATH environment variable set in next.config.js
 * - In development: empty string (root)
 * - In production on GitHub Pages: /cv
 */
export const getBasePath = (): string => {
  return process.env.NEXT_PUBLIC_BASE_PATH || '';
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
