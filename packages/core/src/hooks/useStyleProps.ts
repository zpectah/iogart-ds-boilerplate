import { WithClassNameProps, WithStyleProps } from '../types';

export interface UseStylePropsProps extends WithClassNameProps, WithStyleProps {
  classList?: string[];
}

export interface UseStylePropsReturn extends WithClassNameProps, WithStyleProps {}

export const useStyleProps = (props: UseStylePropsProps): UseStylePropsReturn => {
  const { className, style, classList = [] } = props;

  const composedClassNames = [className, ...classList].join(' ');
  const composedStyles = Object.assign({}, style);

  return {
    className: composedClassNames,
    style: composedStyles,
  };
};
