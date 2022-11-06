import React, { useState } from 'react';
import { Scrollable } from '../../Scrollable';
import Searchbar from './Searchbar';
import Navbar from './Navbar';
import previews from '../../../previews';
import styles from './Sidebar.module.sass';

const Sidebar = () => {

  const [ search, setSearch ] = useState<{ input: string }>({ input: '' });

  const navItems = [

    {
      path: '/preview/colors',
      label: previews.colors?.meta?.title,
    },

    {
      path: '/preview/button',
      label: previews.button?.meta?.title,
    },

    {
      path: '/preview/tag',
      label: previews.tag?.meta?.title,
    },

  ];

  return (
    <aside className={styles.Sidebar}>
      <div className={styles.bar}>
        <Searchbar value={search.input} onChange={(value) => setSearch({ input: value })} />
      </div>
      <div className={styles.wrapper}>
        <Scrollable>
          <div className={styles.content}>
            <Navbar navItems={navItems} />
          </div>
        </Scrollable>
      </div>
    </aside>
  );
};

export default Sidebar;
