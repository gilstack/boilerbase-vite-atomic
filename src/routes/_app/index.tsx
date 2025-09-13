import { createFileRoute } from '@tanstack/react-router'
import { seo } from '#/utils'

export const Route = createFileRoute('/_app/')({
  component: App,
  head: () => ({
    meta: [...seo({ title: `Web Application`, description: 'Welcome to the home page' })],
  }),
})

function App() {
  return (
    <main className="flex-center flex-col gap-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Hello, developer! 🖕</h1>
        <p className="text-lg text-gray-600">Web Application is ready for development</p>
      </div>
    </main>
  )
}
