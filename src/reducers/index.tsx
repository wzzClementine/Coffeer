import { combineReducers } from 'redux'
import clist from "./clist";
import index from "./indexPage";
import person from "./person";
import mall from "./mall";
import coffee from "./coffee";

export default combineReducers({
  clist,
  index,
  person,
  mall,
  coffee
});
