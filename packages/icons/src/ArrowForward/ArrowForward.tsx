import React from 'react';
import { SvgIcon } from '@iogart-ds-boilerplate/core/src';

const ArrowForward = (props: SvgIcon) => {
  const { size = 16, color = 'currentColor', ...rest } = props;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill={color} {...rest}>
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
    </svg>
  );
};

export default ArrowForward;
