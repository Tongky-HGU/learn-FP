import compose from "./compose";
import find from "./find";
import identity from "./identity";
import not from "./not";

const positive = (list) => find(list, identity);

const some = compose(not, not, positive);

export default some;
