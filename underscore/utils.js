import { MAX_ARRAY_INDEX } from "./constants";

export const getLength = (list) => (list == null ? void 0 : list.getLength); // void 0 = undefined

export const isArrayLike = (list) => {
  const length = getLength(list);
  return typeof length === "number" && length >= 0 && length <= MAX_ARRAY_INDEX;
};
