/**
 * Get the base path for the application
 * This is used to handle GitHub Pages subdirectory deployment
 */
export const basePath =
  process.env.NODE_ENV === "production" ? "/portfolio" : "";

/**
 * Get the full path for an asset
 * @param path - The asset path (e.g., '/profile.jpg')
 * @example
 * // In development: '/profile.jpg'
 * // In production: '/portfolio/profile.jpg'
 * const imageSrc = assetPath('/profile.jpg');
 */
export const assetPath = (path: string): string => {
  // Ensure path starts with /
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${basePath}${cleanPath}`;
};
