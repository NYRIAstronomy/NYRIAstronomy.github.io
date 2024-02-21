import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {text: 'About',     href: getPermalink('/about')},
    {text: 'Members',   href: getPermalink('/members')},
    {text: 'Workshops', href: getPermalink('/workshops')},
    {text: 'Events',    href: getPermalink('/events')},
    {
      text: 'Blog',
      links: [
        {
          text: 'Blog List',
          href: getBlogPermalink(),
        },
        {
          text: 'Article',
          href: getPermalink('get-started-website-with-astro-tailwind-css', 'post'),
        },
        {
          text: 'Article (with MDX)',
          href: getPermalink('markdown-elements-demo-post', 'post'),
        },
        {
          text: 'Category Page',
          href: getPermalink('tutorials', 'category'),
        },
        {
          text: 'Tag Page',
          href: getPermalink('astro', 'tag'),
        },
      ],
    },
    {text: 'Jobs',      href: getPermalink('/jobs')},
    {text: 'Links',     href: getPermalink('/links')},
    {text: 'Contact',   href: getPermalink('/contact')},
  ],
  // actions: [{ text: 'Download', href: 'https://github.com/onwidget/astrowind', target: '_blank' }],
};

export const footerData = {
  // links: [
  //   {title: 'About',     href: getPermalink('/about')},
  //   {title: 'Members',   href: getPermalink('/members')},
  //   {title: 'Workshops', href: getPermalink('/workshops')},
  //   {title: 'Events',    href: getPermalink('/events')},
  //   {title: 'Blog',      href: getBlogPermalink()},
  //   {title: 'Jobs',      href: getPermalink('/jobs')},
  //   {title: 'Links',     href: getPermalink('/links')},
  //   {title: 'Contact',   href: getPermalink('/contact')},
  // ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/onwidget/astrowind' },
  ],
};
