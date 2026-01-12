export type ResponsiveValue<T> =
  | T
  | { base?: T; sm?: T; md?: T; lg?: T; xl?: T; "2xl"?: T };

export const BREAKPOINTS = ["sm", "md", "lg", "xl", "2xl"] as const;

export type Breakpoint = (typeof BREAKPOINTS)[number];

export type GridColSize = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export type GridRowSize = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export type GridSize = GridColSize;
