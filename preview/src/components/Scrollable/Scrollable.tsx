import React, { FC, ReactNode } from 'react';
import styles from './Scrollable.module.styl';

export interface ScrollableProps {
  children?: ReactNode;
}

const Scrollable: FC<ScrollableProps> = ({ children }) => (
  <div className={styles.Scrollable}>
    <div className={styles.outer}>
      <div className={styles.inner}>
        {children}
      </div>
    </div>
  </div>
);

export default Scrollable;
