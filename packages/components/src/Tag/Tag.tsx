import { createElement, FC } from 'react';
import { TagProps } from './types';
import { useTagStyles } from './useTagStyles';
import { useTag } from './useTag';

const Tag: FC<TagProps>  = (props) => {
  const { children, className, style } = props;

  const { className: composedClassName, style: composedStyle } = useTagStyles({ className, style });
  const {} = useTag({});

  return createElement(
    'span',
    {
      className: composedClassName,
      style: composedStyle,
    },
    children,
  );
};

export default Tag;
