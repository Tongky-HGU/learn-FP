const makeObject = (key, val) => {
  const obj = {};
  obj[key] = val;
  return obj;
};

const match = (obj, obj2) => {
  console.log(obj, obj2);
  for (let key in obj2) {
    if (obj[key] !== obj2[key]) return false;
  }
  return true;
};

// 화살표함수는 arguments가 없다.
function bmatch(obj2, val) {
  if (arguments.length === 2) obj2 = makeObject(obj2, val);
  return (obj) => match(obj, obj2);
}

export default bmatch;
