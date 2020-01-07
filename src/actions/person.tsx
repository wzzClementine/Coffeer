import {
  ADD,
  MINUS
} from '../constants/person'

export const add = () => {
  return {
    type: ADD
  }
};
export const minus = () => {
  return {
    type: MINUS
  }
};

// 异步的 action
export function asyncAdd () {
  return dispatch => {
    setTimeout(() => {
      dispatch(add())
    }, 2000)
  }
}
