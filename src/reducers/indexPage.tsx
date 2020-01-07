import {
  SHOW_SEARCHPAGE,
  HIDE_SEARCHPAGE,
  SWITCH_TABBAR,
  GET_HOT_ARTICLES,
  SET_INDEX_SEARCH_INPUT_VALUE,
  GET_INDEX_SEARCH_RESULT,
  UPDATE_SEARCH_HISTORY_STORAGE,
  GET_SEARCH_HISTORY_STORAGE,
  DELETE_SEARCH_HISTORY,
  SHOW_LOADING_BLOCK,
  HIDE_LOADING_BLOCK,
  GET_TOPIC_LIST,
  SWITCH_TOPIC_BAR,
  ADD_LIKE_AMOUNT,
  GET_DEVELOPMENT_DETAIL,
  GET_TOPIC_DEVELOPMENT,
  GET_ACTIVITY_DETAIL,
  GET_COMPETITION_DETAIL,
  GET_COMMENT,
  COLLECTION,
  COMPETITION,
  PARTY
} from '../constants/indexPage'

const INITIAL_STATE = {
  topBarList: [{
    id: 0,
    name: "热门",
    isSelected: true
  },{
    id: 1,
    name: "话题",
    isSelected: false
  },{
    id: 2,
    name: "聚会",
    isSelected: false
  },{
    id: 3,
    name: "比赛",
    isSelected: false
  },{
    id: 4,
    name: "咖啡论",
    isSelected: false
  }],
  searchPageStatus: false,
  selectedId: 0,
  articles: [],
  indexSearchInputValue: '',
  searchResult: [],
  searchHistory: [],
  loadingStatus: false,
  topicList: [],
  topicPassages: [],
  topicID: 0,
  activities: [],
  competition: [],
  passage: [],
  hotDetail: {},
  topicDevelopment: [],
  activityDetail: {},
  competitionDetail: {},
  isDevelopment: true,
  comment: [],
  competitionStatus: false,
  partyStatus: false,
  collectionStatus: false
};

export default function index (state = INITIAL_STATE, action) {
  switch (action.type) {
    case COMPETITION:
      return {
        ...state,
        competitionStatus: action.status
      };
    case COLLECTION:
      return {
        ...state,
        collectionStatus: action.status
      };
    case PARTY:
      return {
        ...state,
        partyStatus: action.status
      };
    case GET_HOT_ARTICLES:
      return {
        ...state,
        articles: action.value
      };
    case SHOW_SEARCHPAGE:
      return {
        ...state,
        searchPageStatus: action.status
      };
    case HIDE_SEARCHPAGE:
      return {
        ...state,
        searchPageStatus: action.status
      };
    case SWITCH_TABBAR:
      const topBarList0 = state.topBarList;
      topBarList0[action.id].isSelected = true;
      topBarList0[state.selectedId].isSelected = false;
      if (action.id == 2){
        return {
          ...state,
          topBarList: topBarList0,
          selectedId: action.id,
          activities: action.value
        };
      }
      if (action.id == 3){
        return {
          ...state,
          topBarList: topBarList0,
          selectedId: action.id,
          competition: action.value
        };
      }
      if (action.id == 4){
        return {
          ...state,
          topBarList: topBarList0,
          selectedId: action.id,
          passage: action.value
        };
      }
      if (action.id == 0){
        return {
          ...state,
          topBarList: topBarList0,
          selectedId: action.id,
          articles: action.value
        };
      }
      return {
        ...state,
        topBarList: topBarList0,
        selectedId: action.id,
      };
    case SET_INDEX_SEARCH_INPUT_VALUE:
      return {
        ...state,
        indexSearchInputValue: action.value
      };
    case GET_INDEX_SEARCH_RESULT:
      return {
        ...state,
        searchResult: action.value
      };
    case GET_SEARCH_HISTORY_STORAGE:
      return {
        ...state,
        searchHistory: action.value
      };
    case UPDATE_SEARCH_HISTORY_STORAGE:
      return {
        ...state,
        searchHistory: action.value
      };
    case DELETE_SEARCH_HISTORY:
      return {
        ...state,
        searchHistory: action.value
      };
    case SHOW_LOADING_BLOCK:
      return {
        ...state,
        loadingStatus: action.value
      };
    case HIDE_LOADING_BLOCK:
      return {
        ...state,
        loadingStatus: action.value
      };
    case GET_TOPIC_LIST:
      return {
        ...state,
        topicList: action.value
      };
    case SWITCH_TOPIC_BAR:
      return {
        ...state,
        topicID: action.value,
        topicPassages: action.passages
      };
    case ADD_LIKE_AMOUNT:
      return {
        ...state,
        articles: action.articles,
      };
    case GET_DEVELOPMENT_DETAIL:
      return {
        ...state,
        hotDetail: action.value,
        isDevelopment: true
      };
    case GET_TOPIC_DEVELOPMENT:
      return {
        ...state,
        topicDevelopment: action.value
      };
    case GET_ACTIVITY_DETAIL:
      return {
        ...state,
        activityDetail: action.value,
        isDevelopment: true
      };
    case GET_COMPETITION_DETAIL:
      return {
        ...state,
        competitionDetail: action.value,
        isDevelopment: false
      };
    case GET_COMMENT:
      return {
        ...state,
        comment: action.value
      };
    default:
      return state
  }
}
