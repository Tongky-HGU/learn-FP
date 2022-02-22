import map from "./map.js";
import identity from "./identity.js";

const values = (list) => {
  return map(list, identity);
};

export default values;
