import { UseButtonStylesProps, UseButtonStylesReturn } from './types';
import { useStyleProps } from '@iogart-ds-boilerplate/core/src';
import { classNamesFromList } from '@iogart-ds-boilerplate/utils/src';
import styles from './Button.module.styl';

export const useButtonStyles = ({
  variant = 'default',
  size = 'medium',
  pill,
  loading,
  disabled,
  ...rest
}: UseButtonStylesProps): UseButtonStylesReturn => {
  const { className, style } = useStyleProps({ ...rest });

  return {
    className: classNamesFromList([
      styles.button,
      styles[size],
      styles[variant],
      pill && styles.pill,
      loading && styles.loading,
      disabled && styles.disabled,
      className,
    ]),
    style: Object.assign({}, style),
    preloaderClassName: styles.preloader,
  };
};
