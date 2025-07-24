# React Interview Challenges

This project contains debugging challenges to assess problem-solving skills in React applications. The challenges cover TypeScript, CSS, Jest testing, useEffect hooks, component architecture, and React Router.

## Setup

```bash
npm install
npm start
npm test
```

## Challenges

### 1. TypeScript Issues
**File:** `src/components/UserProfile.tsx`

Resolve TypeScript compilation errors related to utility types and discriminated unions.

### 2. Testing Problems
**Files:** `src/tests/UserWelcome.test.tsx`, `src/components/UserWelcome.tsx`

Fix failing tests for components that depend on global state hooks.

### 3. Rendering Performance
**Files:** `src/components/DataDashboard.tsx`, `src/components/DataChart.tsx`

Optimize component re-rendering caused by useEffect dependency issues.

### 4. CSS Layout Challenge
**File:** `src/components/CardLayout.tsx`

Debug 2 focused CSS issues in a project dashboard:
- **Stacking Context Problem**: Modal appears behind the first card
- **Flex Layout Issue**: The cards aren't evenly sized
- **White Text**: The purple card tags should have black text

### 5. Intersection Observer
**File:** `src/components/ObserverComponent.tsx`

Implement functionality to detect when elements scroll into view.

### 6. Error Boundaries
**Files:** `src/pages/UsersPage.tsx`, `src/pages/UserReports.tsx`

Ensure error boundaries properly catch errors from nested routes.

### 7. Component Architecture
**File:** `src/components/ComplexComponent.tsx`

Refactor a large component into smaller pieces and optimize with memoization.

## Navigation

- `/dashboard` - Performance optimization challenge
- `/users` - Error boundary challenge with nested tabs
  - `/users/list` - User list
  - `/users/create` - Create user form
  - `/users/reports` - Error triggering page
- `/challenges/typescript` - TypeScript challenge
- `/challenges/css` - CSS layout challenge
- `/challenges/observer` - Intersection observer challenge
- `/challenges/complex` - Component refactoring challenge

## Testing

```bash
npm test
```

Run tests to identify and fix testing-related issues.
