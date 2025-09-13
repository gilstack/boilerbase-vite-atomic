import type { ReactNode } from 'react'

import { Provider as JotaiProvider } from 'jotai'
import { createStore } from 'jotai/vanilla'

interface JotaiProviderProps {
  children: ReactNode
}

export const jotaiStore = createStore()

export function JotaiStoreProvider({ children }: JotaiProviderProps) {
  return <JotaiProvider store={jotaiStore}>{children}</JotaiProvider>
}
