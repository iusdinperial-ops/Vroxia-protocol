/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Protocol',
      collapsed: false,
      items: ['intro', 'udsx'],
    },
    {
      type: 'category',
      label: 'Security',
      collapsed: false,
      items: ['privacy', 'token-metadata'],
    },
    {
      type: 'category',
      label: 'Ecosystem',
      collapsed: false,
      items: ['latam', 'legal'],
    },
  ],
};

export default sidebars;
