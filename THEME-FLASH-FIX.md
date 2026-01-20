# Theme Flash Fix - Eliminating Green/Light Theme Flash

## Problem
The portfolio was showing a green/light color flash during initial page load before the dark theme was applied. This happened because:

1. **React hydration timing**: The theme was only applied client-side via `useEffect`, causing a brief flash
2. **Background effects blending**: Cyan/blue gradients from `BackgroundEffects` were visible before the dark background loaded
3. **No SSR theme support**: The HTML was rendered without the `dark` class on initial load

## Solution

### 1. Blocking Script in HTML Head
Added a script that runs **before React hydration** to immediately apply the dark class:

```tsx
// In app/layout.tsx
<script
  dangerouslySetInnerHTML={{
    __html: `
      (function() {
        try {
          const theme = localStorage.getItem('theme') || 'dark';
          if (theme === 'dark') {
            document.documentElement.classList.add('dark');
          }
        } catch (e) {}
      })();
    `,
  }}
/>
```

### 2. HTML Suppression of Hydration Warning
Added `suppressHydrationWarning` to the HTML tag to prevent React warnings:

```tsx
<html lang="en" className="scroll-smooth" suppressHydrationWarning>
```

### 3. Default Dark Background on HTML
Set the default background to dark on the root HTML element:

```css
/* In app/globals.css */
html {
  background-color: #0a0a0a;
  color-scheme: dark;
}
```

This ensures the background is dark **even before React loads**.

### 4. Optimized ThemeProvider
Simplified the theme initialization to read from localStorage immediately:

```tsx
const [theme, setTheme] = useState<Theme>(() => {
  if (typeof window !== "undefined") {
    return (localStorage.getItem("theme") as Theme) || "dark";
  }
  return "dark";
});
```

## Benefits

✅ **No theme flash**: Page loads directly in dark mode
✅ **No color flicker**: Background is dark from the very first paint
✅ **Better UX**: Smoother loading experience
✅ **Faster perceived load**: No jarring color changes
✅ **SSR-safe**: Works correctly on static export

## Testing

To test the fix:

1. Clear browser cache and localStorage
2. Hard refresh the page (Cmd+Shift+R on Mac, Ctrl+Shift+R on Windows)
3. You should see:
   - Dark background immediately
   - No green or light color flash
   - Smooth loading transition

## Related Files

- `app/layout.tsx` - Added blocking script and suppressHydrationWarning
- `app/components/ThemeProvider.tsx` - Optimized theme initialization
- `app/globals.css` - Added default dark background on HTML element

---

**Date Fixed**: January 20, 2026
**Impact**: Eliminates FOUC (Flash of Unstyled Content) on initial page load
