import { createFileRoute } from '@tanstack/react-router'
import { seo } from '#/utils'

export const Route = createFileRoute('/_auth/sign-in')({
  component: SignIn,
  head: () => ({
    meta: [...seo({ title: `Web Application | Sign In`, description: 'Sign in to your account' })],
  }),
})

export function SignIn() {
  return <div>Sign In Page</div>
}
