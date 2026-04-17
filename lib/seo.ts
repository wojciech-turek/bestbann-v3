export const BASE_URL = "https://bestbann.com";

export const ogImages = {
  home: "/imgs/hero-image.jpg",
  products: "/imgs/home/rattan.png",
  about: "/imgs/home/weronika-and-michal.png",
  contact: "/imgs/home/weronika-and-michal.png",
  privacyPolicy: "/imgs/logo-black.png",
} as const;

export function getOgImage(path: string) {
  return {
    url: path,
    width: 1200,
    height: 630,
  };
}
