import React from 'react';
import '../../../packages/core/src/styles/utils/index.styl';
import { Section, Tile } from '../components';

const ColorBlock = ({ className }: { className: string }) => (
  <div
    className={className}
    style={{ width: '100%', height: '5rem' }}
  >&nbsp;</div>
);

const ColorsPreview = () => (
  <>
    <Section>

      <Section context="h3" title="Color base" container>

        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
          }}
        >

          <Tile
            primary="Primary"
            secondary="rgb(41, 40, 45)"
          >
            <ColorBlock className="bg-primary" />
          </Tile>

          <Tile
            primary="Secondary"
            secondary="rgb(98, 93, 96)"
          >
            <ColorBlock className="bg-secondary" />
          </Tile>

          <Tile
            primary="Dark"
            secondary="rgb(219, 211, 208)"
          >
            <ColorBlock className="bg-dark" />
          </Tile>

          <Tile
            primary="Light"
            secondary="rgb(25, 25, 25)"
          >
            <ColorBlock className="bg-light" />
          </Tile>

        </div>

      </Section>

      <Section context="h3" title="Color emotion" container>

        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
          }}
        >

          <Tile
            primary="Success"
            secondary="rgb(56, 142, 60)"
          >
            <ColorBlock className="bg-success" />
          </Tile>

          <Tile
            primary="Info"
            secondary="rgb(2, 136, 209)"
          >
            <ColorBlock className="bg-info" />
          </Tile>

          <Tile
            primary="Warning"
            secondary="rgb(245, 124, 0)"
          >
            <ColorBlock className="bg-warning" />
          </Tile>

          <Tile
            primary="Error"
            secondary="rgb(211, 47, 47)"
          >
            <ColorBlock className="bg-error" />
          </Tile>

        </div>

      </Section>

      <Section context="h3" title="Color palette" container>

        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
          }}
        >

          <Tile
            primary="Red"
            secondary="rgb(211,47,47)"
          >
            <ColorBlock className="bg-red" />
          </Tile>

          <Tile
            primary="Pink"
            secondary="rgb(194,24,91)"
          >
            <ColorBlock className="bg-pink" />
          </Tile>

          <Tile
            primary="Purple"
            secondary="rgb(123,31,162)"
          >
            <ColorBlock className="bg-purple" />
          </Tile>

          <Tile
            primary="Deep Purple"
            secondary="rgb(81,45,168)"
          >
            <ColorBlock className="bg-deepPurple" />
          </Tile>

          <Tile
            primary="Indigo"
            secondary="rgb(48,63,159)"
          >
            <ColorBlock className="bg-indigo" />
          </Tile>

          <Tile
            primary="Blue"
            secondary="rgb(25,118,210)"
          >
            <ColorBlock className="bg-blue" />
          </Tile>

          <Tile
            primary="Light Blue"
            secondary="rgb(2,136,209)"
          >
            <ColorBlock className="bg-lightBlue" />
          </Tile>

          <Tile
            primary="Cyan"
            secondary="rgb(0,151,167)"
          >
            <ColorBlock className="bg-cyan" />
          </Tile>

          <Tile
            primary="Teal"
            secondary="rgb(0,121,107)"
          >
            <ColorBlock className="bg-teal" />
          </Tile>

          <Tile
            primary="Green"
            secondary="rgb(56,142,60)"
          >
            <ColorBlock className="bg-green" />
          </Tile>

          <Tile
            primary="Light Green"
            secondary="rgb(104,159,56)"
          >
            <ColorBlock className="bg-lightGreen" />
          </Tile>

          <Tile
            primary="Lime"
            secondary="rgb(175,180,43)"
          >
            <ColorBlock className="bg-lime" />
          </Tile>

          <Tile
            primary="Yellow"
            secondary="rgb(251,192,45)"
          >
            <ColorBlock className="bg-yellow" />
          </Tile>

          <Tile
            primary="Amber"
            secondary="rgb(255,160,0)"
          >
            <ColorBlock className="bg-amber" />
          </Tile>

          <Tile
            primary="Orange"
            secondary="rgb(245,124,0)"
          >
            <ColorBlock className="bg-orange" />
          </Tile>

          <Tile
            primary="Deep Orange"
            secondary="rgb(230,74,25)"
          >
            <ColorBlock className="bg-deepOrange" />
          </Tile>

          <Tile
            primary="Brown"
            secondary="rgb(93,64,55)"
          >
            <ColorBlock className="bg-brown" />
          </Tile>

          <Tile
            primary="Grey"
            secondary="rgb(97, 97, 97)"
          >
            <ColorBlock className="bg-grey" />
          </Tile>

          <Tile
            primary="Blue Grey"
            secondary="rgb(69, 90, 100)"
          >
            <ColorBlock className="bg-blueGrey" />
          </Tile>

          <Tile
            primary="White"
            secondary="rgb(253, 253, 253)"
          >
            <ColorBlock className="bg-white" />
          </Tile>

          <Tile
            primary="Black"
            secondary="rgb(2, 2, 2)"
          >
            <ColorBlock className="bg-black" />
          </Tile>

        </div>

      </Section>

    </Section>
  </>
);

export default ColorsPreview;
