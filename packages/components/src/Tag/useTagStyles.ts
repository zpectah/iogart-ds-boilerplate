import { UseTagStylesProps, UseTagStylesReturn } from './types';
import { useStyleProps } from '@iogart-ds-boilerplate/core/src';
import styles from './Tag.module.sass';

export const useTagStyles = ({ ...rest }: UseTagStylesProps): UseTagStylesReturn => {
  const { className, style } = useStyleProps({ ...rest });

  return {
    className: [styles.tag, className].join(' '),
    style: Object.assign({}, style),
  };
};
