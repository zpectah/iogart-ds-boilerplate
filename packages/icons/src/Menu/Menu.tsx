import React from 'react';
import { SvgIcon } from '@iogart-ds-boilerplate/core/src';

const Menu = (props: SvgIcon) => {
  const { size = 16, color = 'currentColor', ...rest } = props;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill={color} {...rest}>
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
    </svg>
  );
};

export default Menu;
