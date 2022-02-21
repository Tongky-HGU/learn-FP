import { isArrayLike } from "./utils";

const map = (data, iteratee) => {
  const newList = [];
  if (isArrayLike(list)) {
    for (let i = 0; i < data.length; i++) {
      newList.push(iteratee(data[i], i, data));
    }
  } else {
    for (let key in data) {
      if (data.hasOwnProperty(key))
        newList.push(iteratee(data[key], key, data));
    }
  }
  return newList;
};

export default map;
