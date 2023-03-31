import thunk from "redux-thunk";
import basketReducer from "./basket/basketReducer";

const { combineReducers, createStore, applyMiddleware } = require("redux");
const { default: MealsReducer } = require("./meals/MealsReducer");

const rootReducer = combineReducers({
  meals: MealsReducer,
  basket: basketReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
