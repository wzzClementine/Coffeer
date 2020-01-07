import {
  SHOW_SEARCHPAGE,
  HIDE_SEARCHPAGE,
  SWITCH_TABBAR,
  GET_HOT_ARTICLES,
  GET_COMPETITION_ARTICLES,
  SET_INDEX_SEARCH_INPUT_VALUE,
  GET_INDEX_SEARCH_RESULT,
  UPDATE_SEARCH_HISTORY_STORAGE,
  GET_SEARCH_HISTORY_STORAGE,
  DELETE_SEARCH_HISTORY,
  SHOW_LOADING_BLOCK,
  HIDE_LOADING_BLOCK,
  GET_TOPIC_LIST,
  SWITCH_TOPIC_BAR,
  GET_ACTIVITIES,
  ADD_LIKE_AMOUNT,
  CANCEL_LIKE_AMOUNT,
  GET_DEVELOPMENT_DETAIL,
  GET_TOPIC_DEVELOPMENT,
  GET_ACTIVITY_DETAIL,
  GET_COMPETITION_DETAIL,
  GET_COMMENT,
  COLLECTION,
  COMPETITION,
  PARTY
} from '../constants/indexPage'
import Taro from "@tarojs/taro";

export const showSearchPageAction = () => {
  return {
    type: SHOW_SEARCHPAGE,
    status: true
  }
};

export const changeCompetitionStatusAction = () => {
  return {
    type: COMPETITION,
    status: true
  }
};

export const changePartyStatusAction = () => {
  return {
    type: PARTY,
    status: true
  }
};

export const changeCollectionStatusAction = () => {
  return {
    type: COLLECTION,
    status: true
  }
};

export const hideSearchPageAction = () => {
  return {
    type: HIDE_SEARCHPAGE,
    status: false
  }
};

export const getHotArticlesAction = (articles) => {
  return {
    type: GET_HOT_ARTICLES,
    value: articles
  }
};

export const setArticlesAction = (id, articles) => {
  return {
    type: SWITCH_TABBAR,
    id: id,
    value: articles
  }
};

export const getCompetitionArticles = (articles) =>{
  return {
    type: GET_COMPETITION_ARTICLES,
    value: articles
  }
};

export const setIndexSearchInputValueAction = (value) => {
  return {
    type: SET_INDEX_SEARCH_INPUT_VALUE,
    value: value
  }
};

export const getIndexSearchResult = (value) => {
  return {
    type: GET_INDEX_SEARCH_RESULT,
    value: value
  }
};

export const updateSearchHistoryStorageAction = (storage) => {
  let newStorage = storage.split("&");
  return {
    type: UPDATE_SEARCH_HISTORY_STORAGE,
    value: newStorage
  }
};

export const getSearchHistoryStorageAction = (value) => {
  let storage = value.split(",");
  return {
    type: GET_SEARCH_HISTORY_STORAGE,
    value: storage
  }
};

export const deleteSearchHistoryAction = () => {
  return {
    type: DELETE_SEARCH_HISTORY,
    value: []
  }
};

export const showLoadingBlockAction = () => {
  return {
    type: SHOW_LOADING_BLOCK,
    value: true
  }
};

export const hideLoadingBlockAction = () => {
  return {
    type: HIDE_LOADING_BLOCK,
    value: false
  }
};

export const getTopicListAction = (value) => {
  return {
    type: GET_TOPIC_LIST,
    value: value
  }
};

export const switchTopicBarAction = (id, passages) => {
  return {
    type: SWITCH_TOPIC_BAR,
    value: id,
    passages: passages
  }
};

export const addLikeAmountAction = (id, amount, articles) => {
  let newArticles = articles;
  newArticles[id].amount = amount+1;
  return {
    type: ADD_LIKE_AMOUNT,
    value: id,
    amount: amount+1,
    articles: newArticles
  }
};

export const cancelLikeAmountAction = (id, amount) => {
  return {
    type: CANCEL_LIKE_AMOUNT,
    value: id,
    amount: amount-1
  }
};

export const getDevelopmentDetailAction = (detail) => {
  return {
    type: GET_DEVELOPMENT_DETAIL,
    value: detail
  }
};

export const getTopicDevelopmentAction = (detail) => {
  return {
    type: GET_TOPIC_DEVELOPMENT,
    value: detail
  }
};

export const getActivityDetailAction = (detail) => {
  return {
    type:GET_ACTIVITY_DETAIL,
    value: detail
  }
};

export const getCompetitionDetailAction = (detail) => {
  return {
    type: GET_COMPETITION_DETAIL,
    value: detail
  }
};

export const getCommentAction = (detail) => {
  return {
    type: GET_COMMENT,
    value: detail
  }
};

// 异步的 action
export function getCommentFromMysqlAction (target_id) {
  return dispatch => {

    console.log("getComment");
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        traceUser: true,
      })
    }

    wx.cloud.callFunction({
      // 云函数名称
      name: 'getComment',
      // 传给云函数的参数
      data: {
        "target_id": target_id
      },
      success: function(res) {
        console.log(res.result);
        dispatch(getCommentAction(res.result));
        // Taro.navigateTo({
        //   url: '/pages/competition/competition'
        // })
      },
      fail: console.error
    })
  }
}

// 异步的 action
export function getCompetitionDetailFromMysqlAction (cid) {
  return dispatch => {

    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        traceUser: true,
      })
    }

    wx.cloud.callFunction({
      // 云函数名称
      name: 'getCompetitionDetail',
      // 传给云函数的参数
      data: {
        "cid": cid
      },
      success: function(res) {
        console.log(res.result);
        dispatch(getCompetitionDetailAction(res.result));
        Taro.navigateTo({
          url: '/pages/competition/competition'
        })
      },
      fail: console.error
    })
  }
}

// 异步的 action
export function getActivityDetailFromMysqlAction (aid) {
  return dispatch => {

    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        traceUser: true,
      })
    }

    wx.cloud.callFunction({
      // 云函数名称
      name: 'getActivityDetail',
      // 传给云函数的参数
      data: {
        "aid": aid
      },
      success: function(res) {
        console.log(res.result);
        dispatch(getActivityDetailAction(res.result[0]));
        Taro.navigateTo({
          url: '/pages/activity/activity'
        })
      },
      fail: console.error
    })
  }
}

// 异步的 action
export function getTopicDevelopmentFromMysqlAction (topic) {
  return dispatch => {

    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        traceUser: true,
      })
    }

    wx.cloud.callFunction({
      // 云函数名称
      name: 'getTopicDevelopment',
      // 传给云函数的参数
      data: {
        "topic": topic
      },
      success: function(res) {
        console.log(res.result);
        dispatch(getTopicDevelopmentAction(res.result));
        Taro.navigateTo({
          url: '/pages/topic/topic'
        })
      },
      fail: console.error
    })
  }
}

// 异步的 action
export function getDevelopmentDetailFromMysqlAction (did, type) {
  return dispatch => {

    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        traceUser: true,
      })
    }

    wx.cloud.callFunction({
      // 云函数名称
      name: 'getDevelopmentDetail',
      // 传给云函数的参数
      data: {
        "did": did,
        "type": type
      },
      success: function(res) {
        console.log(res);
        dispatch(getCommentFromMysqlAction(did));
        dispatch(getDevelopmentDetailAction(res.result));
        Taro.navigateTo({
          url: '/pages/detail/detail'
        })
      },
      fail: console.error
    })
  }
}

// 异步的 action
export function addLikeAmountFromMysqlAction (id, articles, amount, target_id, type, user_id) {
  return dispatch => {

    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        traceUser: true,
      })
    }

    wx.cloud.callFunction({
      // 云函数名称
      name: 'likeAmountUpdate',
      // 传给云函数的参数
      data: {
        "target_id": target_id,
        "type": type,
        "user_id": user_id
      },
      success: function(res) {
        console.log(res.result);
        dispatch(addLikeAmountAction(id, amount, articles))
      },
      fail: console.error
    })
  }
}


// 异步的 action
export function getTopicListFromMysqlAction () {
  return dispatch => {

    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        traceUser: true,
      })
    }

    wx.cloud.callFunction({
      // 云函数名称
      name: 'topicList',
      // 传给云函数的参数
      data: {

      },
      success: function(res) {
        console.log(res.result);
        dispatch(getTopicListAction(res.result))
      },
      fail: console.error
    })
  }
}

export function getSearchHistoryAction () {
  return dispatch => {
    Taro.getStorage({ key: 'searchHistory' })
      .then(res => {
          if(res.data){
            dispatch(getSearchHistoryStorageAction(res.data));
          }
      }
      )
  }
}

export function updateSearchHistoryAction (storage, value) {
  return dispatch => {
    if (storage.length == 0){
      let newStorage = value;
      Taro.setStorage({ key: 'searchHistory', data: newStorage })
        .then(res =>
          dispatch(updateSearchHistoryStorageAction(res.data))
        )
    }else if (storage.length >=1 ){
      let newStorage = storage + "," + value;
      Taro.setStorage({ key: 'searchHistory', data: newStorage })
        .then(res =>
          dispatch(updateSearchHistoryStorageAction(res.data))
        )
    }
  }
}

// 异步的 action
export function switchTabBarAction (id) {
  return dispatch => {
    let name = "";
    if (id == 2){
      name = "getActivities";
    }else if(id == 0) {
      name = "mysql";
    }else if(id == 3) {
      name = 'competition'
    }else if (id == 4) {
      name = 'passage'
    }else if (id == 1){
      dispatch(setArticlesAction(id, []));
    }
    if(id != 1){
      if (!wx.cloud) {
        console.error('请使用 2.2.3 或以上的基础库以使用云能力')
      } else {
        wx.cloud.init({
          traceUser: true,
        })
      }

      wx.cloud.callFunction({
        // 云函数名称
        name: name,
        // 传给云函数的参数
        data: {

        },
        success: function(res) {
          console.log(res.result);
          dispatch(setArticlesAction(id, res.result))
        },
        fail: console.error
      })
    }
  }
}

// 异步的 action
export function getSearchResult (value) {
  return dispatch => {
    // dispatch(hideSearchPageAction());
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        traceUser: true,
      })
    }

    wx.cloud.callFunction({
      // 云函数名称
      name: 'getIndexSearchResult',
      // 传给云函数的参数
      data: {
        "result": value
      },
      success: function(res) {
        console.log("result", res.result);
        dispatch(getIndexSearchResult(res.result));
        Taro.navigateTo({
          url: '/pages/sresult/sresult'
        })
      },
      fail: console.error
    })
  }
}

// 异步的 action
export function setTopicPassagesFromMysqlAction (id) {
  return dispatch => {
    let id1 = parseInt(id);
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        traceUser: true,
      })
    }

    wx.cloud.callFunction({
      // 云函数名称
      name: 'getTopicPassages',
      // 传给云函数的参数
      data: {
        "topic": id1+1
      },
      success: function(res) {
        console.log(res.result);
        dispatch(switchTopicBarAction(id, res.result))
      },
      fail: console.error
    })
  }
}
