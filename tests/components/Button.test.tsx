/**
 * @jest-environment jsdom
 */

import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Button } from '../../packages/components/src';

describe('Components: Button', () => {

  it('should be rendered', () => {
    const dom = render(
      <Button>Button</Button>
    );
    const element = dom.container.querySelector('button') as HTMLElement;

    expect(element.textContent).toBe('Button');
  });

  it('should be clicked', () => {
    const callback = jest.fn();
    const dom = render(
      <Button onClick={callback}>Button</Button>
    );
    const element = dom.container.querySelector('button') as HTMLElement;

    fireEvent.click(element);

    expect(callback).toHaveBeenCalledTimes(1);
  });

});
