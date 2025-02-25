import "server-only";

type Language = "en" | "vi";

const dictionaries = {
  en: () => import("@/dictionaries/en.json").then((module) => module.default),
  vi: () => import("@/dictionaries/vi.json").then((module) => module.default),
};

export const getDictionary = async (locale: string) => {
  const lang = (locale.includes('-') ? locale.split("-")[0] : locale) as Language;
  return dictionaries[lang]();
};
