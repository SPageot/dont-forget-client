import { create } from 'zustand';

const useStore = create((set) => ({
  user: null,
  isLoggedIn: false,
  userList: [],
  userListItem: {},
  recipe: [],
  list:[],
  setIsLoggedIn: (isLoggedIn: boolean) => set({ isLoggedIn }),
  setUser: (user: any) => set({ user }),
  setUserList: (userList: string[]) => set({userList}),
  setUserListItem: (userListItem: any) => set({userListItem}),
  setRecipe: (recipe:[]) => set({recipe}), 
  setList: (list:any) => set({list})
}));

export { useStore };
