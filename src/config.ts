import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://blackbird-web.vercel.app/", // replace this with your deployed domain
  author: "Chibogu Chisom && Jacob Chiu",
  profile: "https://github.com/BlackBirdResearchGroup",
  desc: "BlackBird Research is a group of people who are intersted in security and privacy.",
  title: "BlackBird Research",
  ogImage: "BlackBird Research-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 3,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  editPost: {
    url: "https://github.com/BlackBirdResearchGroup/Blackbird-web/tree/main/src/content/blog",
    text: "Suggest Changes",
    appendFilePath: true,
  },
};

export const LOCALE = {
  lang: "en", // html lang code. Set this empty and default will be "en"
  langTag: ["en-EN"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/BlackBirdResearchGroup/Blackbird-web/",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "Instagram",
    href: "https://instagram.com/your-profile",
    linkTitle: `${SITE.title} on Instagram`,
    active: false,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/your-profile",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: false,
  },
  {
    name: "Mail",
    href: "mailto:yourmail@gmail.com",
    linkTitle: `Send an email to ${SITE.title}`,
    active: true,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/your-profile",
    linkTitle: `${SITE.title} on Twitter`,
    active: true,
  },
  {
    name: "Twitch",
    href: "https://twitch.tv/your-channel",
    linkTitle: `${SITE.title} on Twitch`,
    active: false,
  },
  {
    name: "YouTube",
    href: "https://youtube.com/your-channel",
    linkTitle: `${SITE.title} on YouTube`,
    active: false,
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/your-number",
    linkTitle: `${SITE.title} on WhatsApp`,
    active: false,
  },
  {
    name: "Snapchat",
    href: "https://snapchat.com/add/your-username",
    linkTitle: `${SITE.title} on Snapchat`,
    active: false,
  },
  {
    name: "Pinterest",
    href: "https://pinterest.com/your-profile",
    linkTitle: `${SITE.title} on Pinterest`,
    active: false,
  },
  {
    name: "TikTok",
    href: "https://tiktok.com/@your-username",
    linkTitle: `${SITE.title} on TikTok`,
    active: false,
  },
  {
    name: "CodePen",
    href: "https://codepen.io/your-profile",
    linkTitle: `${SITE.title} on CodePen`,
    active: false,
  },
  {
    name: "Discord",
    href: "https://discord.com/invite/your-invite-code",
    linkTitle: `${SITE.title} on Discord`,
    active: false,
  },
  {
    name: "GitLab",
    href: "https://gitlab.com/your-profile",
    linkTitle: `${SITE.title} on GitLab`,
    active: false,
  },
  {
    name: "Reddit",
    href: "https://reddit.com/user/your-username",
    linkTitle: `${SITE.title} on Reddit`,
    active: false,
  },
  {
    name: "Skype",
    href: "skype:your-username?chat",
    linkTitle: `${SITE.title} on Skype`,
    active: false,
  },
  {
    name: "Steam",
    href: "https://steamcommunity.com/id/your-id",
    linkTitle: `${SITE.title} on Steam`,
    active: false,
  },
  {
    name: "Telegram",
    href: "https://t.me/your-username",
    linkTitle: `${SITE.title} on Telegram`,
    active: false,
  },
  {
    name: "Mastodon",
    href: "https://mastodon.social/@your-username",
    linkTitle: `${SITE.title} on Mastodon`,
    active: false,
  },
];