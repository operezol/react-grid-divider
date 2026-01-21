# Migration Guide

## Upgrading from 1.0.0 to 1.1.0

Version 1.1.0 introduces significant improvements to the build system and developer experience while maintaining **100% API compatibility**. No code changes are required.

### What Changed

#### Build System
- **Old**: TypeScript compiler (tsc) + manual CSS copy script
- **New**: tsup (modern bundler with automatic CSS handling)

#### Package Formats
- **Old**: ESM only
- **New**: ESM + CJS (better compatibility)

#### Developer Tools
- **New**: ESLint configuration
- **New**: CI/CD with GitHub Actions
- **New**: Watch mode for development
- **New**: Stricter TypeScript checks

### Breaking Changes

**None!** The API remains completely unchanged. All existing code will work without modifications.

### Installation

If you're upgrading from 1.0.0:

```bash
npm update react-grid-divider
# or
pnpm update react-grid-divider
# or
yarn upgrade react-grid-divider
```

### New Features You Can Use

#### 1. Development Mode

Watch mode for faster development:

```bash
pnpm dev
```

#### 2. Type Checking

Verify types without building:

```bash
pnpm type-check
```

#### 3. Linting

Check code quality:

```bash
pnpm lint
pnpm lint:fix
```

### For Package Maintainers

If you're maintaining a fork or contributing:

#### New Build Process

```bash
# Old way (no longer needed)
pnpm build  # (used tsc + copy script)

# New way (same command, better output)
pnpm build  # (uses tsup)
```

#### Development Workflow

```bash
# Install dependencies
pnpm install

# Start development with watch mode
pnpm dev

# Run type checking
pnpm type-check

# Run linting
pnpm lint

# Build for production
pnpm build
```

#### CI/CD

The package now includes GitHub Actions workflow for automatic publishing:
- Runs on release creation
- Performs type checking
- Builds the package
- Publishes to npm

### Compatibility

- **React**: 18.x or 19.x (unchanged)
- **Tailwind CSS**: 4.x (unchanged)
- **Node.js**: 18+ recommended (for development)
- **Package Managers**: npm, pnpm, yarn (all supported)

### Rollback

If you need to rollback to 1.0.0:

```bash
npm install react-grid-divider@1.0.0
# or
pnpm add react-grid-divider@1.0.0
# or
yarn add react-grid-divider@1.0.0
```

### Support

If you encounter any issues:
1. Check the [README.md](./README.md) for usage examples
2. Review this migration guide
3. File an issue on [GitHub](https://github.com/operezol/react-grid-divider/issues)

### Summary

✅ **No code changes required**  
✅ **Better build system**  
✅ **Improved developer experience**  
✅ **Same great API**  
✅ **Better compatibility (ESM + CJS)**
