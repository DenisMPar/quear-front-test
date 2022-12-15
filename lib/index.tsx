export function getPath() {
  let path: string;
  if (typeof window !== "undefined") {
    path = window.location.pathname;
    return path;
  }
}
