import React from 'react'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import type { Preview } from '@storybook/react'

import GlobalStyle from '../src/GlobalStyle'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
  decorators: [
    (Story) => (
      <>
        <GlobalStyle />
        <Story />
      </>
    ),
  ],
}

export default preview
