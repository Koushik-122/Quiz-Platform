import rootReducer from "./reducer/indexreducer"
import { legacy_createStore as createStore } from "redux";

const store = createStore(rootReducer);

export default store;