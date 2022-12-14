import { LoaderOptions } from '@googlemaps/js-api-loader'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import ShopMap from '@/atoms/ShopMap'
import { mapKey } from '~/config/environment'

export default {
  title: 'atoms/ShopMap',
  component: ShopMap,
} as ComponentMeta<typeof ShopMap>

const Template: ComponentStory<typeof ShopMap> = (args) => <ShopMap {...args} />

export const Default = Template.bind({})

const loaderOptions: LoaderOptions = {
  apiKey: mapKey,
  version: 'weekly',
  libraries: ['geometry'],
}

const height = '600px'

Default.args = {
  loaderOptions,
  height,
}
