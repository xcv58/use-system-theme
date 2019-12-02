import React from 'react'
import classNames from 'classnames'
import useSystemTheme from 'use-system-theme'

export default () => {
  const systemTheme = useSystemTheme()
  const isDark = systemTheme === 'dark'
  return (
    <>
      <div className={isDark ? 'dark' : 'light'}>The System Theme is: {systemTheme}</div>
      <style jsx>{`
        :global(body) {
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
            Helvetica, sans-serif;
        }
        div {
          display: flex;
          padding-top: 10rem;
          height: 100vh;
          justify-content: center;
        }
        .dark {
          background-color: black;
          color: white;
        }
        .light {
          background-color: white;
          color: black;
        }
    `}</style>
    </>
  )
}
