import { create } from 'zustand';

const useStore = create((set) => ({
  user: null,
  isLoggedIn: false,
  userList: [],
  userListItem: {},
  setIsLoggedIn: (isLoggedIn: boolean) => set({ isLoggedIn }),
  setUser: (user: any) => set({ user }),
  setUserList: (userList: string[]) => set({userList}),
  setUserListItem: (userListItem: any) => set({userListItem})
}));

export { useStore };
