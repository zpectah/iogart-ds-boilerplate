import { createElement } from 'react';
import { ButtonProps } from './types';
import { useButtonStyles } from './useButtonStyles';
import { useButton } from './useButton';

const Button = (props: ButtonProps) => {
  const { children, className, style, variant, size, pill, loading, startIcon, endIcon, disabled, ...restOf } = props;

  const {
    className: composedClassName,
    style: composedStyle,
    preloaderClassName,
  } = useButtonStyles({ className, style, variant, size, pill, loading, disabled });
  const { children: composedChildren } = useButton({ children, startIcon, endIcon, loading, preloaderClassName });

  return createElement(
    'button',
    {
      className: composedClassName,
      style: composedStyle,
      disabled: disabled,
      ['aria-disabled']: disabled,
      ...restOf,
    },
    composedChildren
  );
};

export default Button;
