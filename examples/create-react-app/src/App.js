import React from 'react'
import useSystemTheme from 'use-system-theme'

export default () => {
  const systemTheme = useSystemTheme()
  const isDark = systemTheme === 'dark'
  const style = {
    display: 'flex',
    paddingTop: '10rem',
    height: '100vh',
    justifyContent: 'center',
    backgroundColor: isDark ? 'black' : 'white',
    color: isDark ? 'white' : 'black'
  }
  return (
    <div style={style}>The System Theme is: {systemTheme}</div>
  )
}
