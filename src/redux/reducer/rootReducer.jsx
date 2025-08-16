import { combineReducers} from "redux";
import { movieReducer } from "./movieReduce";
export const rootReducer = combineReducers({
  movieReducer: movieReducer,
});
