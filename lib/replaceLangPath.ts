export const replaceLangPath = (path: string, lang: string) => {
  window.location.pathname.replace(/^\/[^/]+/, `/${lang}`);
}