import React, { ReactNode } from 'react';
import { default as ButtonPreview } from './Button.preview';
import { default as TagPreview } from './Tag.preview';
import { default as ColorsPreview } from './Colors.preview';

export type PreviewItem = {
  meta: {
    title: string,
    name: string,
  },
  node: ReactNode,
}

const previews: { [k: string]: PreviewItem } = {
  colors: {
    meta: {
      name: 'colors',
      title: 'Colors',
    },
    node: <ColorsPreview />,
  },
  button: {
    meta: {
      name: 'button',
      title: 'Button',
    },
    node: <ButtonPreview />,
  },
  tag: {
    meta: {
      name: 'tag',
      title: 'Tag',
    },
    node: <TagPreview />,
  },
};

export default previews;
