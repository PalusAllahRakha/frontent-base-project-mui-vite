# IcerBrand — Frontend Base Project (React + Vite + MUI)

A production-ready starter/base project for building admin-style dashboards and data-heavy web apps. It comes pre-wired with routing, authentication guards, Redux Toolkit state management, Material UI theming, and AG Grid for advanced tabular data — so new features can be built on top of a consistent structure instead of starting from scratch.

## Features

- ⚡️ **Vite + React 19** — fast dev server with HMR and an optimized production build
- 🎨 **Material UI (MUI) v7** — theming via `ThemeProvider`, `CssBaseline`, and Emotion/styled-components support
- 🔐 **Auth-aware routing** — separate route groups for public/auth pages and private (protected) pages, with a redirect-to-login guard
- 🗂️ **Redux Toolkit** — pre-configured store with slices for auth, user, grid selection, and file upload state
- 📊 **AG Grid (Community + Enterprise)** — collapsible/sortable data tables with column pinning persisted to `localStorage`
- 📁 **File upload workflow** — modal-driven upload flow backed by its own Redux slice and context hook
- 📅 **Date range picker, custom select, pagination, and sidebar** — common UI building blocks under `src/components`
- 🧹 **ESLint** — configured with React, React Hooks, `jsx-a11y`, and import-order rules

## Tech Stack

| Category | Library |
|---|---|
| Framework | React 19, Vite 7 |
| UI | Material UI (MUI) 7, Emotion, styled-components |
| Routing | React Router 7 |
| State management | Redux Toolkit, React-Redux |
| Data grid | AG Grid (Community & Enterprise) |
| Other UI | React Select, React Date Range, React Pro Sidebar, React Icons |
| Utilities | date-fns |
| Linting | ESLint 9 + plugin-react, plugin-react-hooks, plugin-import, plugin-jsx-a11y |

## Prerequisites

- **Node.js** 18+ (recommended: latest LTS)
- **npm** or **Yarn** (both a `package-lock.json` and `yarn.lock` are present — pick one and stick with it)

## Getting Started

1. **Clone the repository**

   ```bash
   git clone https://github.com/PalusAllahRakha/frontent-base-project-mui-vite.git
   cd frontent-base-project-mui-vite
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the dev server**

   ```bash
   npm run dev
   ```

   The app runs at [http://localhost:3000](http://localhost:3000) (port is set in `vite.config.js`).

## Available Scripts

| Script | Description |
|---|---|
| `npm run dev` | Starts the Vite development server with hot module replacement |
| `npm run build` | Builds the app for production into `dist/` |
| `npm run preview` | Serves the production build locally for a final check |
| `npm run lint` | Runs ESLint across the project |
| `npm run lint:fix` | Runs ESLint and automatically fixes fixable issues |

## Project Structure

```
src/
├── assets/               # Images and icons
├── components/           # Reusable UI components
│   ├── datePicker/
│   ├── file-upload/
│   ├── input/
│   ├── layout/           # MainLayout (private pages) and AuthLayout (auth pages)
│   ├── modal/
│   ├── notFound/
│   ├── pageHeader/
│   ├── pagination/
│   ├── select/
│   ├── sidebar/
│   └── table/            # AG Grid wrapper component
├── features/             # Redux Toolkit slices (auth, user, grid, file upload)
├── hooks/                # Custom hooks / context providers
├── pages/                # Route-level page components
│   ├── auth/             # Login, Register
│   ├── search-terms/
│   ├── work-sheet/       # Main dashboard/grid page
│   └── utils/constant/   # Shared column defs, row data, and constants
├── redux/store/          # Redux store configuration
├── routes/               # Route group definitions (auth-route, private-route)
├── utils/                # Auth helpers, theme configuration
├── App.jsx               # Root component: theme, router, route groups
└── main.jsx              # App entry point: Redux Provider + context providers
```

## Routing & Authentication

- **Public routes** (`src/routes/auth-route.jsx`): `/login`, `/register`, rendered inside `AuthLayout`.
- **Private routes** (`src/routes/private-route.jsx`): the dashboard (`/`) and `/search-terms`, rendered inside `MainLayout` and gated behind a `PrivateWrapper` that checks `isAuthenticated()`.
- Auth state is currently backed by a token stored in `localStorage` (see `src/utils/auth.js`). Any unmatched route falls back to a `NotFound` page.

> **Note:** `isAuthenticated()` in `src/utils/auth.js` currently returns `true` when **no** token is present. Double-check this logic before relying on it for real authentication — it likely needs to be inverted (`!!localStorage.getItem('token')`).

## State Management

The Redux store (`src/redux/store/index.jsx`) combines four slices:

- `auth` — login state and token
- `user` — user profile data
- `grid` — selected grid/report option for the worksheet page
- `fileUpload` — open/close state for the file upload modal

## Data Grid (AG Grid)

The worksheet and search-terms pages use a shared `CollapseAbleTable` component (`src/components/table`) built on AG Grid, supporting:

- Custom column definitions per report type
- Column pin state persisted to `localStorage`
- Pagination via a standalone `Pagination` component

> AG Grid Enterprise features require a valid license key for production use. See the [AG Grid licensing docs](https://www.ag-grid.com/license-pricing/) for details.

## Linting

This project uses ESLint 9's flat config format (`eslint.config.js`) with React, React Hooks, accessibility (`jsx-a11y`), and import-order rules enabled. Run `npm run lint` before committing changes, or `npm run lint:fix` to auto-fix straightforward issues.

## Building for Production

```bash
npm run build
```

This generates an optimized build in the `dist/` folder, ready to be deployed to any static hosting provider (Vercel, Netlify, S3 + CloudFront, etc.).

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes
4. Push to the branch and open a Pull Request

## License

No license file is currently included in this repository. Add a `LICENSE` file to clarify how others may use this project.
