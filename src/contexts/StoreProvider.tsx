'use client'

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState
} from 'react'

import { IStoreContextData } from '@/@types/contexts'

export const StoreContext = createContext<IStoreContextData>(
  {} as IStoreContextData
)

const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  // ========================================================================

  // const [alertData, setAlertData] = useState()

  // ========================================================================

  const StoreContextData: IStoreContextData = useMemo(() => {
    return {}
  }, [])

  return (
    <StoreContext.Provider value={StoreContextData}>
      {children}
    </StoreContext.Provider>
  )
}

function useStore(): IStoreContextData {
  const context = useContext(StoreContext)

  if (!context) throw new Error('useAuth must be used within a UserProvider')

  return context
}

export { StoreProvider, useStore }
