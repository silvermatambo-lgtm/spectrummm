import { siteConfig, waLink } from "@/config/site";

export const LOGO = siteConfig.logo;
export const PHONE_DISPLAY = siteConfig.phoneDisplay;
export const PHONE_TEL = siteConfig.phoneTel;
export const WHATSAPP = siteConfig.whatsapp;
export const EMAIL = siteConfig.email;
export const SITE = siteConfig.website;
export { waLink };
export type GalleryCategory = string;
export interface Photo { url: string; alt: string; category: string; }
export const PHOTOS: Photo[] = [...siteConfig.gallery];
export const IMG = {
  completedModern: siteConfig.hero[0].image,
  completedCurved: siteConfig.about.image,
  renovationCrew: siteConfig.gallery[2].url,
  renovationFinished: siteConfig.hero[1].image,
  maintenanceClean: siteConfig.hero[2].image,
  coverFitted: siteConfig.gallery[5].url,
  coverInstall: siteConfig.gallery[6].url,
  equipment: siteConfig.gallery[7].url,
};
