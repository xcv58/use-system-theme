# use-system-theme

[![NPM](https://img.shields.io/npm/v/use-system-theme.svg)](https://www.npmjs.com/package/use-system-theme)
![npm bundle size](https://img.shields.io/bundlephobia/min/use-system-theme)

[![CircleCI](https://circleci.com/gh/xcv58/use-system-theme.svg?style=svg)](https://circleci.com/gh/xcv58/use-system-theme)
[![peerDependencies Status](https://david-dm.org/xcv58/use-system-theme/peer-status.svg)](https://david-dm.org/xcv58/use-system-theme?type=peer)
[![devDependencies Status](https://david-dm.org/xcv58/use-system-theme/dev-status.svg)](https://david-dm.org/xcv58/use-system-theme?type=dev)
[![Maintainability](https://api.codeclimate.com/v1/badges/b9d2a00973782602d73a/maintainability)](https://codeclimate.com/github/xcv58/use-system-theme/maintainability)

React Hook for System Theme (User preferred color scheme). Please use React `> 16.8.0` for React Hooks support.

It detects the system theme and will update right after the users change the theme.

![2019-12-25 19 43 26](https://user-images.githubusercontent.com/503123/71456630-3008bc80-274f-11ea-8a57-f8a619b31a60.gif)

## Install

```bash
yarn add use-system-theme
```

or

```bash
npm install --save use-system-theme
```

## Usage

```tsx
import React from 'react'
import useSystemTheme from 'use-system-theme'

export default () => {
  const systemTheme = useSystemTheme()
  return <div>The System Theme is: {systemTheme}</div>
}
```

## Browser support

As 2019 December, all major browsers on both mobile and desktop platforms support the `prefers-color-scheme media query` feature. For more details, please check:
[https://caniuse.com/#feat=prefers-color-scheme](https://caniuse.com/#feat=prefers-color-scheme)

## SSR support

The `useSystemTheme` function has only one argument `isSSR`, and you must pass `true` for SSR app. Otherwise, your app may have bug like doesn't show dark them on dark theme devices.

```tsx
declare const useSystemTheme: (isSSR?: boolean) => SystemTheme
```

```tsx
import React from 'react'
import useSystemTheme from 'use-system-theme'

export default () => {
  const systemTheme = useSystemTheme(true)
  return <div>The System Theme is: {systemTheme}</div>
}
```

To support SSR (server side rendering), the initial theme will be always `light` (since we don't know the theme on the server side) and it would immediately become `dark` if the device's theme is `dark`. Unfortunately, we can't avoid this because of the [React hydrate](https://reactjs.org/docs/react-dom.html#hydrate):

> React expects that the rendered content is identical between the server and the client.

So that for all SSR app, the initial screen will be `light` and become `dark` immediately on dark theme devices. It's caused by the nature of how React SSR works.

## Development

`yarn start`

To build the library and watch the file changes locally.

### Develop with local examples

The local examples use the [yalc](https://github.com/whitecolor/yalc) to get live local version library.

You need to run `yarn watch:yalc` on the root directory during development. And use `npx yalc add use-system-theme` in the example directory under `examples/`. Then follow the README file in each example folder.

Note: the `yalc` will change the `pcakge.json` for the example project to `"use-system-theme": "file:.yalc/use-system-theme"`. Please do **NOT** commit the change because it would cause CI/CD failure.

## License

MIT © [xcv58](https://github.com/xcv58)
