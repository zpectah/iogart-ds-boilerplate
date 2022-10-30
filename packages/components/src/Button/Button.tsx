import { createElement } from 'react';
import { ButtonProps } from './types';
import { useButtonStyles } from './useButtonStyles';
import { useButton } from './useButton';

const Button = (props: ButtonProps) => {
  const { children, className, style, ...restOf } = props;

  const { className: composedClassName, style: composedStyle } = useButtonStyles({ className, style });
  const {} = useButton({});

  return createElement(
    'button',
    {
      className: composedClassName,
      style: composedStyle,
      ...restOf,
    },
    children
  );
};

export default Button;
