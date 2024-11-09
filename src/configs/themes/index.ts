// material
// hooks
//
import shape from './shape';
import typography from './typography';
import breakpoints from './breakpoints';

import shadows, { customShadows } from './shadows';
import palette from './palette';

// ----------------------------------------------------------------------


export const THEME = {
  palette:  { ...palette.light, mode: 'light' },
  shape,
  typography,
  breakpoints,
  shadows: shadows.light,
  customShadows:customShadows.light
}
console.log(THEME)

const a ={
  "palette": {
      "common": {
          "black": "#000",
          "white": "#fff"
      },
      "primary": {
          "lighter": "#C8FACD",
          "light": "#5BE584",
          "main": "#00AB55",
          "dark": "#007B55",
          "darker": "#005249",
          "contrastText": "#fff"
      },
      "secondary": {
          "lighter": "#D6E4FF",
          "light": "#84A9FF",
          "main": "#3366FF",
          "dark": "#1939B7",
          "darker": "#091A7A",
          "contrastText": "#fff"
      },
      "info": {
          "lighter": "#D0F2FF",
          "light": "#74CAFF",
          "main": "#1890FF",
          "dark": "#0C53B7",
          "darker": "#04297A",
          "contrastText": "#fff"
      },
      "success": {
          "lighter": "#E9FCD4",
          "light": "#AAF27F",
          "main": "#54D62C",
          "dark": "#229A16",
          "darker": "#08660D",
          "contrastText": "#212B36"
      },
      "warning": {
          "lighter": "#FFF7CD",
          "light": "#FFE16A",
          "main": "#FFC107",
          "dark": "#B78103",
          "darker": "#7A4F01",
          "contrastText": "#212B36"
      },
      "error": {
          "lighter": "#FFE7D9",
          "light": "#FFA48D",
          "main": "#FF4842",
          "dark": "#B72136",
          "darker": "#7A0C2E",
          "contrastText": "#fff"
      },
      "grey": {
          "0": "#FFFFFF",
          "100": "#F9FAFB",
          "200": "#F4F6F8",
          "300": "#DFE3E8",
          "400": "#C4CDD5",
          "500": "#919EAB",
          "600": "#637381",
          "700": "#454F5B",
          "800": "#212B36",
          "900": "#161C24",
          "5008": "rgba(145, 158, 171, 0.08)",
          "50012": "rgba(145, 158, 171, 0.12)",
          "50016": "rgba(145, 158, 171, 0.16)",
          "50024": "rgba(145, 158, 171, 0.24)",
          "50032": "rgba(145, 158, 171, 0.32)",
          "50048": "rgba(145, 158, 171, 0.48)",
          "50056": "rgba(145, 158, 171, 0.56)",
          "50080": "rgba(145, 158, 171, 0.8)"
      },
      "gradients": {
          "primary": "linear-gradient(to bottom, #5BE584, #00AB55)",
          "info": "linear-gradient(to bottom, #74CAFF, #1890FF)",
          "success": "linear-gradient(to bottom, #AAF27F, #54D62C)",
          "warning": "linear-gradient(to bottom, #FFE16A, #FFC107)",
          "error": "linear-gradient(to bottom, #FFA48D, #FF4842)"
      },
      "chart": {
          "violet": [
              "#826AF9",
              "#9E86FF",
              "#D0AEFF",
              "#F7D2FF"
          ],
          "blue": [
              "#2D99FF",
              "#83CFFF",
              "#A5F3FF",
              "#CCFAFF"
          ],
          "green": [
              "#2CD9C5",
              "#60F1C8",
              "#A4F7CC",
              "#C0F2DC"
          ],
          "yellow": [
              "#FFE700",
              "#FFEF5A",
              "#FFF7AE",
              "#FFF3D6"
          ],
          "red": [
              "#FF6C40",
              "#FF8F6D",
              "#FFBD98",
              "#FFF2D4"
          ]
      },
      "divider": "rgba(145, 158, 171, 0.24)",
      "action": {
          "active": "#637381",
          "hover": "rgba(145, 158, 171, 0.08)",
          "selected": "rgba(145, 158, 171, 0.16)",
          "disabled": "rgba(145, 158, 171, 0.8)",
          "disabledBackground": "rgba(145, 158, 171, 0.24)",
          "focus": "rgba(145, 158, 171, 0.24)",
          "hoverOpacity": 0.08,
          "disabledOpacity": 0.48
      },
      "text": {
          "primary": "#212B36",
          "secondary": "#637381",
          "disabled": "#919EAB"
      },
      "background": {
          "paper": "#fff",
          "default": "#fff",
          "neutral": "#F4F6F8"
      },
      "mode": "light"
  },
  "shape": {
      "borderRadius": 8,
      "borderRadiusSm": 12,
      "borderRadiusMd": 16
  },
  "typography": {
      "fontFamily": "Public Sans, sans-serif",
      "fontWeightRegular": 400,
      "fontWeightMedium": 600,
      "fontWeightBold": 700,
      "h1": {
          "fontWeight": 700,
          "lineHeight": 1.25,
          "fontSize": "2.5rem",
          "@media (min-width:600px)": {
              "fontSize": "3.25rem"
          },
          "@media (min-width:900px)": {
              "fontSize": "3.625rem"
          },
          "@media (min-width:1200px)": {
              "fontSize": "4rem"
          }
      },
      "h2": {
          "fontWeight": 700,
          "lineHeight": 1.3333333333333333,
          "fontSize": "2rem",
          "@media (min-width:600px)": {
              "fontSize": "2.5rem"
          },
          "@media (min-width:900px)": {
              "fontSize": "2.75rem"
          },
          "@media (min-width:1200px)": {
              "fontSize": "3rem"
          }
      },
      "h3": {
          "fontWeight": 700,
          "lineHeight": 1.5,
          "fontSize": "1.5rem",
          "@media (min-width:600px)": {
              "fontSize": "1.625rem"
          },
          "@media (min-width:900px)": {
              "fontSize": "1.875rem"
          },
          "@media (min-width:1200px)": {
              "fontSize": "2rem"
          }
      },
      "h4": {
          "fontWeight": 700,
          "lineHeight": 1.5,
          "fontSize": "1.25rem",
          "@media (min-width:600px)": {
              "fontSize": "1.25rem"
          },
          "@media (min-width:900px)": {
              "fontSize": "1.5rem"
          },
          "@media (min-width:1200px)": {
              "fontSize": "1.5rem"
          }
      },
      "h5": {
          "fontWeight": 700,
          "lineHeight": 1.5,
          "fontSize": "1.125rem",
          "@media (min-width:600px)": {
              "fontSize": "1.1875rem"
          },
          "@media (min-width:900px)": {
              "fontSize": "1.25rem"
          },
          "@media (min-width:1200px)": {
              "fontSize": "1.25rem"
          }
      },
      "h6": {
          "fontWeight": 700,
          "lineHeight": 1.5555555555555556,
          "fontSize": "1.0625rem",
          "@media (min-width:600px)": {
              "fontSize": "1.125rem"
          },
          "@media (min-width:900px)": {
              "fontSize": "1.125rem"
          },
          "@media (min-width:1200px)": {
              "fontSize": "1.125rem"
          }
      },
      "subtitle1": {
          "fontWeight": 600,
          "lineHeight": 1.5,
          "fontSize": "1rem"
      },
      "subtitle2": {
          "fontWeight": 600,
          "lineHeight": 1.5714285714285714,
          "fontSize": "0.875rem"
      },
      "body1": {
          "lineHeight": 1.5,
          "fontSize": "1rem"
      },
      "body2": {
          "lineHeight": 1.5714285714285714,
          "fontSize": "0.875rem"
      },
      "caption": {
          "lineHeight": 1.5,
          "fontSize": "0.75rem"
      },
      "overline": {
          "fontWeight": 700,
          "lineHeight": 1.5,
          "fontSize": "0.75rem",
          "letterSpacing": 1.1,
          "textTransform": "uppercase"
      },
      "button": {
          "fontWeight": 700,
          "lineHeight": 1.7142857142857142,
          "fontSize": "0.875rem",
          "textTransform": "capitalize"
      }
  },
  "breakpoints": {
      "values": {
          "xs": 0,
          "sm": 600,
          "md": 900,
          "lg": 1200,
          "xl": 1536
      }
  },
  "shadows": [
      "none",
      "0px 2px 1px -1px rgba(145, 158, 171, 0.2),0px 1px 1px 0px rgba(145, 158, 171, 0.14),0px 1px 3px 0px rgba(145, 158, 171, 0.12)",
      "0px 3px 1px -2px rgba(145, 158, 171, 0.2),0px 2px 2px 0px rgba(145, 158, 171, 0.14),0px 1px 5px 0px rgba(145, 158, 171, 0.12)",
      "0px 3px 3px -2px rgba(145, 158, 171, 0.2),0px 3px 4px 0px rgba(145, 158, 171, 0.14),0px 1px 8px 0px rgba(145, 158, 171, 0.12)",
      "0px 2px 4px -1px rgba(145, 158, 171, 0.2),0px 4px 5px 0px rgba(145, 158, 171, 0.14),0px 1px 10px 0px rgba(145, 158, 171, 0.12)",
      "0px 3px 5px -1px rgba(145, 158, 171, 0.2),0px 5px 8px 0px rgba(145, 158, 171, 0.14),0px 1px 14px 0px rgba(145, 158, 171, 0.12)",
      "0px 3px 5px -1px rgba(145, 158, 171, 0.2),0px 6px 10px 0px rgba(145, 158, 171, 0.14),0px 1px 18px 0px rgba(145, 158, 171, 0.12)",
      "0px 4px 5px -2px rgba(145, 158, 171, 0.2),0px 7px 10px 1px rgba(145, 158, 171, 0.14),0px 2px 16px 1px rgba(145, 158, 171, 0.12)",
      "0px 5px 5px -3px rgba(145, 158, 171, 0.2),0px 8px 10px 1px rgba(145, 158, 171, 0.14),0px 3px 14px 2px rgba(145, 158, 171, 0.12)",
      "0px 5px 6px -3px rgba(145, 158, 171, 0.2),0px 9px 12px 1px rgba(145, 158, 171, 0.14),0px 3px 16px 2px rgba(145, 158, 171, 0.12)",
      "0px 6px 6px -3px rgba(145, 158, 171, 0.2),0px 10px 14px 1px rgba(145, 158, 171, 0.14),0px 4px 18px 3px rgba(145, 158, 171, 0.12)",
      "0px 6px 7px -4px rgba(145, 158, 171, 0.2),0px 11px 15px 1px rgba(145, 158, 171, 0.14),0px 4px 20px 3px rgba(145, 158, 171, 0.12)",
      "0px 7px 8px -4px rgba(145, 158, 171, 0.2),0px 12px 17px 2px rgba(145, 158, 171, 0.14),0px 5px 22px 4px rgba(145, 158, 171, 0.12)",
      "0px 7px 8px -4px rgba(145, 158, 171, 0.2),0px 13px 19px 2px rgba(145, 158, 171, 0.14),0px 5px 24px 4px rgba(145, 158, 171, 0.12)",
      "0px 7px 9px -4px rgba(145, 158, 171, 0.2),0px 14px 21px 2px rgba(145, 158, 171, 0.14),0px 5px 26px 4px rgba(145, 158, 171, 0.12)",
      "0px 8px 9px -5px rgba(145, 158, 171, 0.2),0px 15px 22px 2px rgba(145, 158, 171, 0.14),0px 6px 28px 5px rgba(145, 158, 171, 0.12)",
      "0px 8px 10px -5px rgba(145, 158, 171, 0.2),0px 16px 24px 2px rgba(145, 158, 171, 0.14),0px 6px 30px 5px rgba(145, 158, 171, 0.12)",
      "0px 8px 11px -5px rgba(145, 158, 171, 0.2),0px 17px 26px 2px rgba(145, 158, 171, 0.14),0px 6px 32px 5px rgba(145, 158, 171, 0.12)",
      "0px 9px 11px -5px rgba(145, 158, 171, 0.2),0px 18px 28px 2px rgba(145, 158, 171, 0.14),0px 7px 34px 6px rgba(145, 158, 171, 0.12)",
      "0px 9px 12px -6px rgba(145, 158, 171, 0.2),0px 19px 29px 2px rgba(145, 158, 171, 0.14),0px 7px 36px 6px rgba(145, 158, 171, 0.12)",
      "0px 10px 13px -6px rgba(145, 158, 171, 0.2),0px 20px 31px 3px rgba(145, 158, 171, 0.14),0px 8px 38px 7px rgba(145, 158, 171, 0.12)",
      "0px 10px 13px -6px rgba(145, 158, 171, 0.2),0px 21px 33px 3px rgba(145, 158, 171, 0.14),0px 8px 40px 7px rgba(145, 158, 171, 0.12)",
      "0px 10px 14px -6px rgba(145, 158, 171, 0.2),0px 22px 35px 3px rgba(145, 158, 171, 0.14),0px 8px 42px 7px rgba(145, 158, 171, 0.12)",
      "0px 11px 14px -7px rgba(145, 158, 171, 0.2),0px 23px 36px 3px rgba(145, 158, 171, 0.14),0px 9px 44px 8px rgba(145, 158, 171, 0.12)",
      "0px 11px 15px -7px rgba(145, 158, 171, 0.2),0px 24px 38px 3px rgba(145, 158, 171, 0.14),0px 9px 46px 8px rgba(145, 158, 171, 0.12)"
  ],
  "customShadows": {
      "z1": "0 1px 2px 0 rgba(145, 158, 171, 0.24)",
      "z8": "0 8px 16px 0 rgba(145, 158, 171, 0.24)",
      "z12": "0 0 2px 0 rgba(145, 158, 171, 0.24), 0 12px 24px 0 rgba(145, 158, 171, 0.24)",
      "z16": "0 0 2px 0 rgba(145, 158, 171, 0.24), 0 16px 32px -4px rgba(145, 158, 171, 0.24)",
      "z20": "0 0 2px 0 rgba(145, 158, 171, 0.24), 0 20px 40px -4px rgba(145, 158, 171, 0.24)",
      "z24": "0 0 4px 0 rgba(145, 158, 171, 0.24), 0 24px 48px 0 rgba(145, 158, 171, 0.24)",
      "primary": "0 8px 16px 0 rgba(0, 171, 85, 0.24)",
      "secondary": "0 8px 16px 0 rgba(51, 102, 255, 0.24)",
      "info": "0 8px 16px 0 rgba(24, 144, 255, 0.24)",
      "success": "0 8px 16px 0 rgba(84, 214, 44, 0.24)",
      "warning": "0 8px 16px 0 rgba(255, 193, 7, 0.24)",
      "error": "0 8px 16px 0 rgba(255, 72, 66, 0.24)"
  }
}