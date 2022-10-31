import { ReactNode } from 'react';
import { ButtonElement, ButtonVariantTypes, ButtonSizeTypes } from '@iogart-ds-boilerplate/core/src';
export interface ButtonProps extends ButtonElement {
    variant?: ButtonVariantTypes;
    size?: ButtonSizeTypes;
    pill?: boolean;
    startIcon?: ReactNode;
    endIcon?: ReactNode;
    loading?: boolean;
    disabled?: boolean;
}
export interface UseButtonStylesProps extends Pick<ButtonProps, 'className' | 'style' | 'variant' | 'size' | 'pill' | 'loading' | 'disabled'> {
}
export interface UseButtonStylesReturn extends Pick<ButtonProps, 'className' | 'style'> {
    childrenClassName: string;
    preloaderClassName: string;
}
export interface UseButtonProps extends Pick<ButtonProps, 'children' | 'loading' | 'startIcon' | 'endIcon'>, Pick<UseButtonStylesReturn, 'preloaderClassName' | 'childrenClassName'> {
}
export interface UseButtonReturn extends Pick<ButtonProps, 'children'> {
}
//# sourceMappingURL=types.d.ts.map