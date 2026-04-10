import { createContext, useContext, useState, useCallback, useEffect } from 'react'
import { useUser } from '@clerk/clerk-react'

const ProgressContext = createContext()

const STORAGE_KEY = 'harper_progress'

export function ProgressProvider({ children }) {
  const { user } = useUser()
  const [completed, setCompleted] = useState(() => {
    const saved = user?.unsafeMetadata?.[STORAGE_KEY]
    return Array.isArray(saved) ? saved : []
  })

  useEffect(() => {
    const saved = user?.unsafeMetadata?.[STORAGE_KEY]
    if (Array.isArray(saved)) setCompleted(saved)
  }, [user])

  const persist = useCallback(async (next) => {
    if (!user) return
    try {
      await user.update({ unsafeMetadata: { ...user.unsafeMetadata, [STORAGE_KEY]: next } })
    } catch {
      // silent — local state still works
    }
  }, [user])

  const markComplete = useCallback((moduleId) => {
    setCompleted(prev => {
      if (prev.includes(moduleId)) return prev
      const next = [...prev, moduleId]
      persist(next)
      return next
    })
  }, [persist])

  const isComplete = useCallback((moduleId) => completed.includes(moduleId), [completed])

  const resetProgress = useCallback(() => {
    setCompleted([])
    persist([])
  }, [persist])

  return (
    <ProgressContext.Provider value={{ completed, markComplete, isComplete, resetProgress }}>
      {children}
    </ProgressContext.Provider>
  )
}

export function useProgress() {
  return useContext(ProgressContext)
}
