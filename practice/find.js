const find = (list, predicate) => {
  for (let i = 0; i < list.length; i++) {
    if (predicate(list[i])) return list[i];
  }
};

export default find;
