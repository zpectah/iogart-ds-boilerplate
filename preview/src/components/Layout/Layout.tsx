import React, { FC, ReactNode } from 'react';
import styles from './Layout.module.styl';

export interface LayoutProps {
  children?: ReactNode;
  variant?: 'default' | 'centered';
}

const Layout: FC<LayoutProps> = (props) => {
  const {
    children,
    variant = 'default',
  } = props;

  const variantClassName = {
    default: styles.variantDefault,
    centered: styles.variantCentered,
  };

  return (
    <div
      className={[ styles.layoutRoot, variantClassName[variant] ].join(' ')}
    >
      <div
        className={styles.layoutContainer}
      >
        {children}
      </div>
    </div>
  );
};

export default Layout;
