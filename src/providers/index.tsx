import { JotaiStoreProvider } from './jotai.provider'
import { ReactQueryProvider } from './react-query.provider'

interface Props {
  children: React.ReactNode
}

export const Providers = ({ children }: Props) => {
  return (
    <ReactQueryProvider>
      <JotaiStoreProvider>{children}</JotaiStoreProvider>
    </ReactQueryProvider>
  )
}
