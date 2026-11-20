# Kiro demo guide

This branch is intentionally broken in a few ways. Everything below is planted.

## Planted UI issues (all in `src/styles.css` unless noted)

| # | Symptom | Cause |
|---|---------|-------|
| 1 | Nav links sit lower than the logo | `.header` uses `align-items: flex-start` and `.nav` has `margin-top: 14px` |
| 2 | "Add task" button is taller than the input and sticks up | `.add-button` has `height: 48px`, `margin-top: -6px`, fixed width, vs input `height: 36px` |
| 3 | Middle column starts lower and has different padding | `.column:nth-child(2)` override |
| 4 | Long card titles run out of the card | `.card-title` has `white-space: nowrap`, no wrapping or ellipsis |
| 5 | Status badge hangs off the card corner | `.badge` uses negative `top`/`right` |
| 6 | Card text hugs the left edge | `.card` padding is `10px 14px 10px 4px` |
| 7 | Status select is not aligned with the due date | `.status-select` has `top: 4px` |
| 8 | Cards have the same fixed height, so content can clip | `.card` has `height: 96px` |
| 9 | On narrow screens the board is cut off instead of stacking | Columns have fixed `width: 320px`, no mobile layout, `.app` is `overflow: hidden` |

## Planted dependency issues (`package.json`)

- `react` / `react-dom` 17 are several majors behind. `src/main.jsx` uses `ReactDOM.render`, which was removed in React 19, so the upgrade needs a code change (`createRoot`).
- `axios` 0.21.1, `lodash` 4.17.20 and `moment` 2.29.1 have known vulnerabilities. `npm audit` reports them.
- `vite` 4.5.0 and `@vitejs/plugin-react` 3.1.0 are outdated and must be upgraded together.
- `underscore` is listed but never imported (unused dependency).
- `moment` is in maintenance mode. A good prompt is "replace moment with date-fns or Intl".

## Suggested demo flow

1. **Find the UI bugs.** Run `npm run dev`, then ask Kiro: "The UI looks crooked. Find the layout problems and fix them." Attach a screenshot to show image context.
2. **Fix responsiveness.** "Make the board stack on mobile."
3. **Audit dependencies.** "Run npm audit and explain what is outdated or unused."
4. **Upgrade with a workflow.** Ask Kiro to upgrade all dependencies to the latest versions, migrate any code that breaks, and verify with `npm run build`. Launch it as a workflow so you can show the plan, review, and validation steps.
5. **Steering.** Show `.kiro/steering/project.md` and how it guides the changes.
6. **Hooks.** Add a hook that runs `npm run build` after a task completes.

## Reset

This branch is the base. After a demo, `git checkout .` and `git clean -fd` restore it.
