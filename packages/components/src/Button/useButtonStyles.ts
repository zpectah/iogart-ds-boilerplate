import { UseButtonStylesProps, UseButtonStylesReturn } from './types';
import { useStyleProps } from '@iogart-ds-boilerplate/core/src';
import styles from './Button.module.styl';

export const useButtonStyles = ({ ...rest }: UseButtonStylesProps): UseButtonStylesReturn => {
  const { className, style } = useStyleProps({ ...rest });

  return {
    className: [styles.button, className].join(' '),
    style: Object.assign({}, style),
  };
};
