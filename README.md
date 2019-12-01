# use-system-theme

> React Hook for System Theme

[![NPM](https://img.shields.io/npm/v/use-system-theme.svg)](https://www.npmjs.com/package/use-system-theme)

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

## License

MIT © [xcv58](https://github.com/xcv58)
