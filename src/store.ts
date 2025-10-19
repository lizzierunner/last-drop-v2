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

export const useGameStore = create<GameState>((set: (fn: (state: GameState) => GameState) => void) => ({
  hydration: 100,
  xp: 0,
  finished: false,
  addXP: (val: number) => set((s: GameState) => ({ ...s, xp: s.xp + val })),
  loseHydration: (val: number) => set((s: GameState) => ({ ...s, hydration: Math.max(0, s.hydration - val) })),
  finishRun: () => set((s: GameState) => ({ ...s, finished: true })),
  reset: () => set((state) => ({
    ...state,
    hydration: 100,
    xp: 0,
    finished: false
  }))
}))
