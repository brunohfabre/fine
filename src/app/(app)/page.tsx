import { headers } from 'next/headers'
import { SignOutButton } from '@/components/sign-out-button'
import { auth } from '@/lib/auth'

export default async function Home() {
  const session = await auth.api.getSession({
    headers: await headers(),
  })

  return (
    <main className="flex flex-col p-4 gap-4">
      <div>Hello world!</div>

      <pre>{JSON.stringify(session, null, 2)}</pre>

      <div>
        <SignOutButton />
      </div>
    </main>
  )
}
