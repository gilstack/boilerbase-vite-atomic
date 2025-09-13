/// <reference types="vite/client" />

import { createRootRoute, HeadContent, Outlet, Scripts } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

import { seo } from '#/utils'
import { Providers } from '#/providers'
import { NotFound } from '#/components/organisms'

import styles from '#/styles/app.css?url'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8', key: 'charset' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ...seo({
        title: 'Home | Web Application',
        description: 'Ready to build projects',
      }),
    ],
    links: [
      { rel: 'stylesheet', href: styles },
      { rel: 'manifest', href: '/site.webmanifest', color: '#fffff' },
      { rel: 'icon', href: '/favicon.ico' },
    ],
  }),
  notFoundComponent: () => <NotFound />,
  shellComponent: RootDocument,
})

function RootDocument() {
  return (
    <html>
      <head>
        <HeadContent />
      </head>

      <body>
        <Providers>
          <Outlet />
          <Scripts />
        </Providers>

        <TanStackRouterDevtools position="bottom-right" />
      </body>
    </html>
  )
}
