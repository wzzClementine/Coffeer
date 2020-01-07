import {
  SET_PICKER_VALUE,
  SET_CLISt,
  SHOW_BAR
} from '../constants/clist'

// export const add = () => {
//   return {
//     type: ADD
//   }
// };

export const setPickerValue = (id) => ({
  type: SET_PICKER_VALUE,
  value: id
});

export const setClistValue = (result) => ({
  type: SET_CLISt,
  value: result
});

export const showBarAction = (value) => ({
  type: SHOW_BAR,
  value: value
});

// // 异步的 action
// export function asyncAdd () {
//   return dispatch => {
//     setTimeout(() => {
//       dispatch(add())
//     }, 2000)
//   }
// }
