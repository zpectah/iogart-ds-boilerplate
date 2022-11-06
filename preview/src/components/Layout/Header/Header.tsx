import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.sass';

const Header = () => (
  <header className={styles.Header}>
    <div className={styles.wrapper}>
      <div>
        <Link to="/">
          Iogart DS Preview
        </Link>
      </div>
      <div>(options)</div>
    </div>
  </header>
);

export default Header;
