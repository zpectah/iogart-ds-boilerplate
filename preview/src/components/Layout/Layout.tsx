import React, { useMemo, FC, ReactNode } from 'react';
import { Header } from './Header';
import { Sidebar } from './Sidebar';
import { Container } from '../Container';
import styles from './Layout.module.styl';

export interface LayoutProps {
  children?: ReactNode;
  variant?: 'default' | 'centered';
  title?: string;
}

const Layout: FC<LayoutProps> = ({
  children,
  variant = 'default',
  title,
}) => {
  const variantClassName = {
    default: styles.alignDefault,
    centered: styles.alignCentered,
  };

  const content = useMemo(() => {
    const node = (
      <>
        {title && (
          <Container>
            <h1>{title}</h1>
          </Container>
        )}
        {children}
      </>
    );
    if (variant === 'default') {
      return (
        <>
          <Header />
          <div className={styles.Wrapper}>
            {node}
          </div>
          <Sidebar />
        </>
      );
    }

    return node;
  }, [ children, variant, title ]);

  return (
    <div
      className={[ styles.Layout, variantClassName[variant] ].join(' ')}
    >
      {content}
    </div>
  );
};

export default Layout;
