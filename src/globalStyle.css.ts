import { globalStyle } from '@vanilla-extract/css'

import { colors } from '~/styles/theme/colors'

// NOTE: Reset CSS
globalStyle(
  'html, body, p, ol, ul, li, dl, dt, dd, blockquote, figure, fieldset, legend, textarea, pre, iframe, hr, h1, h2, h3, h4, h5, h6, input',
  {
    margin: 0,
    padding: 0,
  }
)
globalStyle('*, *::before, *::after', {
  boxSizing: 'inherit',
})

globalStyle('html', {
  boxSizing: 'border-box',
  //NOTE: 設定する rem は 1 (87.5% === 14px) から相対的な値を設定する
  fontSize: '87.5%',
})

globalStyle('body', {
  fontFamily:
    "'Helvetica Neue', Arial, 'Hiragino Kaku Gothic ProN', 'Hiragino Sans', Meiryo, sans-serif",
  color: colors.text.primary,
})

globalStyle('button', {
  padding: 0,
  border: 'none',
  backgroundColor: 'transparent',
  cursor: 'pointer',
  outline: 'none',
  appearance: 'none',
})

globalStyle('a', {
  textDecoration: 'none',
})
