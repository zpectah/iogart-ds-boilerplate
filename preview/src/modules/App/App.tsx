import React from 'react';
import { Button, Tag } from '../../../../dist/components';
import style from './index.module.styl';

const App = () => {

  return (
    <div className={style.root}>
      App preview
      <br />
      <Button>Button</Button>
      <br />
      <Tag>tag name</Tag>
    </div>
  );
};

export default App;
