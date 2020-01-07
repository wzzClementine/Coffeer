import { ADD, MINUS } from '../constants/mall'

const INITIAL_STATE = {
  num: 0,
  navigatorList: [{
    id: 0,
    name: "速溶咖啡",
    imgUrl: "../../../../assets/images/u242.png",
  },{
    id: 1,
    name: "咖啡杯",
    imgUrl: "../../../../assets/images/u250.jpg",
  },{
    id: 2,
    name: "咖啡机",
    imgUrl: "../../../../assets/images/u246.jpg",
  },{
    id: 3,
    name: "咖啡豆",
    imgUrl: "../../../../assets/images/u238.jpg",
  }],
};

export default function mall (state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        num: state.num + 1
      };
    case MINUS:
      return {
        ...state,
        num: state.num - 1
      };
    default:
      return state
  }
}
