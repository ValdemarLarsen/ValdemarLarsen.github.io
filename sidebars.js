/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  //tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  docs: [
    {
      type: 'doc',
      label: 'Documentation',
      id: 'index',
    },
    {
      type: 'link',
      label: 'Group Outfits',
      href: '/docs/groupoutfits',
    },
    {
      type: 'link',
      label: 'Lumberjack',
      href: '/docs/lumberjack',
    },
    {
      type: 'link',
      label: 'Recycler',
      href: '/docs/recycler',
    },
    {
      type: 'link',
      label: 'Skills',
      href: '/docs/skills',
    },
  ],
  groupoutfits: [
    {
      type: 'link',
      label: '← Documentation',
      href: '/docs',
    },
    {
      type: 'category',
      label: 'Group Outfits',
      link: {
        type: 'generated-index',
        title: 'OT Groupoutfits',
        description: '-',
      },
      items: [
        {
          type: 'autogenerated',
          dirName: 'groupoutfits',
        },
      ],
    },
  ],
  lumberjack: [
    {
      type: 'link',
      label: '← Documentation',
      href: '/docs',
    },
    {
      type: 'category',
      label: 'Lumberjack',
      link: {
        type: 'generated-index',
        title: 'OT Lumberjack',
        description: '-',
      },
      items: [
        {
          type: 'autogenerated',
          dirName: 'lumberjack',
        },
      ],
    },
  ],
  recycler: [
    {
      type: 'link',
      label: '← Documentation',
      href: '/docs',
    },
    {
      type: 'category',
      label: 'Recycler',
      link: {
        type: 'generated-index',
        title: 'OT Recycler',
        description: '-',
      },
      items: [
        {
          type: 'autogenerated',
          dirName: 'recycler',
        },
      ],
    },
  ],
  skills: [
    {
      type: 'link',
      label: '← Documentation',
      href: '/docs',
    },
    {
      type: 'category',
      label: 'Skills',
      link: {
        type: 'generated-index',
        title: 'OT Skills',
        description: '-',
      },
      items: [
        {
          type: 'autogenerated',
          dirName: 'skills',
        },
      ],
    },
  ],
};

module.exports = sidebars;