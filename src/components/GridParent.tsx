"use client";

import React from "react";

import { twMerge } from "tailwind-merge";

import type { GridColSize, GridRowSize, ResponsiveValue } from "../types";
import { BREAKPOINTS } from "../types";

const BASE_GRID_CLASSES = "relative grid";

export type GridParentProps = React.HTMLAttributes<HTMLDivElement> & {
  cols?: ResponsiveValue<GridColSize>;
  rows?: ResponsiveValue<GridRowSize>;
  gap?: ResponsiveValue<number | string>;
  gapX?: ResponsiveValue<number | string>;
  gapY?: ResponsiveValue<number | string>;
};

function buildResponsiveClasses(
  prefix: string,
  value: ResponsiveValue<number | string> | undefined
): string {
  if (!value) return "";

  if (typeof value === "number" || typeof value === "string") {
    return `${prefix}-${value}`;
  }

  const classes: string[] = [];

  if (value.base !== undefined) {
    classes.push(`${prefix}-${value.base}`);
  }

  BREAKPOINTS.forEach((bp) => {
    if (value[bp] !== undefined) {
      classes.push(`${bp}:${prefix}-${value[bp]}`);
    }
  });

  return classes.join(" ");
}

export const GridParent = ({
  className,
  children,
  cols,
  rows,
  gap,
  gapX,
  gapY,
  ...rest
}: GridParentProps) => {
  const gridClasses = React.useMemo(
    () =>
      [
        buildResponsiveClasses("gd-cols", cols),
        buildResponsiveClasses("gd-rows", rows),
        buildResponsiveClasses("gd-gap", gap),
        buildResponsiveClasses("gd-gap-x", gapX),
        buildResponsiveClasses("gd-gap-y", gapY),
      ]
        .filter(Boolean)
        .join(" "),
    [cols, rows, gap, gapX, gapY]
  );

  return (
    <div
      className={twMerge(BASE_GRID_CLASSES, gridClasses, className)}
      {...rest}
    >
      {children}
    </div>
  );
};
