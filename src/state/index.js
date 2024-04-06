import { createStore } from "redux";
import inkGame, { INITIAL_STATE } from "./reducers";
export default createStore(inkGame, INITIAL_STATE);