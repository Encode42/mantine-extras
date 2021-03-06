# 3.5.0
### Changed
- The `TOSModal` component now has deny/accept buttons.
- The `TOSPage` component now uses disclosure rather than state.

# 3.4.0
### Changed
- Moved all `util.ts` functions to their own files, exported from `util.ts`.
- Use `ynpx` instead of `npx`.

### Added
- The `Button` component.
- Vertical divider between `statusCode` and `title` of `ErrorPage`.
- The `Group` component.
- The `ThemeToggle` component.
- The `SxOperations` interface.

### Removed
- Removed `index.ts` from `util/` subdirectories.

# 3.3.0
### Fixed
- `Social#iconProps` and `Social#actionIconProps` not being optional.
- `Video#config` and `Video#boxProps` not being optional.

### Removed
- Temporarily removed the `MDX` component.

# 3.2.1
### Changed
- Renamed `ErrorProps` to `ErrorPageProps`.

# 3.2.0
### Fixed
- `SocialProps#iconProps` and `SocialProps#actionIconProps` not being optional.

### Changed
- Renamed the `Error` component to `ErrorPage`.

### Added
- The `util#toArrayBuffer` function.

# 3.1.0
### Changed
- Target has been changed to `ES2021` from `ES2015`.

### Added
- `Class` type.

# 3.0.0
This is the first officially-supported version of `mantine-extras`. Versions `1.0.0` through `2.0.3` were vital steps towards this release.

In hindsight, I should've started from version `0.0.1`.
