import { LoaderOptions } from '@googlemaps/js-api-loader'
import { Meta } from '@storybook/react'

import { ShopMap } from '@/atoms/ShopMap'
import { mapKey } from '~/config/environment'

export default {
  title: 'atoms/ShopMap',
  component: ShopMap,
} as Meta<typeof ShopMap>

const loaderOptions: LoaderOptions = {
  apiKey: mapKey,
  version: 'weekly',
  libraries: ['geometry'],
}

const height = '600px'

export const Default = {
  args: {
    loaderOptions,
    height,
  },
}
