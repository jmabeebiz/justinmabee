// All page content lives here — edit this file to update the site.
// Strings may contain inline HTML (<em>, <a>, entities); they render via set:html.

export const meta = {
  title: 'Justin Mabee — Creative Director & Brand Designer',
  description:
    'Creative director and brand designer with 13 years of client work. Available for full-time and contract roles at agencies and in-house teams. Based in NJ, open to remote.',
  email: 'info@justinmabee.com',
  resume: 'resume.pdf',
  socialImage: '/social.png',
};

export const header = {
  name: 'Justin Mabee',
  role: 'Creative Director &amp; Brand Designer &mdash; NJ / Philly',
  currently: 'Currently taking on contract work and exploring full-time opportunities.',
};

export const opening = {
  body: `I've spent 13 years running a design studio, leading brand and digital work from strategy
    through production for 600+ clients. Now I'm looking to bring that experience inside a team &mdash;
    as a <em>Creative Director</em> or senior designer at a <em>full-service digital agency</em>
    or in-house creative department. I work fast, operate independently, and know how to run
    a project from brief to launch.`,
  availability: ['Available for full-time roles', 'Open to contract', 'Remote or hybrid NJ/Philly metro'],
};

export const experience = [
  {
    name: '<a class="u-link" href="https://arcandatlas.co">Arc &amp; Atlas</a>',
    sub: 'Founder &amp; Creative Director &mdash; brand identity, web design, SEO',
    metrics: [
      ['600+', 'projects delivered'],
      ['35%', 'avg. conversion lift'],
      ['98%', 'client satisfaction'],
      ['75%', 'repeat clients'],
    ],
    year: '2012&ndash;',
  },
  { name: 'Postmates', sub: 'Social Media Support Specialist', year: '2017&ndash;18' },
  { name: 'Lyft', sub: 'Social Media Support Specialist', year: '2016&ndash;17' },
  { name: 'Apple', sub: 'Mobile Technician', year: '2015&ndash;16' },
];

export const skills = [
  {
    label: 'Creative Direction',
    detail: `End-to-end ownership from brief to launch. Past clients include
      <em>DoorDash</em>, <em>Harvard Medical School</em>, and <em>TCU</em>.
      Comfortable leading a project solo or directing as a senior contributor on an existing team.`,
  },
  {
    label: 'Brand Identity',
    detail: `Logo systems, visual language, brand guidelines, rollout across print and digital.
      100+ complete identity systems delivered across healthcare, legal, hospitality,
      SaaS, education, and consumer.`,
  },
  {
    label: 'Web Design &amp; Build',
    detail: `High-fidelity design in <em>Figma</em>, production builds in <em>Squarespace</em>,
      <em>Framer</em>, and <em>Webflow</em>. HTML/CSS proficient; ships independently
      or alongside developers.`,
  },
  {
    label: 'Strategy &amp; Content',
    detail: `Brand strategy, site architecture, copy direction, and organic SEO.
      13 years of client work means knowing how to ask the right questions before touching a brief.`,
  },
];

export const tools = [
  'Figma',
  'Adobe Creative Cloud',
  'Squarespace',
  'Framer',
  'Webflow',
  'Notion',
  'Jira',
  'Slack',
  'Raycast',
  'AI-assisted &mdash; Claude, Perplexity, and others',
];

const ext = (url: string, text: string) =>
  `<a class="u-link" href="${url}" target="_blank" rel="noopener">${text}</a>`;

export const recognition = [
  { name: 'Circle Community Leader', detail: 'Squarespace', year: '2023&ndash;' },
  { name: 'Trusted Partner', detail: 'Squarespace', year: '2018&ndash;' },
  { name: `Featured &mdash; ${ext('https://footer.design', 'footer.design')}`, detail: 'Arc &amp; Atlas', year: '2025' },
  { name: `Featured &mdash; ${ext('https://qubeawards.com', 'qubeawards.com')}`, detail: 'Arc &amp; Atlas', year: '2025' },
  { name: `Featured &mdash; ${ext('https://designrush.com', 'Design Rush')}`, detail: 'Mind Body Ecology Institute', year: '2024' },
];

export const selectedWork = [
  {
    name: 'Radius Books',
    url: 'https://radiusbooks.org',
    desc: 'Custom Squarespace build for an art book publisher with a clean storefront, optimized checkout flow, and bespoke code additions that extend well beyond what the platform offers out of the box.',
    tag: 'Web, Ecommerce',
  },
  {
    name: 'NYC-CBT',
    url: 'https://nyc-cbt.org',
    desc: 'Full brand identity and website for a New York therapy nonprofit. Visual system, copy direction, and site architecture designed to communicate trust and lower the barrier to seeking care.',
    tag: 'Web, Brand',
  },
  {
    name: 'Mark Ingram Atelier',
    url: 'https://markingramatelier.com',
    desc: 'Web presence for a renowned New York bridal designer with elevated art direction, custom dress exploration functionality, and a shopping experience that matches the luxury of the brand.',
    tag: 'Web',
  },
];

// [domain, tag]
export const portfolio: [string, string][] = [
  ['radiusbooks.org', 'Web, Ecommerce'],
  ['ochoaco.com', 'Web'],
  ['jennirawlings.com', 'Web, Brand'],
  ['lyric.ai', 'Web'],
  ['secondsight-ts.com', 'Web'],
  ['allforuke.com', 'Web, Brand'],
  ['thebondagency.com', 'Web'],
  ['seaglassohio.com', 'Web'],
  ['mbei.org', 'Brand, Web'],
  ['coastalridge.com', 'Web'],
  ['nyc-cbt.org', 'Web, Brand'],
  ['suavecitosm.com', 'Web'],
  ['getgrubbyprogram.com', 'Web, Brand'],
  ['markingramatelier.com', 'Web'],
  ['drseltzerlifestylemedicine.com', 'Web'],
  ['interwovenconnections.ca', 'Web'],
  ['slidestar.com', 'Web'],
  ['getmanatee.com', 'Web'],
  ['villanooressaouira.com', 'Web, Brand'],
];

export const education = {
  degree: 'M.S. Entertainment Business',
  school: 'Full Sail University',
  year: '2013',
};

export const contact = [
  { label: 'Studio', href: 'https://arcandatlas.co', text: 'arcandatlas.co', external: true },
  { label: 'Resume', href: 'resume.pdf', text: 'Download PDF', external: false },
];

export const socials = [
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/justinmabee',
    svg: '<rect x="2" y="2" width="20" height="20" rx="3"/><path d="M7 10v7"/><circle cx="7" cy="7" r="1" fill="currentColor" stroke="none"/><path d="M11 10v7m0-4a3 3 0 0 1 6 0v4"/>',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/jmabeebiz',
    svg: '<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>',
  },
  {
    label: 'Dribbble',
    href: 'https://dribbble.com/jmabeebiz',
    svg: '<circle cx="12" cy="12" r="10"/><path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"/>',
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/arcandatlasco',
    svg: '<rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>',
  },
  {
    label: 'Bluesky',
    href: 'https://bsky.app/profile/jmabee.bsky.social',
    svg: '<path d="M6.335 5.144c-1.654-1.199-4.335-2.127-4.335.826c0 .59.35 4.953.556 5.661c.713 2.463 3.13 2.75 5.444 2.369c-4.045.665-4.889 3.208-2.667 5.41c1.03 1.018 1.913 1.59 2.667 1.59c2 0 3.134-2.769 3.5-3.5c.333-.667.5-1.167.5-1.5c0 .333.167.833.5 1.5c.366.731 1.5 3.5 3.5 3.5c.754 0 1.637-.571 2.667-1.59c2.222-2.203 1.378-4.746-2.667-5.41c2.314.38 4.73.094 5.444-2.369c.206-.708.556-5.072.556-5.661c0-2.953-2.68-2.025-4.335-.826c-2.293 1.662-4.76 5.048-5.665 6.856c-.905-1.808-3.372-5.194-5.665-6.856z"/>',
  },
];
