import { create } from 'zustand'

type GameState = {
  hydration: number
  xp: number
  finished: boolean
  addXP: (val: number) => void
  loseHydration: (val: number) => void
  finishRun: () => void
  reset: () => void
}

export const useGameStore = create<GameState>((set) => ({
  hydration: 100,
  xp: 0,
  finished: false,
  addXP: (val) => set((s) => ({ xp: s.xp + val })),
  loseHydration: (val) => set((s) => ({ hydration: Math.max(0, s.hydration - val) })),
  finishRun: () => set({ finished: true }),
  reset: () => set({ hydration: 100, xp: 0, finished: false })
}))
