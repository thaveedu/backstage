export const coreConcepts = [
  {
    title: 'Iconography',
    slug: 'iconography',
  },
  {
    title: 'Layout',
    slug: 'layout',
  },
  {
    title: 'Responsive',
    slug: 'responsive',
  },
  {
    title: 'Theming',
    slug: 'theming',
  },
  {
    title: 'Typography',
    slug: 'typography',
  },
];

export const layoutComponents = [
  {
    title: 'Box',
    slug: 'box',
  },
  {
    title: 'Container',
    slug: 'container',
  },
  {
    title: 'Grid',
    slug: 'grid',
  },
  {
    title: 'Inline',
    slug: 'inline',
  },
  {
    title: 'Stack',
    slug: 'stack',
  },
];

export const components = [
  {
    title: 'Button',
    slug: 'button',
  },
  {
    title: 'Checkbox',
    slug: 'checkbox',
  },
  {
    title: 'Heading',
    slug: 'heading',
  },
  {
    title: 'Icon',
    slug: 'icon',
  },
  {
    title: 'Table',
    slug: 'table',
  },
  {
    title: 'Text',
    slug: 'text',
  },
];

export type ScreenSize = {
  title: string;
  slug: string;
  width: number;
};

export const screenSizes: ScreenSize[] = [
  { title: 'Mobile', slug: 'mobile', width: 390 },
  { title: 'Tablet', slug: 'tablet', width: 768 },
  { title: 'Desktop', slug: 'desktop', width: 1280 },
  { title: 'Wide', slug: 'wide', width: 1600 },
];
