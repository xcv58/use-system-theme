import { useEffect, useState } from 'react'

const getMql = () => {
  if (typeof window === 'undefined') {
    return
  }
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)')
}

const getSystemTheme = (matches: boolean) => (matches ? 'dark' : 'light')

export type SystemTheme = 'dark' | 'light'

function useSystemTheme() {
  const [systemTheme, setSystemTheme] = useState<SystemTheme>('light')
  useEffect(() => {
    const mql = getMql()
    const mqlListener = (e: any) => setSystemTheme(getSystemTheme(e.matches))
    if (mql) {
      setSystemTheme(getSystemTheme(mql.matches))
      mql.addListener(mqlListener)
    }
    return () => mql && mql.removeListener(mqlListener)
  }, [])
  return systemTheme
}

export default useSystemTheme
