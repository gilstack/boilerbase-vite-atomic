import type { VariantProps } from 'class-variance-authority'
import type { ComponentPropsWithoutRef, ComponentRef } from 'react'

import type { buttonStyles } from './Button.styles'

export type ButtonRef = ComponentRef<'button'>

export type ButtonVariant = NonNullable<VariantProps<typeof buttonStyles>['variant']>

export type ButtonSize = NonNullable<VariantProps<typeof buttonStyles>['size']>

export type ButtonIcon = NonNullable<VariantProps<typeof buttonStyles>['icon']>

export type ButtonRounded = NonNullable<VariantProps<typeof buttonStyles>['rounded']>

export type ButtonFullWidth = NonNullable<VariantProps<typeof buttonStyles>['fullWidth']>

export interface ButtonProps
  extends ComponentPropsWithoutRef<'button'>,
    VariantProps<typeof buttonStyles> {
  icon?: ButtonIcon
  size?: ButtonSize
  fullWidth?: ButtonFullWidth
  rounded?: ButtonRounded
  asChild?: boolean
}
