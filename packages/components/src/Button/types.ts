import { ButtonElement } from '@iogart-ds-boilerplate/core/src';

export interface ButtonProps extends ButtonElement {}

export interface UseButtonStylesProps extends Pick<ButtonElement, 'className' | 'style'> {}

export interface UseButtonStylesReturn extends Pick<ButtonElement, 'className' | 'style'> {}

export interface UseButtonProps {}

export interface UseButtonReturn {}
