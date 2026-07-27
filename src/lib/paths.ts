export const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

/** Prefix internal paths for GitHub Pages project sites. */
export function href(path: string) {
  if (!path || path.startsWith("http") || path.startsWith("mailto:")) {
    return path;
  }
  if (path.startsWith("#")) {
    return path;
  }
  return `${basePath}${path}`;
}
