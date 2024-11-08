// material
// hooks
//
import shape from './shape';
import typography from './typography';
import breakpoints from './breakpoints';

import shadows, { customShadows } from './shadows';

// ----------------------------------------------------------------------


export const THEME = {
  // palette:  { ...palette.light, mode: 'light' },
  shape,
  typography,
  breakpoints,
  shadows: shadows.light,
  customShadows:customShadows.light
}