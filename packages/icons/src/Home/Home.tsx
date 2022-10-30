import React from 'react';
import { SvgIcon } from '@iogart-ds-boilerplate/core/src';

const Home = (props: SvgIcon) => {
  const { size = 16, color = 'currentColor', ...rest } = props;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill={color} {...rest}>
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </svg>
  );
};

export default Home;
