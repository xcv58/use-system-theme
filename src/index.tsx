import { useEffect, useState } from 'react'

const getMql = () => (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)')) || undefined

const getSystemTheme = (matches: boolean) => matches ? 'dark' : 'light'

export type SystemTheme = 'dark' | 'light'

const initialDrakStatus = getMql().matches

function useSystemTheme() {
  const [systemTheme, setSystemTheme] = useState<SystemTheme>(getSystemTheme(initialDrakStatus))
  useEffect(() => {
    const mql = getMql()
    const mqlListener = (e: any) => setSystemTheme(getSystemTheme(e.matches))
    mql && mql.addListener(mqlListener)
    return () => mql && mql.removeListener(mqlListener)
  }, [])
  return systemTheme
}

export default useSystemTheme
