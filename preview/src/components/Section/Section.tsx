import React, { createElement, FC, ReactNode, useMemo } from 'react';
import { Container } from '../Container';
import { Divider } from '../Divider';
import styles from './Section.module.styl';

export interface SectionProps {
  children: ReactNode;
  title?: string;
  context?: 'h2' | 'h3' | 'h4';
  container?: boolean;
  disableDivider?: boolean;
}

const Section: FC<SectionProps> = ({ children, title, container, disableDivider, context = 'h2' }) => {
  const titleNode = title && createElement(
    context,
    { className: styles.title },
    (
      <Container>
        {title}
      </Container>
    ),
  );

  const contentNode = useMemo(() => {
    if (container) {
      return (
        <Container>
          {children}
        </Container>
      );
    }

    return children;
  }, [ children, container ]);

  return (
    <section className={styles.Section}>
      {titleNode}
      <div className={styles.container}>
        {contentNode}
      </div>
      {(context === 'h2' && !disableDivider) && <Divider />}
    </section>
  );
}

export default Section;
