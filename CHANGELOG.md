# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.1.0] - 2026-01-21

### Added
- Modern build system with tsup (replaces tsc + manual scripts)
- Dual format support: ESM and CJS
- Source maps for better debugging
- CI/CD workflow with GitHub Actions
- ESLint configuration for code quality
- Improved TypeScript configuration with stricter rules
- CHANGELOG.md for tracking changes
- MIGRATION.md for upgrade guidance
- Additional npm scripts: `dev`, `lint`, `lint:fix`, `type-check`

### Changed
- Build process now uses tsup instead of tsc
- Package now exports both ESM (.mjs) and CJS (.js) formats
- Updated devDependencies to latest versions
- Improved package.json metadata

### Improved
- Better developer experience with watch mode
- Faster builds with tsup
- Automatic "use client" banner for Next.js compatibility
- Better type checking with stricter TypeScript rules

## [1.0.0] - Initial Release

### Added
- `GridParent` component for creating responsive grid layouts
- `GridDivider` component for adding visual dividers to grids
- Support for 1-12 column/row grids
- Responsive configuration with breakpoints (sm, md, lg, xl, 2xl)
- Vertical and horizontal dividers
- Custom positioning with rowStart, rowSpan, colStart, colSpan
- TypeScript support with full type definitions
- Tailwind CSS v4 integration
