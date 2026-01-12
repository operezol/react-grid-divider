"use client";

import React from "react";

import { twMerge } from "tailwind-merge";

import type { ResponsiveValue } from "../types";
import { BREAKPOINTS } from "../types";

export type GridDividerVerticalConfig = {
  orientation: "vertical";
  afterCol: number;
  rowStart?: number;
  rowSpan?: number;
  hidden?: boolean;
};

export type GridDividerHorizontalConfig = {
  orientation: "horizontal";
  afterRow: number;
  colStart?: number;
  colSpan?: number;
  hidden?: boolean;
};

export type GridDividerConfig =
  | GridDividerVerticalConfig
  | GridDividerHorizontalConfig;

export type GridDividerProps = React.HTMLAttributes<HTMLDivElement> & {
  config?: ResponsiveValue<GridDividerConfig>;
};

function buildDividerClasses(
  config: ResponsiveValue<GridDividerConfig> | undefined
): string {
  if (!config) return "";

  if ("orientation" in config) {
    return buildSingleConfig(config);
  }

  const classes: string[] = [];
  let wasHiddenInPreviousBreakpoint = false;

  if (config.base) {
    classes.push(buildSingleConfig(config.base));
    wasHiddenInPreviousBreakpoint = config.base.hidden === true;
  }

  BREAKPOINTS.forEach((bp) => {
    if (config[bp]) {
      const currentConfig = config[bp]!;
      const isCurrentlyHidden = currentConfig.hidden === true;

      if (wasHiddenInPreviousBreakpoint && !isCurrentlyHidden) {
        classes.push(`${bp}:block`);
      }

      const bpClasses = buildSingleConfig(currentConfig, true)
        .split(" ")
        .map((cls) => `${bp}:${cls}`)
        .join(" ");
      classes.push(bpClasses);

      wasHiddenInPreviousBreakpoint = isCurrentlyHidden;
    }
  });

  return classes.filter(Boolean).join(" ");
}

function buildSingleConfig(
  config: GridDividerConfig,
  includeVisibility: boolean = true
): string {
  const classes: string[] = [];

  if (includeVisibility && config.hidden) {
    classes.push("hidden");
  }

  if (config.orientation === "vertical") {
    classes.push(`grid-divider-v-${config.afterCol}`);
    if (config.rowSpan !== undefined) {
      classes.push(`grid-divider-row-span-${config.rowSpan}`);
      if (config.rowStart !== undefined) {
        classes.push(`grid-divider-row-start-${config.rowStart}`);
      }
    }
  } else {
    classes.push(`grid-divider-h-${config.afterRow}`);
    if (config.colSpan !== undefined) {
      classes.push(`grid-divider-col-span-${config.colSpan}`);
      if (config.colStart !== undefined) {
        classes.push(`grid-divider-col-start-${config.colStart}`);
      }
    }
  }

  return classes.join(" ");
}

export const GridDivider = ({
  className,
  config,
  ...rest
}: GridDividerProps) => {
  const dividerClasses = React.useMemo(
    () => buildDividerClasses(config),
    [config]
  );
  return (
    <div
      className={twMerge("grid-divider", dividerClasses, className)}
      aria-hidden="true"
      {...rest}
    />
  );
};
