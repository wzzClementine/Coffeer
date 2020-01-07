import {
  HIDE_SELECTORITEM_ITEMS,
  SHOW_SELECTORITEM_ITEMS,
  HIDE_SELECTORITEM,
  SHOW_SELECTORITEM,
  SHOW_IMAGE,
  GET_LOCATION_LIST,
  GET_LABEL_LIST,
  ADD_AMOUNT,
  SUBTRACT_AMOUNT
} from '../constants/coffee'

const INITIAL_STATE = {
 coffeeList: [
   {
     id: 1,
     title: "添加原料",
     status: true,
     options: [
       {
         id: 11,
         name: "咖啡基底",
         status: true,
         material: [
           {
             id: 111,
             name: "浓缩咖啡Espresso",
             amount: 50,
             unit: "%"
           },
           {
             id: 112,
             name: "冰美式Americano",
             amount: 30,
             unit: "%"
           },
           {
             id: 113,
             name: "牛奶咖啡Milk Coffee",
             amount: 25,
             unit: "%"
           },
           {
             id: 114,
             name: "阿芙佳朵Affogato",
             amount: 45,
             unit: "%"
           },
           {
             id: 115,
             name: "苏打咖啡Soda Coffee",
             amount: 15,
             unit: "%"
           }
         ]
       },{
         id: 12,
         name: "奶制品",
         status: true,
         material: [
           {
             id: 121,
             name: "全脂牛奶",
             amount: 15,
             unit: "%"
           },{
             id: 122,
             name: "脱脂牛奶",
             amount: 20,
             unit: "%"
           },{
             id: 123,
             name: "豆奶",
             amount:25,
             unit: "%"
           },
         ]
       },{
         id: 13,
         name: "糖浆",
         status: true,
         material: [
           {
             id: 131,
             name: "黄糖",
             amount: 10,
             unit: "%"
           },{
             id: 132,
             name: "白糖",
             amount: 40,
             unit: "%"
           },{
             id: 133,
             name: "方糖",
             amount: 20,
             unit: "%"
           },
         ]
       }
     ]
   },{
     id: 2,
     title: "添加工序",
     status: true,
     options: [
       {
         id: 21,
         name: "加热",
         status: true,
         material: [
           {
             id: 211,
             name: "加热温度",
             amount: 76,
             unit: "℃"
           }
         ]
       },
       {
         id: 21,
         name: "研磨",
         status: true,
         material: [
           {
             id: 211,
             name: "研磨时间",
             amount: 25,
             unit: "min"
           }
         ]
       },
       {
         id: 21,
         name: "加水",
         status: true,
         material: [
           {
             id: 211,
             name: "纯净水含量",
             amount: 300,
             unit: "ml"
           }
         ]
       },
       {
         id: 21,
         name: "冷藏",
         status: true,
         material: [
           {
             id: 211,
             name: "冷藏时间",
             amount: 50,
             unit: "min"
           },
           {
             id: 211,
             name: "冷藏温度",
             amount: 50,
             unit: "℃"
           }
         ]
       }
     ]
   },
 ],
  pickerValue: ["自制咖啡", "不加糖", "不加奶", "环保", "DIY", "健康", "烘焙"],
  defaultSelected: "自制咖啡",
  selectedValue: ["自制咖啡"],
  defaultLocation: "重庆市沙坪坝区重庆大学A区",
  defaultImage: "../../../../assets/images/imageAdd.png",
  imageList: [],
  locationList: []
};

export default function person (state = INITIAL_STATE, action) {
  switch (action.type) {
    case SHOW_IMAGE:
      return {
        ...state,
        imageList: action.path
      };
    case SUBTRACT_AMOUNT:
      const coffeeList4 = state.coffeeList;
      coffeeList4[action.TopID].options[action.fatherID].material[action.currentID].amount = action.amount;
      return {
        ...state,
        coffeeList: coffeeList4
      };
    case ADD_AMOUNT:
      const coffeeList5 = state.coffeeList;
      coffeeList5[action.TopID].options[action.fatherID].material[action.currentID].amount = action.amount;
      return {
        ...state,
        coffeeList: coffeeList5
      };
    case GET_LABEL_LIST:
      const labelList0 = action.labelList;
      const value = state.pickerValue[action.label];
      labelList0.unshift(value);
      return {
        ...state,
        selectedValue: labelList0
      };
    case GET_LOCATION_LIST:
      const location0 = action.locationList;
      location0.unshift(action.location);
      return {
        ...state,
        locationList: location0
      };
    case HIDE_SELECTORITEM_ITEMS:
      const coffeeList0 = state.coffeeList;
      coffeeList0[action.fatherID].options[action.childID].status = action.value;
      return {
        ...state,
        coffeeList: coffeeList0
      };
    case SHOW_SELECTORITEM_ITEMS:
      const coffeeList1 = state.coffeeList;
      coffeeList1[action.fatherID].options[action.childID].status = action.value;
      return {
        ...state,
        coffeeList: coffeeList1
      };
    case SHOW_SELECTORITEM:
      const coffeeList2 = state.coffeeList;
      coffeeList2[action.fatherID].status = action.value;
      return {
        ...state,
        coffeeList: coffeeList2
      };
    case HIDE_SELECTORITEM:
      const coffeeList3 = state.coffeeList;
      coffeeList3[action.fatherID].status = action.value;
      return {
        ...state,
        coffeeList: coffeeList3
      };
    default:
      return state
  }
}
