import Bowser from 'bowser'
import React from 'react'

export default () => {
  const browser = Bowser.getParser(window.navigator.userAgent).getBrowser()
  return (
    <p>
      Browser: {browser.name} {browser.version}
    </p>
  )
}
