import { MouseEventHandler } from 'react';
import { SvgElement } from './element';

export interface SvgIcon extends SvgElement {
  size?: string | number;
  color?: string;
  onClick?: MouseEventHandler<SVGSVGElement | HTMLElement> | undefined;
}
