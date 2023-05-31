/** @type {import('tailwindcss').Config} */

import colors from 'tailwindcss/colors'
import defTheme from 'tailwindcss/defaultTheme'

export const content = [
  "./src/pages/**/*.{js,jsx,ts,tsx}",
  "./src/components/**/*.{js,jsx,ts,tsx}",
]
export const theme = {
  screens: {
    ...defTheme.screens,
    'ult_sm': { 'max': '420px' },
    'mobile': { 'max': '767px' },
    'container': { 'max': '1169px' },
    'mob-container': { 'min': '768px', 'max': '1169px'}
  },
  maxWidth: {
    'container': '1170px',
  },
  fontFamily: {
    'chester': ['BNChesterRegular', 'sans-serif'],
    'gilroy': ['GilroyRegular', 'sans-serif'],
    'gilroy-bold': ['GilroyBold', 'sans-serif'],
    'gilroy-sm-bold': ['GilroySemiBold', 'sans-serif'],
    'gilroy-medium': ['GilroyMedium', 'sans-serif'],
  },
  colors: {
    ...colors,
    'clr_main': '#161616',
    'clr_orange': '#D3A265',
    'clr_gray': '#878787',
    'clr_menu': '#212121',
    'clr_light_gray': '#F4F4F4',
    'clr_line_gray': '#DCD1BB',
  },
  extend: {
    keyframes: {
      // top_down: {
      //   '0%': { top: '0px', opacity: '0' },
      //   '100%': { top: '120px', opacity: '1' },
      // },
      // go_up: {
      //   '0%': { top: '120px', opacity: '1', visibility: 'visible' },
      //   '100%': { top: '0px', opacity: '0', visibility: 'hidden' },
      // }
    },
    animation: {
      // 'form_appear': 'top_down 0.3s ease-in-out forwards',
      // 'form_disappear': 'go_up 0.3s ease-in-out forwards',
    },
  },
}
export const plugins = []

