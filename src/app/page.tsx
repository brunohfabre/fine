'use client'

import { authClient } from '@/lib/auth-client'

export default function Home() {
  const { data: session } = authClient.useSession()

  return (
    <main>
      <div>Hello world!</div>

      <button
        type="button"
        onClick={() =>
          authClient.signIn.social({
            provider: 'github',
          })
        }
        className="px-4 h-10 bg-green-500"
      >
        sign in
      </button>

      <pre>{JSON.stringify(session, null, 2)}</pre>

      <button
        type="button"
        onClick={() => authClient.signOut()}
        className="px-4 h-10 bg-red-500"
      >
        sign out
      </button>
    </main>
  )
}
