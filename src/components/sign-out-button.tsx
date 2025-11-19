'use client'

import { useRouter } from 'next/navigation'
import { authClient } from '@/lib/auth-client'

export function SignOutButton() {
  const router = useRouter()

  async function handleSignOut() {
    await authClient.signOut()

    router.replace('/sign-in')
  }

  return (
    <button
      type="button"
      className="px-4 bg-red-500 h-10 text-white"
      onClick={handleSignOut}
    >
      Sign out
    </button>
  )
}
