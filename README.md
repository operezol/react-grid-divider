# react-grid-divider

A flexible React grid system with visual dividers for Tailwind CSS v4. Create responsive grid layouts with customizable dividers that perfectly align with your grid gaps.

## Features

- ✨ **Tailwind CSS v4 Native** - Built specifically for Tailwind v4's new architecture
- 🎯 **Pixel-Perfect Positioning** - Dividers automatically center in grid gaps
- 📱 **Fully Responsive** - Breakpoint support for all grid properties
- 🎨 **Highly Customizable** - Control divider position, span, and visibility
- ⚡ **Performance Optimized** - Uses CSS Grid and CSS variables for maximum efficiency
- 📦 **TypeScript First** - Full type safety included
- 🪶 **Lightweight** - Minimal dependencies

## Installation

```bash
npm install react-grid-divider
# or
pnpm add react-grid-divider
# or
yarn add react-grid-divider
```

## Setup

### 1. Import the CSS utilities

Add the grid utilities CSS to your main CSS file (e.g., `globals.css`):

```css
@import 'react-grid-divider/styles';
```

### 2. Configure Tailwind (Optional but Recommended)

Add safelist patterns to your `tailwind.config.js` to ensure classes are not purged:

```javascript
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  safelist: [
    {
      pattern: /grid-divider-(v|h)-(1[0-2]|[1-9])/,
      variants: ['sm', 'md', 'lg', 'xl', '2xl'],
    },
    {
      pattern: /grid-divider-(row|col)-(start|span)-(1[0-2]|[1-9])/,
      variants: ['sm', 'md', 'lg', 'xl', '2xl'],
    },
    {
      pattern: /gd-(cols|rows)-(1[0-2]|[1-9])/,
      variants: ['sm', 'md', 'lg', 'xl', '2xl'],
    },
    {
      pattern: /gd-gap(-x|-y)?-([0-9]+(\.[0-9]+)?)/,
      variants: ['sm', 'md', 'lg', 'xl', '2xl'],
    },
  ],
};
```

## Usage

### Basic Example

```tsx
import { GridParent, GridDivider } from 'react-grid-divider';

function App() {
  return (
    <GridParent cols={3} gap={6}>
      <div>Cell 1</div>
      <div>Cell 2</div>
      <div>Cell 3</div>
      <div>Cell 4</div>
      <div>Cell 5</div>
      <div>Cell 6</div>
      
      {/* Vertical divider after column 1 */}
      <GridDivider config={{ orientation: 'vertical', afterCol: 1 }} />
      
      {/* Horizontal divider after row 1 */}
      <GridDivider config={{ orientation: 'horizontal', afterRow: 1 }} />
    </GridParent>
  );
}
```

### Responsive Grid

```tsx
<GridParent 
  cols={{ base: 1, md: 2, lg: 3 }}
  gap={{ base: 4, md: 6 }}
>
  <div>Responsive Cell 1</div>
  <div>Responsive Cell 2</div>
  <div>Responsive Cell 3</div>
  
  <GridDivider 
    config={{
      base: { orientation: 'horizontal', afterRow: 1 },
      md: { orientation: 'vertical', afterCol: 1 },
    }}
  />
</GridParent>
```

### Partial Dividers

```tsx
<GridParent cols={4} rows={3} gap={4}>
  {/* ... grid cells ... */}
  
  {/* Vertical divider spanning only rows 2-3 */}
  <GridDivider 
    config={{ 
      orientation: 'vertical', 
      afterCol: 2,
      rowStart: 2,
      rowSpan: 2
    }} 
  />
  
  {/* Horizontal divider spanning only columns 1-2 */}
  <GridDivider 
    config={{ 
      orientation: 'horizontal', 
      afterRow: 1,
      colStart: 1,
      colSpan: 2
    }} 
  />
</GridParent>
```

### Styled Dividers

```tsx
<GridDivider 
  config={{ orientation: 'vertical', afterCol: 1 }}
  className="bg-blue-500 w-2"
/>

<GridDivider 
  config={{ orientation: 'horizontal', afterRow: 1 }}
  className="bg-gradient-to-r from-transparent via-gray-300 to-transparent"
/>
```

## API Reference

### GridParent

Container component that creates the grid layout.

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `cols` | `ResponsiveValue<1-12>` | - | Number of columns (1-12) |
| `rows` | `ResponsiveValue<1-12>` | - | Number of rows (1-12) |
| `gap` | `ResponsiveValue<number \| string>` | - | Gap between all cells |
| `gapX` | `ResponsiveValue<number \| string>` | - | Horizontal gap only |
| `gapY` | `ResponsiveValue<number \| string>` | - | Vertical gap only |
| `className` | `string` | - | Additional CSS classes |
| `...rest` | `HTMLAttributes<HTMLDivElement>` | - | Standard div props |

**⚠️ Important:** Do not apply padding to `GridParent` when using dividers. Padding interferes with absolute positioning calculations. Use margin instead, or apply padding to individual grid cells.

### GridDivider

Component that renders a visual divider in the grid.

#### Props

| Prop | Type | Description |
|------|------|-------------|
| `config` | `ResponsiveValue<GridDividerConfig>` | Divider configuration |
| `className` | `string` | Additional CSS classes |
| `...rest` | `HTMLAttributes<HTMLDivElement>` | Standard div props |

#### GridDividerConfig

**Vertical Divider:**
```typescript
{
  orientation: 'vertical';
  afterCol: number;      // 1-12: Column after which to place divider
  rowStart?: number;     // 1-12: Starting row (for partial dividers)
  rowSpan?: number;      // 1-12: Number of rows to span
  hidden?: boolean;      // Hide divider at this breakpoint
}
```

**Horizontal Divider:**
```typescript
{
  orientation: 'horizontal';
  afterRow: number;      // 1-12: Row after which to place divider
  colStart?: number;     // 1-12: Starting column (for partial dividers)
  colSpan?: number;      // 1-12: Number of columns to span
  hidden?: boolean;      // Hide divider at this breakpoint
}
```

### ResponsiveValue

All grid properties support responsive values:

```typescript
type ResponsiveValue<T> = T | {
  base?: T;
  sm?: T;    // 640px
  md?: T;    // 768px
  lg?: T;    // 1024px
  xl?: T;    // 1280px
  '2xl'?: T; // 1536px
}
```

## Examples

### Dashboard Layout

```tsx
<GridParent cols={12} rows={6} gap={4} className="h-screen p-4">
  {/* Header */}
  <div className="col-span-12 row-span-1 bg-white rounded-lg p-4">
    Header
  </div>
  
  {/* Sidebar */}
  <div className="col-span-3 row-span-5 bg-white rounded-lg p-4">
    Sidebar
  </div>
  
  {/* Main Content */}
  <div className="col-span-9 row-span-5 bg-white rounded-lg p-4">
    Main Content
  </div>
  
  {/* Dividers */}
  <GridDivider config={{ orientation: 'horizontal', afterRow: 1 }} />
  <GridDivider 
    config={{ 
      orientation: 'vertical', 
      afterCol: 3,
      rowStart: 2,
      rowSpan: 5
    }} 
  />
</GridParent>
```

### Pricing Table

```tsx
<GridParent cols={3} gap={0} className="border rounded-lg overflow-hidden">
  <div className="p-6 bg-gray-50">Basic</div>
  <div className="p-6 bg-blue-50">Pro</div>
  <div className="p-6 bg-gray-50">Enterprise</div>
  
  <div className="p-6">$9/mo</div>
  <div className="p-6">$29/mo</div>
  <div className="p-6">$99/mo</div>
  
  {/* Vertical dividers */}
  <GridDivider config={{ orientation: 'vertical', afterCol: 1 }} className="bg-gray-200" />
  <GridDivider config={{ orientation: 'vertical', afterCol: 2 }} className="bg-gray-200" />
  
  {/* Horizontal divider */}
  <GridDivider config={{ orientation: 'horizontal', afterRow: 1 }} className="bg-gray-200" />
</GridParent>
```

## Requirements

- React 18+ or 19+
- Tailwind CSS 4.0+

## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Support

If you encounter any issues or have questions, please file an issue on GitHub.
