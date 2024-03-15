import { create } from 'zustand'

const useRegister = create((set) => ({
  isRegisterOpen: false,

  setRegisterOpen: () => set({ isRegisterOpen: true }),
  setRegisterClose: () => set({ isRegisterOpen: false }),
}))

export default useRegister
