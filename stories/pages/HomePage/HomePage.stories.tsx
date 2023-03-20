import type { Meta, StoryObj } from '@storybook/react';

import { HomePage } from './HomePage';

const meta: Meta<typeof HomePage> = {
  title: 'Example/Page',
  component: HomePage,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/7.0/react/configure/story-layout
    layout: 'fullscreen',
  },

};

export default meta;

type Story = StoryObj<typeof HomePage>;

export const LoggedOut: Story = {
    parameters: {
        nextjs: {
            router: {
            basePath: '/',
            route: '/signup',
            },
        }
    }
};

