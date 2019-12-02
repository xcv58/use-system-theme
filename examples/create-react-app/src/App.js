import React from 'react'
import classNames from 'classnames'
import useSystemTheme from 'use-system-theme'

export default () => {
  const systemTheme = useSystemTheme()
  const isDark = systemTheme === 'dark'
  return (
    <>
    <div className={classNames(
      dark: isDark,
      light: !isDark
    )}>The System Theme is: <strong>{systemTheme}</strong></div>
    <style jsx>{`
      :global(body) {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
          Helvetica, sans-serif;
      }
      div {
        display: flex;
        paddingTop: 10rem;
        height: 100vh;
        justify-content: center;
      }
      .dark {
        backgroundColor: black;
        color: white;
      }
      .light {
        backgroundColor: white;
        color: black;
      }
    `}</style>
    </>
  )
}
