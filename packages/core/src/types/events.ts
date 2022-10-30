import { FocusEvent, KeyboardEvent, MouseEvent, FocusEventHandler, KeyboardEventHandler, MouseEventHandler } from 'react';
import { ButtonElement } from './element';

export type IogartFocusEvent<T = HTMLElement> = FocusEvent<T>;

export type IogartKeyboardEvent = KeyboardEvent;

export type IogartMouseEvent<T = HTMLElement> = MouseEvent<T>;

export type IogartClickEvent<T> = MouseEvent<T>;

export type IogartDoubleClickEvent<T> = MouseEvent<T, MouseEvent>;

export interface ButtonCommonEvents<T = ButtonElement> {
  onBlur?: FocusEventHandler;
  onFocus?: FocusEventHandler;
  onKeyDown?: KeyboardEventHandler;
  onKeyUp?: KeyboardEventHandler;
  onMouseEnter?: MouseEventHandler;
  onMouseDown?: MouseEventHandler;
  onMouseLeave?: MouseEventHandler;
  onMouseUp?: MouseEventHandler;
  onClick?: MouseEventHandler<T> | undefined;
  onDoubleClick?: (event: MouseEvent<T, MouseEvent>) => void;
}
