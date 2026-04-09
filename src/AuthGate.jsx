import { useUser, UserButton } from '@clerk/clerk-react'
import App from './App'
import SignInPage from './SignInPage'

export default function AuthGate() {
  const { isLoaded, isSignedIn, user } = useUser()

  if (!isLoaded) {
    return (
      <div className="auth-loading">
        <div className="auth-loading-spinner" />
        <span>Loading…</span>
      </div>
    )
  }

  if (!isSignedIn) {
    return <SignInPage />
  }

  const email = user?.primaryEmailAddress?.emailAddress || ''
  if (!email.endsWith('@harperinsure.com')) {
    return (
      <div className="auth-blocked">
        <div className="auth-blocked-card">
          <div className="auth-blocked-icon">🔒</div>
          <h2>Access Restricted</h2>
          <p>
            This training portal is only available to <strong>@harperinsure.com</strong> accounts.
          </p>
          <p className="auth-blocked-email">
            Signed in as: <code>{email}</code>
          </p>
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
    )
  }

  return (
    <>
      <div className="user-button-float">
        <UserButton afterSignOutUrl="/" />
      </div>
      <App />
    </>
  )
}
