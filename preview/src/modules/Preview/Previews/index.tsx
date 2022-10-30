import React, { ReactNode } from 'react';
import { default as ButtonPreview } from './ButtonPreview';
import { default as TagPreview } from './TagPreview';

export type PreviewItem = {
  meta: {
    title: string,
    name: string,
  },
  node: ReactNode,
}

const previews: { [k: string]: PreviewItem } = {
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
