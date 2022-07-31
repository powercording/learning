import { atom, selector } from "recoil";

export enum Categories {
  "TO_DO" = "TO_DO",
  "DOING" = "DOING",
  "DONE" = "DONE",
}

export interface ITodo {
  id: number;
  list: string;
  category: Categories;
}

export const toDoState = atom<ITodo[]>({
  key: "todo",
  default: [],
});
export const toDoCategory = atom<Categories>({
  key: "category",
  default: Categories.TO_DO,
});

export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const pulledState = get(toDoState);
    const pulledCate = get(toDoCategory);
    return pulledState.filter((item) => item.category === pulledCate);
  },
});
