import { User } from '@/typings/api';
import { StateCreator } from 'zustand'
import { MyState } from './useStore';

export interface AuthSlice {
  isAuthenticated: boolean,
  user: User
  setLogin: (status: boolean) => void
  setUser: (user: User) => void
  updateUser: (user: Partial<User>) => void
}

const createAuthSlice: StateCreator<
  MyState,
  [],
  [],
  AuthSlice
> = (set, get) => ({
  isAuthenticated: false,
  user: {
    email: '',
    uid: '',
  },
  setLogin: (status) => {
    set({
      isAuthenticated: status
    })
  },
  setUser: (user) => {
    set({
      user
    })
  },
  updateUser: (user) => {
    set({
      user: {
        ...get().user,
        ...user
      }
    })
  },
})

export default createAuthSlice;
