'use client'

import { authClient } from '@/lib/auth-client'

export function GoogleButton() {
  async function handleSignIn() {
    await authClient.signIn.social({
      provider: 'google',
    })
  }

  return (
    <button
      type="button"
      className="h-10 bg-neutral-200 px-4"
      onClick={handleSignIn}
    >
      Sign in with google
    </button>
  )
}
