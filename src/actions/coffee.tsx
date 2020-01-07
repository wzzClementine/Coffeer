import {
  HIDE_SELECTORITEM_ITEMS,
  SHOW_SELECTORITEM_ITEMS,
  SHOW_SELECTORITEM,
  HIDE_SELECTORITEM,
  GET_LOCATION_LIST,
  SHOW_IMAGE,
  GET_LABEL_LIST,
  ADD_AMOUNT,
  SUBTRACT_AMOUNT
} from '../constants/coffee'

// export const add = () => {
//   return {
//     type: ADD
//   }
// };
export const hideSelectorItemAction = (fatherID) => ({
  type: HIDE_SELECTORITEM,
  value: false,
  fatherID: fatherID
});

export const showSelectorItemAction = (fatherID) => ({
  type: SHOW_SELECTORITEM,
  value: true,
  fatherID: fatherID
});

export const hideSelectorItemItemsAction = (fatherID, childID) => ({
  type: HIDE_SELECTORITEM_ITEMS,
  value: false,
  fatherID: fatherID,
  childID: childID
});

export const showSelectorItemItemsAction = (fatherID, childID) => ({
  type: SHOW_SELECTORITEM_ITEMS,
  value: true,
  fatherID: fatherID,
  childID: childID
});

export const showImageAction = (path) => ({
  type: SHOW_IMAGE,
  path: path
});

export const getLocationListAction = (locationList, location) => ({
  type: GET_LOCATION_LIST,
  location: location,
  locationList: locationList
});

export const getLabelListAction = (labelList, label) => ({
  type: GET_LABEL_LIST,
  label: label,
  labelList: labelList
});

export const subtractAmountAction = (currentID, fatherID, TopID, currentAmount) => ({
  type: SUBTRACT_AMOUNT,
  currentID: currentID,
  fatherID: fatherID,
  TopID: TopID,
  amount: currentAmount - 5
});

export const addAmountAction = (currentID, fatherID, TopID, currentAmount) => ({
  type: ADD_AMOUNT,
  currentID: currentID,
  fatherID: fatherID,
  TopID: TopID,
  amount: currentAmount + 5
});

