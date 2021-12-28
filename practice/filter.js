const filter = (list, predicate) => {
  const newList = [];
  for (let i = 0; i < list.length; i++) {
    if (predicate(list[i], i, list)) newList.push(list[i]);
  }
  return newList;
};

export default filter;
