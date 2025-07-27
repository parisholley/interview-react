# React Interview Challenges

This project contains debugging challenges to assess problem-solving skills in React applications. The challenges cover 
TypeScript, CSS, Jest testing, useEffect hooks, component architecture, and React Router.

## Rules

* You are NOT allowed to use AI-assistance (directly or via search engines). We recommend using DuckDuckGo.com for searching or add `-AI` (minus A I) to the end of your google queries).
* You are allowed and encouraged to read documentation on various languages, libraries, and frameworks in order to solve the challenges.
* The interviewer will answer any questions you have or provide hints on request but if you are stuck, you should skip the challenge and try another.
* Challenges should be done (or skipped) in order.
* 
## Setup

```bash
npm install
npm start
npm test
```

## Challenges

### 1. TypeScript Issues
**Files:** `src/challenge1/service.ts`, `src/challenge1/UserDisplay.tsx`

Resolve TypeScript compilation errors which can be reproduced by running:

```shell
npm run build
```

### 2. Testing Problems
**Files:** `src/challenge2/UserWelcome.test.tsx`, `src/challenge2/UserWelcome.tsx`

Fix failing tests for components that depend on global state.

### 3. Rendering Performance
**Files:** `src/challenge3/DataDashboard.tsx`, `src/challenge3/DataChart.tsx`

Optimize component re-rendering caused by useEffect dependency issues (reduce the number of console logs).

### 4. CSS Layout Challenge
**File:** `src/challenge4/CardLayout.tsx`

Fixed the following CSS issues:
- **Stacking Context Problem**: Modal appears behind the first card
- **Flex Layout Issue**: The tags at the bottom aren't evenly sized
- **White Text**: The purple card should have white text while the tags should have black text

### 5. Intersection Observer
**File:** `src/challenge5/ObserverComponent.tsx`

Implement functionality to detect when elements scroll into view.

### 6. Error Boundaries
**Files:** `src/challenge6/UsersPage.tsx`, `src/challenge6/UserReports.tsx`

Ensure that when an exception occurs inside a tab, that the entire application does not break.

### 7. Component Architecture
**File:** `src/challenge7/ComplexComponent.tsx`

A junior engineer has submitted a PR with one huge component, show them how you would break it up.
