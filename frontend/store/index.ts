import { createStore, combineReducers } from "redux";

import blocks from "./blocks";

const store = createStore(
    combineReducers({
        blocks: blocks,
    })
);

export default store;
