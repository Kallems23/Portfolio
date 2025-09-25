/**
 * Get the correct asset path with basePath when needed
 * This handles the difference between local development and GitHub Pages deployment
 * Works for images, PDFs, videos, fonts, CSS, JS and any other static assets
 */
export function getAssetPath(path: string): string {
  // Use the Next.js environment variable that's available on both client and server
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

  // If there's a basePath and the path starts with /, add the basePath
  if (basePath && path.startsWith('/')) {
    return `${basePath}${path}`;
  }

  return path;
}

/**
 * Get the correct image path with basePath when needed
 * This handles the difference between local development and GitHub Pages deployment
 * @deprecated Use getAssetPath instead for consistency
 */
export function getImagePath(path: string): string {
  return getAssetPath(path);
}