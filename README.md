# insurance-101 — Harper University

Internal insurance training portal for Harper employees: video modules (Google Drive embeds),
reading courses 101–202, per-module quizzes, and a final exam. Branded **Harper University** in
the UI.

## Documentation

- [Business context](docs/BUSINESS_CONTEXT.md) — brokerage role, audience, curriculum, status
- [Architecture](docs/ARCHITECTURE.md) — stack, entrypoints, flows, data, externals
- Architecture map: `npx chorograph render . --no-open` (or `npx -y chorograph@0.5.1 render . --json --quiet`)

## Local development

```bash
cp .env.example .env   # set VITE_CLERK_PUBLISHABLE_KEY
npm install
npm run dev            # http://localhost:3030
```

Sign in requires a `@harperinsure.com` Clerk account.

## Build and serve

```bash
npm run build
npm start              # serve dist on $PORT
```
