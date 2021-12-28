const map = (list, iteratee) => {
  const newList = [];
  for (let i = 0; i < list.length; i++) {
    newList.push(iteratee(list[i], i, list));
  }
  return newList;
};

export default map;
