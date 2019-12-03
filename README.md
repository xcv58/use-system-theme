# use-system-theme

React Hook for System Theme (User preferred color scheme). Please use React `> 16.8.0` for React Hooks support.

It detects the system theme and will update right after the users change the theme.

[![NPM](https://img.shields.io/npm/v/use-system-theme.svg)](https://www.npmjs.com/package/use-system-theme)
[![CircleCI](https://circleci.com/gh/xcv58/use-system-theme.svg?style=svg)](https://circleci.com/gh/xcv58/use-system-theme)
[![peerDependencies Status](https://david-dm.org/xcv58/use-system-theme/peer-status.svg)](https://david-dm.org/xcv58/use-system-theme?type=peer)
[![devDependencies Status](https://david-dm.org/xcv58/use-system-theme/dev-status.svg)](https://david-dm.org/xcv58/use-system-theme?type=dev)
[![Maintainability](https://api.codeclimate.com/v1/badges/b9d2a00973782602d73a/maintainability)](https://codeclimate.com/github/xcv58/use-system-theme/maintainability)

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
  return (
    <div>The System Theme is: {systemTheme}</div>
  )
}
```

## SSR support

To support SSR (server side rendering), the initial theme will be always `light` (since we don't know the theme on the server side) and it would immediately become `dark` if the device's theme is `dark`. Unfortunately, we can't avoid this because of the [React hydrate](https://reactjs.org/docs/react-dom.html#hydrate):

> React expects that the rendered content is identical between the server and the client.

So that the initial screen is `light` and become `dark` immediately on dark theme devices is not a bug.

## License

MIT © [xcv58](https://github.com/xcv58)
