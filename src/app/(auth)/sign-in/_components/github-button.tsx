'use client'

import { authClient } from '@/lib/auth-client'

export function GithubButton() {
  async function handleSignIn() {
    await authClient.signIn.social({
      provider: 'github',
    })
  }

  return (
    <button
      type="button"
      className="h-10 bg-green-500 px-4"
      onClick={handleSignIn}
    >
      Sign in with github
    </button>
  )
}
