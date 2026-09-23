export type Post = {
  slug: string;
  tag: string;
  title: string;
  excerpt: string;
  body: string;
  date: string;
};

// Placeholder posts — replace with real content, or swap this file
// for a CMS/MDX source once you're posting regularly.
export const posts: Post[] = [
  {
    slug: "nothing-to-hide",
    tag: "Basics",
    title: 'Why "I have nothing to hide" doesn\'t hold up',
    excerpt:
      "The real reason everyday accounts get targeted — and it has nothing to do with what's in them.",
    body: "Full post content goes here.",
    date: "2026-09-01",
  },
  {
    slug: "password-managers-explained",
    tag: "Tools",
    title: "Password managers, explained without the sales pitch",
    excerpt:
      "What they actually do, and how to pick one without getting overwhelmed by features you don't need.",
    body: "Full post content goes here.",
    date: "2026-09-08",
  },
  {
    slug: "this-weeks-breach-translated",
    tag: "News",
    title: "This week's breach, translated",
    excerpt:
      "What happened, who it affects, and the one thing worth doing about it today.",
    body: "Full post content goes here.",
    date: "2026-09-15",
  },
];
