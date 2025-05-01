// Configuration for all social media profile URLs
const PERSONAL_SOCIAL_PROFILES: {
  github?: string;
  facebook?: string;
  linkedin?: string;
  spotify?: string;
} = {
  github: "https://github.com/RosieNg",
  facebook: "https://www.facebook.com/hong.00003",
  linkedin: "https://www.linkedin.com/in/rosiehn/",
  spotify: "https://open.spotify.com/show/4Pppt42NPK2XzKwNIoW7BR",
};

// Core website metadata for SEO and display
const WEBSITE_CONFIG = {
  title: "The Me Journal",
  description: "RosieHN's personal blog",
};

// Export constants with descriptive aliases
export { PERSONAL_SOCIAL_PROFILES as SOCIAL_MEDIA, WEBSITE_CONFIG as SITE };

// GitHub repository URL for blog content source
export const GITHUB_CONTENT_SOURCE = "https://github.com/RosieHN/My-Blog/tree/master/src/content/blog";
