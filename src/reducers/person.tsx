import { ADD, MINUS } from '../constants/person'

const INITIAL_STATE = {
  specialLabel: {id: 0, label: "我的咖啡杯", imgUrl: "../../../../assets/images/u462.png"},
  labelList: [{
    id: 1,
    label: "我的收藏",
    imgUrl: "../../../../assets/images/u464.svg"
  },{
    id: 2,
    label: "我的订单",
    imgUrl: "../../../../assets/images/u470.svg"
  },{
    id: 3,
    label: "优惠券",
    imgUrl: "../../../../assets/images/u474.svg"
  },{
    id: 4,
    label: "收货地址",
    imgUrl: "../../../../assets/images/u481.svg"
  }]
};

export default function person (state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD:
      return {
        ...state,
      };
    case MINUS:
      return {
        ...state,
      };
    default:
      return state
  }
}
