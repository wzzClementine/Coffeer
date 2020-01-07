import Taro, { Component, Config } from '@tarojs/taro'
import { connect } from '@tarojs/redux'
import {Image, View} from '@tarojs/components'
import SearchBar from '../../components/searchBar/searchBar'
import Content from "../index/components/content/content";
import SearchPage from "../../components/searchPage";
import './index.scss'
import { showSearchPageAction,
  hideSearchPageAction,
  switchTabBarAction,
  getHotArticlesAction,
  setIndexSearchInputValueAction,
  getSearchResult,
  getSearchHistoryAction,
  updateSearchHistoryAction,
  deleteSearchHistoryAction,
  showLoadingBlockAction,
  hideLoadingBlockAction
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
  }

}))

class Sresult extends Component {

  config: Config = {
    navigationBarTitleText: '搜索结果'
  };

  componentWillMount () {}

  componentDidMount () {
    this.props.hideSearchPageAction();
    this.props.hideLoadingBlockAction();
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

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
              <Content articles={this.props.index.searchResult} />
            </View>
          </View>}
      </View>
    )
  }

}

export default Sresult
