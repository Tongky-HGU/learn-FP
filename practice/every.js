import beq from "./beq";
import compose from "./compose";
import findIndex from "./findIndex";
import not from "./not";

const negativeIndex = (list) => findIndex(list, not);

const every = compose(beq(-1), negativeIndex);

export default every;
