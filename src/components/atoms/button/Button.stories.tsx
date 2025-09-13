// Button.stories.tsx
import type { Meta, StoryObj } from '@storybook/react'

import { Button } from './Button'
import type { ButtonProps } from './Button.types'

const meta: Meta<ButtonProps> = {
  title: 'Components/Atoms/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  args: {
    children: 'Click me',
    variant: 'default',
    size: 'md',
    rounded: 'md',
    fullWidth: false,
    icon: false,
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'outline', 'ghost', 'link'],
      description: 'Defines the visual style of the button.',
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Controls the button size.',
    },
    rounded: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg', 'full'],
      description: 'Controls the border radius of the button.',
    },
    fullWidth: {
      control: 'boolean',
      description: 'Makes the button expand to full width.',
    },
    icon: {
      control: 'boolean',
      description: 'Renders the button in icon-only mode.',
    },
    asChild: {
      control: 'boolean',
      description: 'Use this to render the button as a different element (via Radix Slot).',
    },
    children: {
      control: 'text',
      description: 'Button content.',
    },
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<ButtonProps>

export const Default: Story = {}

export const Variants: Story = {
  render: (args) => (
    <div className="flex gap-4">
      <Button {...args} variant="default">
        Default
      </Button>
      <Button {...args} variant="outline">
        Outline
      </Button>
      <Button {...args} variant="ghost">
        Ghost
      </Button>
      <Button {...args} variant="link">
        Link
      </Button>
    </div>
  ),
}

export const Sizes: Story = {
  render: (args) => (
    <div className="flex gap-4 items-center">
      <Button {...args} size="xs">
        XS
      </Button>
      <Button {...args} size="sm">
        SM
      </Button>
      <Button {...args} size="md">
        MD
      </Button>
      <Button {...args} size="lg">
        LG
      </Button>
      <Button {...args} size="xl">
        XL
      </Button>
    </div>
  ),
}

export const Rounded: Story = {
  render: (args) => (
    <div className="flex gap-4 items-center">
      <Button {...args} rounded="none">
        None
      </Button>
      <Button {...args} rounded="sm">
        Small
      </Button>
      <Button {...args} rounded="md">
        Medium
      </Button>
      <Button {...args} rounded="lg">
        Large
      </Button>
      <Button {...args} rounded="full">
        Full
      </Button>
    </div>
  ),
}

export const FullWidth: Story = {
  args: {
    fullWidth: true,
  },
}

export const IconButton: Story = {
  args: {
    icon: true,
    children: '🖕',
  },
}
