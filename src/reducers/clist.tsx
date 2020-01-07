import {
  SET_PICKER_VALUE,
  SET_CLISt,
  SHOW_BAR
} from '../constants/clist'

const INITIAL_STATE = {
  num: 2,
  selectedList: ["所有咖啡", "最近制作", "常见咖啡", "人气推荐", "大师甄选"],
  defaultSelected: "常见咖啡",
  clist: [],
  isShow: false
};

export default function clist (state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_CLISt:
      return {
        ...state,
        clist: action.value
      };
    case SET_PICKER_VALUE:
      return {
        ...state,
        defaultSelected: state.selectedList[action.value],
        num: action.value
      };
    case SHOW_BAR:
      return {
        ...state,
        isShow: action.value
      };
    default:
      return state
  }
}
