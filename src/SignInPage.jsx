import { SignIn } from '@clerk/clerk-react'

export default function SignInPage() {
  return (
    <div className="signin-page">
      <div className="signin-container">
        <div className="signin-header">
          <div className="signin-logo">Harper University</div>
          <h2 className="signin-title">Harper University</h2>
          <p className="signin-subtitle">
            Sign in with your Harper email to access training materials
          </p>
        </div>
        <SignIn
          appearance={{
            elements: {
              rootBox: 'signin-clerk-root',
              card: 'signin-clerk-card',
              headerTitle: 'signin-clerk-hidden',
              headerSubtitle: 'signin-clerk-hidden',
              socialButtonsBlockButton: 'signin-clerk-social-btn',
              formButtonPrimary: 'signin-clerk-primary-btn',
              footerActionLink: 'signin-clerk-footer-link',
              formFieldInput: 'signin-clerk-input',
              dividerLine: 'signin-clerk-divider',
              dividerText: 'signin-clerk-divider-text',
            },
          }}
        />
      </div>
    </div>
  )
}
