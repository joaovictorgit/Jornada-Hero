import { create } from "zustand";
import rootHero from "./reducers/reducer-hero01";

type State = {
  array: any[];
  addToArray: (item: any) => void;
};

export const useStore = create<State>((set) => ({
  array: [],
  addToArray: (item) => set((state) => ({ array: [...state.array, item] })),
}));
