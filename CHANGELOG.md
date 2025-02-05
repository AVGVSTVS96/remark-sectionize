# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## 2.1.3 - 2024-02-05
### Changed
- Improve types, use more minimal and correct types by @AVGVSTVS96

### Fixed
- Add `unified` as a dev dependency because we use it's `Plugin` type by @AVGVSTVS96

## [2.1.2] - 2024-08-11
### Changed
- Update `package.json` to publish only dist folder to NPM by @AVGVSTVS96

## [2.1.1] - 2024-08-10
### Changed
- Remove manually written `index.d.ts` file [PR #3](https://github.com/avgvstvs96/remark-sectionize/pull/3) by @AVGVSTVS96

## [2.1.0] - 2024-08-09
### Changed
- Converted to TypeScript [PR #2](https://github.com/avgvstvs96/remark-sectionize/pull/2) by @AVGVSTVS96
- Converted to PNPM [PR #2](https://github.com/avgvstvs96/remark-sectionize/pull/2) by @AVGVSTVS96
- Add Biome for linting and formatting [PR #2](https://github.com/avgvstvs96/remark-sectionize/pull/2) by @AVGVSTVS96
- Update package.json [PR #2](https://github.com/avgvstvs96/remark-sectionize/pull/2) by @AVGVSTVS96

## [2.0.0] - 2023-04-17
### Changed
- Use ESM instead of CommonJS (thanks @Dahmon for the [PR](https://github.com/jake-low/remark-sectionize/pull/12))

## [1.1.1] - 2020-02-13
### Fixed
- MDX `export` nodes are no longer wrapped in section tags (which prevented them from working). Thanks @nd0ut for the [PR](https://github.com/jake-low/remark-sectionize/pull/2) and @CanRau for helping me understand the use case.

## [1.1.0] - 2019-08-27
### Added
- Section nodes now have a `depth` (thanks @shogotsuneto for the [PR](https://github.com/jake-low/remark-sectionize/pull/1))

## [1.0.1] - 2019-02-02
### Added
- Keywords in `package.json` for better discoverability on NPM

## [1.0.0] - 2019-02-01

Initial release

### Added
- core functionality to transform a remark tree, inserting section nodes
- one unit test

[Unreleased]: https://github.com/jake-low/remark-sectionize/compare/v2.0.0...HEAD
[2.0.0]: https://github.com/jake-low/remark-sectionize/compare/v1.1.0...v2.0.0
[1.1.1]: https://github.com/jake-low/remark-sectionize/compare/v1.1.0...v1.1.1
[1.1.0]: https://github.com/jake-low/remark-sectionize/compare/v1.0.1...v1.1.0
[1.0.1]: https://github.com/jake-low/remark-sectionize/compare/v1.0.0...v1.0.1
[1.0.0]: https://github.com/jake-low/remark-sectionize/releases/tag/v1.0.0
