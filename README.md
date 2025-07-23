# React Interview Debugging Challenges

This project contains 7 debugging challenges designed to test problem-solving and debugging skills in React applications. The challenges focus on common issues developers encounter with TypeScript, CSS, Jest testing, useEffect hooks, component architecture, and React Router.

## Setup

```bash
npm install
npm start  # Start development server
npm test   # Run tests
```

## Challenges (Ordered by Difficulty - Easiest to Hardest)

### 1. TypeScript Utility Types with Discriminated Unions (10-15 minutes) ⭐⭐
**File:** `src/components/UserProfile.tsx`

**Issue:** Complex TypeScript compilation errors involving discriminated unions, utility types, and `Extract`.

**Problems:**
- Using `Pick` on a discriminated union loses the discriminator field
- `Omit` from unions creates type issues with discriminated fields  
- Incorrect `Extract` syntax for filtering union types
- Accessing union properties without proper type narrowing
- Functions expecting specific union members but receiving broad union types

**Solution:** 
- Use `Extract<User, { type: 'admin' }>` to filter union types correctly
- Create proper display types that account for optional fields across union members
- Use type narrowing and conditional types for union property access
- Fix utility type usage to work properly with discriminated unions

---

### 2. Jest Test with Global State Hook (10-15 minutes) ⭐⭐
**Files:** 
- `src/tests/UserWelcome.test.tsx`
- `src/components/UserWelcome.tsx`
- `src/hooks/useGlobalState.ts`

**Issue:** Test is broken because the component uses `useLoggedInUser` hook which depends on global state context.

**Problem:** The test tries to manually provide global state context for testing, creating unnecessary complexity and tight coupling. The component throws an error when rendered without the context provider.

**Solution:** Mock the `useLoggedInUser` hook using `jest.mock()` instead of trying to provide real global state context in tests. This approach is cleaner, faster, and doesn't require setting up complex provider hierarchies.

---

### 3. useEffect Render Behavior (15-20 minutes) ⭐⭐
**Files:** 
- `src/components/DataDashboard.tsx`
- `src/components/DataChart.tsx`
- `src/components/DataFilters.tsx`

**Issue:** Components are re-rendering too many times due to useEffect dependency arrays causing extra renders.

**Problem:** The useEffect in `DataDashboard.tsx` has `data` in its dependency array, which causes infinite re-renders because the effect updates the data state.

**Solution:** Remove `data` from the useEffect dependency array and fix the second useEffect to only depend on the specific values it actually needs.

---

### 4. CSS Styling Interaction Issue (15-25 minutes) ⭐⭐⭐
**File:** `src/components/CardLayout.tsx`

**Issue:** Card content is not displaying correctly due to complex interactions between flexbox, position, and overflow properties.

**Problems:**
- `CardHeader` uses `position: absolute` which removes it from the flex flow
- `CardContent` content is hidden behind the absolutely positioned header
- `CardFooter` uses `position: sticky` which doesn't work as expected in this layout context

**Solution:** Fix the positioning to use proper flexbox layout instead of absolute positioning, and ensure proper padding/spacing for content visibility.

---

### 5. Intersection Observer Component (20-30 minutes) ⭐⭐⭐
**File:** `src/components/ObserverComponent.tsx`

**Issue:** Component is supposed to detect when a child component scrolls into view and fire an event, but parts are missing.

**Problems:**
- `ChildComponent` doesn't use `forwardRef`, so it can't receive the ref
- The intersection observer implementation is incomplete (marked as TODO)

**Solution:** Add `forwardRef` to `ChildComponent` and implement the intersection observer logic to detect when the component is visible.

---

### 6. React Router Error Boundary (25-35 minutes) ⭐⭐⭐⭐
**Files:**
- `src/pages/UsersPage.tsx`
- `src/pages/UserReports.tsx`
- `src/components/ErrorBoundary.tsx`

**Issue:** Error boundary looks like it should catch errors from nested tab routes, but errors bubble up to the app level instead.

**Problem:** The error boundary is positioned correctly in the JSX, but React Router's `Outlet` component and the way routes are structured means errors from nested routes might not be caught where expected.

**Solution:** Move the error boundary to wrap the route definition or adjust the component tree structure to ensure errors from nested routes are properly caught.

---

### 7. Component Refactoring & useMemo Optimization (30-45 minutes) ⭐⭐⭐⭐⭐
**File:** `src/components/ComplexComponent.tsx`

**Issue:** Large, monolithic component that contains state and logic for multiple distinct features that should be separate components.

**Problems:**
- Component manages state for 4 different sections (user profile, shopping cart, analytics, settings)
- Each section should be its own component
- Complex calculations are performed on every render without memoization
- Code is difficult to maintain and test

**Solution:** 
1. Break the component into 4 separate components: `UserProfile`, `ShoppingCart`, `Analytics`, and `Settings`
2. Move calculations like `cartSubtotal`, `cartTax`, `cartTotal`, `conversionRate`, and `revenuePerVisit` into `useMemo` hooks
3. Pass data and callbacks as props to child components

## Navigation

The app includes a navigation system to access different challenges:

- `/dashboard` - DataDashboard component (useEffect challenge)
- `/users` - Users section with tabs (error boundary challenge)
  - `/users/list` - User list
  - `/users/create` - Create user form  
  - `/users/reports` - User reports (triggers error for error boundary testing)
- Individual challenge routes:
  - `/challenges/typescript` - TypeScript utility types
  - `/challenges/css` - CSS styling issues
  - `/challenges/observer` - Intersection observer
  - `/challenges/complex` - Complex component refactoring

## Testing

Run the Jest test with:
```bash
npm test
```

The broken test is in `src/tests/UserWelcome.test.tsx` and demonstrates the global state hook testing challenge.

## Key Learning Objectives

1. **TypeScript**: Understanding utility types and proper type definitions
2. **Testing**: Proper mocking strategies vs. providing real dependencies
3. **Performance**: Understanding useEffect dependencies and avoiding infinite renders  
4. **CSS**: Deep understanding of positioning, flexbox, and layout interactions
5. **React Patterns**: Implementing intersection observer and ref forwarding
6. **Error Handling**: React error boundaries and component tree structure
7. **Architecture**: Component decomposition and performance optimization with useMemo

Each challenge is designed to be realistic problems that developers encounter in production React applications.
