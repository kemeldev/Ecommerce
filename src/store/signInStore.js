import { create } from 'zustand'

const useSignIn = create((set) => ({
  isSignInOpen: false,

  setSignInOpen: () => set({ isSignInOpen: true }),
  setSignInClose: () => set({ isSignInOpen: false }),
}))

export default useSignIn
