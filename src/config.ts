import type {
  LicenseConfig,
  NavBarConfig,
  ProfileConfig,
  SiteConfig,
} from './types/config'
import { LinkPreset } from './types/config'

export const siteConfig: SiteConfig = {
  title: 'Sakura Kat Systems',
  subtitle: 'Herschel Pravin Pawar\'s Personal Site',
  lang: 'en',
  themeHue: 331,
  banner: {
    enable: true,
    src: 'assets/images/banner.svg.png',
  },
}

export const navBarConfig: NavBarConfig = {
  links: [
    LinkPreset.Home,
    LinkPreset.Archive,
    LinkPreset.About,
    LinkPreset.CV,
    {
      name: 'GitHub',
      url: 'https://github.com/pawarherschel',
      external: true,
    },
  ],
}

export const profileConfig: ProfileConfig = {
  avatar: 'assets/images/photo.png',
  name: 'Herschel Pravin Pawar',
  bio: 'Enthusiastic learner, curious about everything. Looking forward to work on projects that make a difference.',
  links: [
    {
      name: 'Email',
      icon: 'fa6-solid:envelope',
      url: 'mailto:pawarherschel@sakurakat.systems',
    },
    {
      name: 'Phone',
      icon: 'fa6-solid:phone',
      url: 'tel:+919833213306',
    },
    {
      name: 'LinkedIn',
      icon: 'fa6-brands:linkedin',
      url: 'https://www.linkedin.com/in/pawarherschel/',
    },
    {
      name: 'GitHub',
      icon: 'fa6-brands:github',
      url: 'https://github.com/pawarherschel',
    },
    {
        name: 'ORCID',
        icon: 'fa6-brands:orcid',
        url: 'https://orcid.org/0009-0003-3218-801X',
    },
  ],
}

export const licenseConfig: LicenseConfig = {
  enable: true,
  name: 'CC BY-NC-SA 4.0',
  url: 'https://creativecommons.org/licenses/by-nc-sa/4.0/',
}
