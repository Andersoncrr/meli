import { State } from "@/types/items";

export const status = (state: State): string => {
  const states = {
    new: "Nuevo",
    used: "Usado",
  } as const;

  return states[state];
};
