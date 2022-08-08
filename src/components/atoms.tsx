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
export interface IDndState {
  [key: string]: ITodoTwo[];
}
export interface ITodoTwo {
  id: number;
  text: string;
}

export const dragDropState = atom<IDndState>({
  key: "dragDrop",
  default: {
    to_do: [
      { id: 3, text: "hello" },
      { id: 4, text: "myname is" },
    ],
    doing: [
      { id: 5, text: "no hello" },
      { id: 6, text: "bye" },
    ],
    done: [],
  },
});
