# CSS Challenge Solutions Guide

## Overview
This document explains the solutions to the CSS issues in `CardLayout.tsx` for interview reference.

## Issues and Solutions

### Issue 1: Stacking Context Problem

**Problem**: Modal appears behind the first card when opened
- The first card has `transform: scale(1.05)` and `z-index: 1000`
- The `transform` property creates a new stacking context
- Modal has `z-index: 500`, which is lower than the card's z-index
- Result: First card appears above modal

**Solution Options:**

**Option A: Remove z-index from card (Recommended)**
```css
&:first-child {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  transform: scale(1.05);
  /* Remove this line: z-index: 1000; */
}
```

**Option B: Increase modal z-index**
```css
z-index: ${props => props.show ? '1500' : '-1'};  // Higher than 1000
```

**Why Option A is better:** Removing unnecessary z-index values prevents stacking context complications and follows best practices.

### Issue 2: Flex Layout Problem

**Problem**: Tags have uneven widths
- All tags start with `flex: 1` (equal width)
- First tag gets `flex: 3` (3x wider)
- Last tag gets `flex: 0.5` (half width)
- Result: Very uneven tag distribution

**Solution**: Remove the conflicting flex overrides
```css
const TagContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 15px;
  
  & > span {
    flex: 1;  // Keep this for equal width
    text-align: center;
  }
  
  /* Remove these conflicting rules:
  & > span:first-child {
    flex: 3;
  }
  
  & > span:last-child {
    flex: 0.5;
  }
  */
`;
```

**Result**: All tags now have equal width with `flex: 1`

## Key Learning Points

### Stacking Contexts
- Elements with `transform`, `opacity < 1`, `position + z-index` create new stacking contexts
- Z-index values only compete within the same stacking context
- Avoid unnecessary z-index declarations
- Higher z-index doesn't always win if elements are in different stacking contexts

### Flexbox Distribution
- `flex: 1` makes items grow equally to fill available space
- Individual flex values override base rules (specificity doesn't apply here, it's cascade order)
- `:nth-child` selectors applied later in CSS override earlier rules
- When debugging flex issues, check for conflicting flex values on child elements

## Common Mistakes Candidates Make

1. **Trying to fix stacking with higher z-index only** - Doesn't work if elements are in different stacking contexts
2. **Not recognizing transform creates stacking contexts** - Key CSS knowledge gap
3. **Trying to fix flex with `!important`** - Doesn't address root cause
4. **Adding more CSS instead of removing problematic rules** - Sometimes less is more

## Interview Tips

- Let candidates explore both issues independently
- If they get stuck on stacking contexts, hint about what CSS properties create them
- For flex issues, ask them to inspect computed styles in dev tools
- Good candidates will remove unnecessary CSS rather than add more complexity
- Look for understanding of CSS fundamentals, not just trial-and-error fixing
