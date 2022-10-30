import { WithChildrenProps, WithClassNameProps, WithStyleProps } from '@iogart-ds-boilerplate/core/src';

export interface TagProps extends WithChildrenProps, WithClassNameProps, WithStyleProps {}

export interface UseTagStylesProps extends Pick<TagProps, 'className' | 'style'> {}

export interface UseTagStylesReturn extends Pick<TagProps, 'className' | 'style'> {}

export interface UseTagProps {}

export interface UseTagReturn {}
