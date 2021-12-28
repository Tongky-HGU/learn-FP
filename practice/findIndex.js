const findIndex = (list, predicate) => {
  for (let i = 0; i < list.length; i++) {
    if (predicate(list[i])) return i;
  }
  return -1;
};

export default findIndex;
