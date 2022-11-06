import React, { FC, ReactNode } from 'react';
import styles from './Tile.module.styl';

export interface TileProps {
  children?: ReactNode;
  primary?: string;
  secondary?: string;
}

const Tile: FC<TileProps> = ({ children, primary, secondary }) => (
  <div className={styles.Tile}>
    {children && (
      <div className={styles.inner}>
        {children}
      </div>
    )}
    {(primary || secondary) && (
      <div>
        {primary && (
          <div className={styles.textPrimary}>{primary}</div>
        )}
        {secondary && (
          <pre className={styles.textSecondary}>
            <code>{secondary}</code>
          </pre>
        )}
      </div>
    )}
  </div>
);

export default Tile;
