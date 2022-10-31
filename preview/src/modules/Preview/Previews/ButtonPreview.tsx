import React from 'react';
import { Button } from '../../../../../dist/components';
import { Close, ArrowBack, ArrowForward } from '../../../../../dist/icons';

const ButtonPreview = () => {

  return (
    <>
      <br />
      <div>
        <Button><Close /></Button>
        <Button variant="outlined"><Close /></Button>
        <Button variant="contained"><Close /></Button>
      </div>
      <br />
      <div>
        <Button size="small">Button small</Button>
        <Button variant="outlined" size="small">Button small outlined</Button>
        <Button variant="contained" size="small">Button small contained</Button>
      </div>
      <br />
      <div>
        <Button>Button medium</Button>
        <Button variant="outlined">Button outlined</Button>
        <Button variant="contained">Button contained</Button>
      </div>
      <br />
      <div>
        <Button size="large">Button large</Button>
        <Button variant="outlined" size="large">Button large contained</Button>
        <Button variant="contained" size="large">Button large contained</Button>
      </div>
      <br />
      <div>
        <Button variant="outlined" size="small" pill>Button small pill</Button>
        <Button variant="contained" size="small" pill>Button small pill</Button>
      </div>
      <br />
      <div>
        <Button variant="outlined" pill>Button pill</Button>
        <Button variant="contained" pill>Button pill</Button>
      </div>
      <br />
      <div>
        <Button variant="outlined" size="large" pill>Button large pill</Button>
        <Button variant="contained" size="large" pill>Button large pill</Button>
      </div>
      <br />
      <div>
        <Button variant="outlined" loading>Button loading</Button>
        <Button variant="contained" loading>Button loading</Button>
        <Button variant="outlined" loading pill>Button loading</Button>
        <Button variant="contained" loading pill>Button loading</Button>
      </div>
      <br />
      <div>
        <Button variant="outlined" disabled>Button disabled</Button>
        <Button variant="contained" disabled>Button disabled</Button>
      </div>
      <br />
      <div>
        <Button variant="outlined" startIcon={<ArrowBack />}>Button</Button>
        <Button variant="contained" startIcon={<ArrowBack />}>Button</Button>
      </div>
      <br />
      <div>
        <Button variant="outlined" endIcon={<ArrowForward />}>Button</Button>
        <Button variant="contained" endIcon={<ArrowForward />}>Button</Button>
        <Button variant="outlined" endIcon={<Close />} pill>Button</Button>
        <Button variant="contained" endIcon={<Close />} pill>Button</Button>
      </div>
      <br />
      <div>
        <Button variant="outlined" startIcon={<ArrowBack />} endIcon={<ArrowForward />}>Button</Button>
        <Button variant="contained" startIcon={<ArrowBack />} endIcon={<ArrowForward />}>Button</Button>
      </div>
      <br />
    </>
  );
};

export default ButtonPreview;
