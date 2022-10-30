/**
 * @jest-environment jsdom
 */

import * as React from 'react';
import { render } from '@testing-library/react';
import { Tag } from '../../packages/components/src';

describe('Components: Tag', () => {

  it('should be rendered', () => {
    const dom = render(
      <Tag>Tag name</Tag>
    );
    const element = dom.container.querySelector('span') as HTMLElement;

    expect(element.textContent).toBe('Tag name');
  });

});
