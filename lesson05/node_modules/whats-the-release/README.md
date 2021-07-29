<h1 align="center">whats the release</h1>

<p align="center">
  <a href="https://app.circleci.com/pipelines/github/grbull/whats-the-release">
    <img src="https://img.shields.io/circleci/build/github/grbull/whats-the-release?style=flat-square" />
  </a>
  <a href="https://github.com/grbull/whats-the-release/blob/master/CHANGELOG.md">
    <img src="https://img.shields.io/npm/v/eslint-config-gbx?style=flat-square" />
  </a>
  <a href="https://github.com/grbull/whats-the-release/blob/master/LICENSE">
    <img src="https://img.shields.io/npm/l/whats-the-release?style=flat-square" />
  </a>
  <a href="https://app.codecov.io/gh/grbull/whats-the-release">
    <img src="https://img.shields.io/codecov/c/gh/grbull/whats-the-release?style=flat-square" />
  </a>
  <a href="https://www.npmjs.com/package/whats-the-release">
    <img src="https://img.shields.io/npm/dw/whats-the-release?style=flat-square" />
  </a>
</p>

A simple api to desconstruct and parse file names of movies and tv shows. It is likely very buggy as I havn't covered many cases yet.

## 🚀 Get started

### Install

```bash
npm install what-the-release
```

### Example usage

```typescript
import { parse } from 'what-the-release';

console.log(parse('Movie.Name.2021.1080p.WEB-DL.DDP5.1.Atmos.H.264-moo'));

// Returns:
// {
//   type: "Movie",
//   name: "Movie Name",
//   year: "2021",
//   resolution: "1080p",
//   source: "WEB-DL",
//   codecs: { audio: "DDP5.1", video: "X264" },
//   container: undefined,
//   mimeType: undefined,
//   tags: [],
//   releaseGroup: "moo",
// }
```

## 📖 Changelog

Check out our [changelog](./CHANGELOG.md).

## 📝 License

Licensed under the [MIT License](./LICENSE).
