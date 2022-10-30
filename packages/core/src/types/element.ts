import { DetailedHTMLProps, HTMLAttributes, ReactHTML, ReactNode, SVGProps } from 'react';

export type MixedReactHTML = keyof ReactHTML | keyof ReactNode;

export type DivElement = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export type LinkElement = DetailedHTMLProps<HTMLAttributes<HTMLLinkElement>, HTMLLinkElement>;

export type AnchorElement = DetailedHTMLProps<HTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>;

export type ButtonElement = DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export type SpanElement = DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;

export type SvgElement = SVGProps<SVGSVGElement>;
