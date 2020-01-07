import Taro, { Component, Config } from '@tarojs/taro'
import { connect } from '@tarojs/redux'
import {Image, View} from '@tarojs/components'
import SearchBar from '../../components/searchBar/searchBar'
import TopBar from './components/topBar/topBar'
import Content from './components/content/content'
import Topic from "./components/topic/topic";
import Game from "./components/competition/game";
import Party from "./components/party/party";
import SearchPage from "../../components/searchPage";
import Passage from "./components/passage/passage";
import './index.scss'
import {
  showSearchPageAction,
  hideSearchPageAction,
  switchTabBarAction,
  getHotArticlesAction,
  setIndexSearchInputValueAction,
  getSearchResult,
  getSearchHistoryAction,
  updateSearchHistoryAction,
  deleteSearchHistoryAction,
  showLoadingBlockAction,
  hideLoadingBlockAction,
  getTopicListFromMysqlAction,
  setTopicPassagesFromMysqlAction,
  addLikeAmountFromMysqlAction,
  getDevelopmentDetailFromMysqlAction,
  getTopicDevelopmentFromMysqlAction,
  getActivityDetailFromMysqlAction,
  getCompetitionDetailFromMysqlAction, changePartyStatusAction,
} from '../../actions/indexPage'

// @ts-ignore
@connect(({ index }) => ({
  index
}), (dispatch) => ({

  showSearchPageAction () {
    dispatch(showSearchPageAction())
  },

  hideSearchPageAction () {
    dispatch(hideSearchPageAction())
  },

  switchTabBarAction (id) {
    dispatch(switchTabBarAction(id))
  },

  getHotArticlesAction (articles) {
    dispatch(getHotArticlesAction(articles))
  },

  setIndexSearchInputValueAction (value) {
    dispatch(setIndexSearchInputValueAction(value))
  },

  getSearchResult (value) {
    dispatch(getSearchResult(value))
  },

  getSearchHistoryAction () {
    dispatch(getSearchHistoryAction())
  },

  updateSearchHistoryAction (storage, value) {
    dispatch(updateSearchHistoryAction(storage, value))
  },

  deleteSearchHistoryAction () {
    dispatch(deleteSearchHistoryAction())
  },

  showLoadingBlockAction () {
    dispatch(showLoadingBlockAction())
  },

  hideLoadingBlockAction () {
    dispatch(hideLoadingBlockAction())
  },

  getTopicListFromMysqlAction () {
    dispatch(getTopicListFromMysqlAction())
  },

  setTopicPassagesFromMysqlAction (id) {
    dispatch(setTopicPassagesFromMysqlAction(id))
  },

  addLikeAmountFromMysqlAction (id, articles, amount, target_id, type, user_id) {
    dispatch(addLikeAmountFromMysqlAction (id, articles, amount, target_id, type, user_id))
  },

  getDevelopmentDetailFromMysqlAction(did, type){
    dispatch(getDevelopmentDetailFromMysqlAction(did, type))
  },

  getTopicDevelopmentFromMysqlAction(topic){
    dispatch(getTopicDevelopmentFromMysqlAction(topic));
  },

  getActivityDetailFromMysqlAction(aid) {
    dispatch(getActivityDetailFromMysqlAction(aid));
  },

  getCompetitionDetailFromMysqlAction (cid) {
    dispatch(getCompetitionDetailFromMysqlAction (cid));
  },

  changePartyStatusAction(){
    dispatch(changePartyStatusAction())
  },

}))

class Index extends Component {
  config: Config = {
    navigationBarTitleText: '社区'
  };

  componentWillMount () {}

  componentDidMount () {

      if (!wx.cloud) {
        console.error('请使用 2.2.3 或以上的基础库以使用云能力')
      } else {
        wx.cloud.init({
          traceUser: true,
        })
      }

      // console.log(this);
      // 此处一定要更改this的指向问题，否则读取不到props
      const { getHotArticlesAction } = this.props;
      wx.cloud.callFunction({
        // 云函数名称
        name: 'mysql',
        // 传给云函数的参数
        data: {
          "type": 1
        },
        success: function(res) {
          console.log("hotArticles", res.result);
          let articles = res.result;
          getHotArticlesAction(articles);
        },
        fail: console.error
      })
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  navigateTo () {
    Taro.navigateTo({
      url: '/pages/write/write'
    })
  }

  render () {
    return (
        <View>
          {this.props.index.searchPageStatus ?
            <SearchPage hideSearchPageAction={this.props.hideSearchPageAction}
                        setIndexSearchInputValueAction={this.props.setIndexSearchInputValueAction}
                        getSearchResult={this.props.getSearchResult}
                        searchKeyWords={this.props.index.indexSearchInputValue}
                        searchHistory={this.props.index.searchHistory}
                        getSearchHistoryAction={this.props.getSearchHistoryAction}
                        updateSearchHistoryAction={this.props.updateSearchHistoryAction}
                        deleteSearchHistoryAction={this.props.deleteSearchHistoryAction}
                        showLoadingBlockAction={this.props.showLoadingBlockAction}
                        hideLoadingBlockAction={this.props.hideLoadingBlockAction}
                        loadingStatus={this.props.index.loadingStatus}
            /> : null}
          {this.props.index.searchPageStatus ? null :
            <View className='back'>
              <View className='searchWrapper' onClick={this.props.showSearchPageAction}>
                <View className='searchBanner'>
                  <SearchBar />
                </View>
                <Image onClick={this.navigateTo} className='img' src='../../assets/images/u769.svg' />
              </View>
              <View className='indexWrapper'>
                <TopBar topBarList={this.props.index.topBarList} switchTabBarAction={this.props.switchTabBarAction}/>
                {this.props.index.topBarList[0].isSelected ?
                  <Content articles={this.props.index.articles}
                           topBarList={this.props.index.topBarList}
                           addLikeAmountFromMysqlAction={this.props.addLikeAmountFromMysqlAction}
                           getDevelopmentDetailFromMysqlAction={this.props.getDevelopmentDetailFromMysqlAction}
                  /> : null
                }
                {this.props.index.topBarList[1].isSelected ?
                  <Topic getTopicListFromMysqlAction={this.props.getTopicListFromMysqlAction}
                         topicList={this.props.index.topicList}
                         setTopicPassagesFromMysqlAction={this.props.setTopicPassagesFromMysqlAction}
                         topicPassages={this.props.index.topicPassages}
                         topicID={this.props.index.topicID}
                         getTopicDevelopmentFromMysqlAction={this.props.getTopicDevelopmentFromMysqlAction}
                  /> : null
                }
                {this.props.index.topBarList[3].isSelected ?
                  <Game competition={this.props.index.competition}
                        getCompetitionDetailFromMysqlAction={this.props.getCompetitionDetailFromMysqlAction}
                  /> : null
                }
                {this.props.index.topBarList[2].isSelected ?
                  <Party activities={this.props.index.activities}
                         getActivityDetailFromMysqlAction={this.props.getActivityDetailFromMysqlAction}
                         changePartyStatusAction={this.props.changePartyStatusAction}
                         partyStatus={this.props.index.partyStatus}
                  /> : null
                }
                {this.props.index.topBarList[4].isSelected ?
                  <Passage passage={this.props.index.passage}
                           topBarList={this.props.index.topBarList}
                  /> : null
                }
              </View>
          </View>}
        </View>
    )
  }

}

export default Index
