# Idea Board

## Task

Build an idea board that allows a user to create new ideas, edit existing ideas or delete them. Each idea should be represented as a tile on the board that displays a title, description and created/updated time. The title and description should be editable inline. The description text should have a max length of 140 characters. There should also be a button on the tile that allows for it to be deleted.

When working through the task you should treat it as if you're writing real world production code. We're looking to see a test suite, comments where required and an attention to detail. In addition to this you may use whatever libraries or packages you wish. This should take you around two or three hours to complete fully but feel free to spend as much or as little time on the exercise as you like.

### Required

- Page should be fully responsive.
- Each idea tile should contain a title and description, which is editable, as well as created/updated time.
- New ideas should have the title field focused to prompt user to begin typing.
- Add the ability to sort ideas by creation date or alphabetically.

### Stretch

- Utilise the localStorage API to persist current state when the page is refreshed.
- Add a character countdown as the user is approaching the limit of their description text.
- Add an unobtrusive notification when an update is made to a tile.

## Demo

https://idea-board-lovat.vercel.app/

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

- Add tests for SortIdeas component.
