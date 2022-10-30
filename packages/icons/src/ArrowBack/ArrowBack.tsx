import React from 'react';
import { SvgIcon } from '@iogart-ds-boilerplate/core/src';

const ArrowBack = (props: SvgIcon) => {
  const { size = 16, color = 'currentColor', ...rest } = props;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill={color} {...rest}>
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
    </svg>
  );
};

export default ArrowBack;
