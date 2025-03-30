import React from 'react'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import type { Preview } from '@storybook/react'

import '../src/globalStyle.css'

const preview: Preview = {
  parameters: {
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
        {/* FIXME: tsconfig が適用されていない為エラーが出る。支障はないが修正したい */}
        <Story />
      </>
    ),
  ],

  tags: ['autodocs']
}

export default preview
