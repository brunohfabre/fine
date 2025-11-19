import { headers } from 'next/headers'
import { redirect } from 'next/navigation'
import { auth } from '@/lib/auth'
import { GithubButton } from './_components/github-button'

export default async function SignIn() {
  const session = await auth.api.getSession({
    headers: await headers(),
  })

  if (session) {
    return redirect('/')
  }

  return (
    <div className="flex flex-col p-4 gap-4">
      <span>sign in</span>

      <GithubButton />
    </div>
  )
}
