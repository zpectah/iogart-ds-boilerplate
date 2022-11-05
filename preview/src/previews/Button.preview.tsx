import React from 'react';
import { Button } from '../../../dist/components';
import { Close, ArrowBack, ArrowForward } from '../../../dist/icons';
import { Section } from '../components';

const ButtonPreview = () => {

  return (
    <>
      <Section>

        <Section context="h3" title="Button small" container>
          <Button size="small">Button default</Button>
          <Button variant="outlined" size="small">Button outlined</Button>
          <Button variant="contained" size="small">Button contained</Button>
        </Section>

        <Section context="h3" title="Button medium" container>
          <Button>Button default</Button>
          <Button variant="outlined">Button outlined</Button>
          <Button variant="contained">Button contained</Button>
        </Section>

        <Section context="h3" title="Button large" container>
          <Button size="large">Button default</Button>
          <Button variant="outlined" size="large">Button contained</Button>
          <Button variant="contained" size="large">Button contained</Button>
        </Section>

        <Section context="h3" title="Button loading" container>
          <Button loading>Button loading</Button>
          <Button variant="outlined" loading>Button loading</Button>
          <Button variant="contained" loading>Button loading</Button>
        </Section>

        <Section context="h3" title="Button disabled" container>
          <Button disabled>Button disabled</Button>
          <Button variant="outlined" disabled>Button disabled</Button>
          <Button variant="contained" disabled>Button disabled</Button>
        </Section>

        <Section context="h3" title="Button with icon on start" container>
          <Button startIcon={<ArrowBack />}>Button</Button>
          <Button variant="outlined" startIcon={<ArrowBack />}>Button</Button>
          <Button variant="contained" startIcon={<ArrowBack />}>Button</Button>
        </Section>

        <Section context="h3" title="Button with icon on end" container>
          <Button endIcon={<ArrowForward />}>Button</Button>
          <Button variant="outlined" endIcon={<ArrowForward />}>Button</Button>
          <Button variant="contained" endIcon={<ArrowForward />}>Button</Button>
        </Section>

        <Section context="h3" title="Button with icon on both sides" container>
          <Button startIcon={<ArrowBack />} endIcon={<ArrowForward />}>Button</Button>
          <Button variant="outlined" startIcon={<ArrowBack />} endIcon={<ArrowForward />}>Button</Button>
          <Button variant="contained" startIcon={<ArrowBack />} endIcon={<ArrowForward />}>Button</Button>
        </Section>

        <Section context="h3" title="Button with icon only" container>
          <Button><Close /></Button>
          <Button variant="outlined"><Close /></Button>
          <Button variant="contained"><Close /></Button>
        </Section>

      </Section>
      <Section title="Button with Pill shape">

        <Section context="h3" title="Button small" container>
          <Button variant="outlined" size="small" pill>Button outlined pill</Button>
          <Button variant="contained" size="small" pill>Button contained pill</Button>
        </Section>

        <Section context="h3" title="Button medium" container>
          <Button variant="outlined" pill>Button outlined pill</Button>
          <Button variant="contained" pill>Button contained pill</Button>
        </Section>

        <Section context="h3" title="Button large" container>
          <Button variant="outlined" size="large" pill>Button outlined pill</Button>
          <Button variant="contained" size="large" pill>Button contained pill</Button>
        </Section>

        <Section context="h3" title="Button loading" container>
          <Button variant="outlined" loading pill>Button loading</Button>
          <Button variant="contained" loading pill>Button loading</Button>
        </Section>

        <Section context="h3" title="Button disabled" container>
          <Button variant="outlined" disabled pill>Button disabled</Button>
          <Button variant="contained" disabled pill>Button disabled</Button>
        </Section>

        <Section context="h3" title="Button with icon on start" container>
          <Button variant="outlined" startIcon={<ArrowBack />} pill>Button</Button>
          <Button variant="contained" startIcon={<ArrowBack />} pill>Button</Button>
        </Section>

        <Section context="h3" title="Button with icon on end" container>
          <Button variant="outlined" endIcon={<ArrowForward />} pill>Button</Button>
          <Button variant="contained" endIcon={<ArrowForward />} pill>Button</Button>
        </Section>

        <Section context="h3" title="Button with icon on both sides" container>
          <Button variant="outlined" startIcon={<ArrowBack />} endIcon={<ArrowForward />} pill>Button</Button>
          <Button variant="contained" startIcon={<ArrowBack />} endIcon={<ArrowForward />} pill>Button</Button>
        </Section>

        <Section context="h3" title="Button with icon only" container>
          <Button variant="outlined" pill><Close /></Button>
          <Button variant="contained" pill><Close /></Button>
        </Section>

      </Section>
    </>
  );
};

export default ButtonPreview;
