import { IUser } from '@/app/interfaces';
import { create } from 'zustand';

export interface IUserGlobalStore {
  user: IUser | null;
  setUser: (user: IUser | null) => void;
}

const useUserGlobalStore = create<IUserGlobalStore>((set) => ({
  user: null,
  setUser: (user: IUser | null) => set({ user }),
}));

export default useUserGlobalStore;