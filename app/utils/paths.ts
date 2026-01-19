/**
 * Get the base path for the application
 * This is used to handle GitHub Pages subdirectory deployment
 */
export const getBasePath = () => {
  return process.env.NODE_ENV === 'production' ? '/portfolio' : '';
};

/**
 * Get the full path for an asset
 * @param path - The asset path (e.g., '/profile.jpg')
 */
export const getAssetPath = (path: string) => {
  const basePath = getBasePath();
  // Ensure path starts with /
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${basePath}${cleanPath}`;
};
