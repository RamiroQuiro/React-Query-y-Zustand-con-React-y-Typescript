import create from "zustand";
import { persist } from "zustand/middleware";

type favoriteReposStore = {
  favoriteReposID: number[];
  addFavoriteRepo: (id: number) => void;
  removeFavoriteRepo: (id: number) => void;
};

export const useFavoriteReposStora = create(persist<favoriteReposStore>((set) => ({
    favoriteReposID: [],
    addFavoriteRepo: (id: number) =>
      set((state) => ({
        favoriteReposID: [...state.favoriteReposID, id],
      })),
    removeFavoriteRepo: (id: number) =>
      set((state) => ({
        favoriteReposID: state.favoriteReposID.filter((repo) => repo !== id),
      })),
  }),
  {
    name: "favoriteRepos",
  })
);
