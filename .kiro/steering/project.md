# Taskly UI conventions

- React + Vite single-page app, plain JavaScript (JSX), no TypeScript.
- Components live in `src/components/`, one component per file, named exports avoided (use default export).
- Global styles live in `src/styles.css`. Use class names, no inline styles.
- Data is loaded from `public/tasks.json` with axios. There is no backend.
- Use 2-space indentation and double quotes.
- When changing dependencies, run `npm install` and `npm run build` to confirm the app still builds.
