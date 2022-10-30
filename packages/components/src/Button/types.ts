import { ReactNode } from 'react';
import { ButtonElement } from '@iogart-ds-boilerplate/core/src';

export interface ButtonProps extends ButtonElement {
  variant?: 'default' | 'outlined' | 'contained'; // TODO
  size?: 'small' | 'medium' | 'large'; // TODO
  pill?: boolean;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  loading?: boolean;
  disabled?: boolean;
}

export interface UseButtonStylesProps
  extends Pick<ButtonProps, 'className' | 'style' | 'variant' | 'size' | 'pill' | 'loading' | 'disabled'> {}

export interface UseButtonStylesReturn extends Pick<ButtonProps, 'className' | 'style'> {
  preloaderClassName: string;
}

export interface UseButtonProps
  extends Pick<ButtonProps, 'children' | 'loading' | 'startIcon' | 'endIcon'>,
    Pick<UseButtonStylesReturn, 'preloaderClassName'> {}

export interface UseButtonReturn extends Pick<ButtonProps, 'children'> {}
