import Bowser from 'bowser'
import React, { useEffect, useState } from 'react'

export default () => {
  const [text, setText] = useState('')
  useEffect(() => {
    const browser = Bowser.getParser(window.navigator.userAgent).getBrowser()
    setText(`Browser: ${browser.name} ${browser.version}`)
  })
  return <p>{text}</p>
}
