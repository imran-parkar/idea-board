# Idea Board

## Setup

Install: `npm install` or `pnpm install`

Run dev server: `npm run dev` or `pnpm dev`

Run tests: `npm run test` or `npm run test:ui` / `pnpm test` or `pnpm test:ui`

## Implemented features

- Page should be fully responsive.
- Each idea tile should contain a title and description, which is editable, as well as created/updated time.
- New ideas should have the title field focused to prompt user to begin typing.
- Add the ability to sort ideas by creation date or alphabetically.
- Utilise the localStorage API to persist current state when the page is refreshed.

## Issues/Improvements

- Fix tests for sorting tiles and to check character count validation is working.
- Add tests for SortIdeas component.
