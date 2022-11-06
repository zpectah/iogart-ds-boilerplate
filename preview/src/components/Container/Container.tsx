import React, { FC, ReactNode } from 'react';
import styles from './Container.module.sass';

export interface ContainerProps {
  children?: ReactNode;
}

const Container: FC<ContainerProps> = ({ children }) => (
  <div className={styles.Container}>{children}</div>
);

export default Container;
