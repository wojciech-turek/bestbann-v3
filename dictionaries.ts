import "server-only";

// Define the type based on the en.json structure

export enum Locale {
  EN = "en",
}

const dictionaries = {
  [Locale.EN]: () =>
    import("./app/messages/en.json").then((module) => module.default),
};

export const getDictionary = async (locale: Locale) => dictionaries[locale]();
