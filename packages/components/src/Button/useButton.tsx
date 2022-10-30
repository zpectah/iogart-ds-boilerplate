import React from 'react';
import { UseButtonProps, UseButtonReturn } from './types';
import { SpinnerThreeDots } from '@iogart-ds-boilerplate/icons/src';

export const useButton = ({
  children,
  startIcon,
  endIcon,
  loading,
  preloaderClassName,
}: UseButtonProps): UseButtonReturn => {
  const node = (
    <>
      {startIcon && startIcon}
      {children}
      {endIcon && endIcon}
      {loading && (
        <span className={preloaderClassName}>
          <SpinnerThreeDots size={10} />
        </span>
      )}
    </>
  );

  return {
    children: node,
  };
};
