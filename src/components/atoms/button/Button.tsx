import { Slot } from '@radix-ui/react-slot'
import { forwardRef } from 'react'

import { cn } from '#/utils'

import { buttonStyles } from './Button.styles'

import type { ButtonProps, ButtonRef } from './Button.types'

export const Button = forwardRef<ButtonRef, ButtonProps>(
  ({ variant, size, rounded, icon, fullWidth, asChild = false, className, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'

    return (
      <Comp
        className={cn(buttonStyles({ variant, size, rounded, icon, fullWidth, className }))}
        ref={ref}
        {...props}
      />
    )
  },
)

Button.displayName = 'Button'
