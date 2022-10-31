import { UseButtonStylesProps, UseButtonStylesReturn } from './types';
import { useStyleProps, ButtonVariantKeys, ButtonSizeKeys } from '@iogart-ds-boilerplate/core/src';
import { classNamesFromList } from '@iogart-ds-boilerplate/utils/src';
import styles from './Button.module.styl';

export const useButtonStyles = ({
  variant = ButtonVariantKeys['default'],
  size = ButtonSizeKeys['medium'],
  pill,
  loading,
  disabled,
  ...rest
}: UseButtonStylesProps): UseButtonStylesReturn => {
  const { className, style } = useStyleProps({ ...rest });

  return {
    className: classNamesFromList([
      styles.Button,
      styles[size],
      styles[variant],
      pill && styles.pill,
      loading && styles.loading,
      disabled && styles.disabled,
      className,
    ]),
    style: Object.assign({}, style),
    childrenClassName: styles.children,
    preloaderClassName: styles.preloader,
  };
};
