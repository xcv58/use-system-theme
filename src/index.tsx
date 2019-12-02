import { useEffect, useState } from 'react'

const getMql = () => {
  if (typeof window === 'undefined') {
    return
  }
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)')
}

const getSystemTheme = (matches: boolean) => matches ? 'dark' : 'light'

export type SystemTheme = 'dark' | 'light'

const initMql = getMql()

function useSystemTheme() {
  const [systemTheme, setSystemTheme] = useState<SystemTheme>(getSystemTheme(initMql ? initMql.matches : false))
  const mql = getMql()
  useEffect(() => {
    const mqlListener = (e: any) => setSystemTheme(getSystemTheme(e.matches))
    mql && mql.addListener(mqlListener)
    return () => mql && mql.removeListener(mqlListener)
  }, [])
  return systemTheme
}

export default useSystemTheme
