import { GithubButton } from './_components/github-button'

export default function SignIn() {
  return (
    <div className="flex flex-col p-4 gap-4">
      <span>sign in</span>

      <GithubButton />
    </div>
  )
}
