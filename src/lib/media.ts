import { siteConfig, waLink } from "@/config/site";

export const LOGO = siteConfig.logo;
export const PHONE_DISPLAY = siteConfig.phoneDisplay;
export const PHONE_TEL = siteConfig.phoneTel;
export const WHATSAPP = siteConfig.whatsapp;
export const EMAIL = siteConfig.email;
export const SITE = siteConfig.website;
export { waLink };

export type GalleryCategory = string;
export interface Photo {
  url: string;
  alt: string;
  category: string;
}

export const PHOTOS: Photo[] = [...siteConfig.gallery];

const heroImage = (index: number) =>
  siteConfig.hero[index]?.image ?? siteConfig.hero[0]?.image ?? siteConfig.logo;

const galleryImage = (index: number) =>
  siteConfig.gallery[index]?.url ??
  siteConfig.gallery[0]?.url ??
  siteConfig.about.image ??
  siteConfig.logo;

// Safe image aliases for reusable template components.
// Never assume a site has a fixed number of gallery images.
export const IMG = {
  completedModern: heroImage(0),
  completedCurved: siteConfig.about.image,
  renovationCrew: galleryImage(2),
  renovationFinished: heroImage(1),
  maintenanceClean: heroImage(2),
  coverFitted: galleryImage(3),
  coverInstall: galleryImage(4),
  equipment: galleryImage(0),
};
