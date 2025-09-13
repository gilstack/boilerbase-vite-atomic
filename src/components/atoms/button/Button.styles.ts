import { cva } from 'class-variance-authority'

export const buttonStyles = cva(
  [
    'whitespace-nowrap flex-center font-medium',
    'transition-colors duration-300 ease-in-out',
    'disabled:pointer-events-none disabled:opacity-50',
    'cursor-pointer select-none capitalize',
  ],
  {
    variants: {
      variant: {
        default: [
          'text-white bg-primary shadow-button',
          'hover:opacity-90 focus:ring-3 focus:ring-primary/50',
        ],

        outline: [
          'text-primary bg-transparent border-2 border-primary-700',
          'hover:bg-primary/15 hover:border-primary',
        ],

        ghost: [
          'text-neutral-400 bg-theme shadow-button',
          'hover:text-primary hover:shadow-primary/25',
        ],

        link: ['p-0 text-span bg-transparent hover:text-primary'],
      },

      size: {
        xs: 'h-8 px-4 text-xs',
        sm: 'h-10 px-4 text-sm',
        md: 'h-12 px-5 text-base',
        lg: 'h-13 px-6 text-lg',
        xl: 'h-14 px-6 text-xl',
      },

      rounded: {
        none: 'rounded-none',
        sm: 'rounded-sm',
        md: 'rounded-md',
        lg: 'rounded-lg',
        full: 'rounded-full',
      },

      fullWidth: {
        true: 'w-full',
        false: 'w-auto',
      },

      icon: {
        true: 'flex-center size-10 p-0',
        false: '',
      },
    },

    defaultVariants: {
      variant: 'default',
      size: 'md',
      rounded: 'md',
      icon: false,
      fullWidth: false,
    },
  },
)
