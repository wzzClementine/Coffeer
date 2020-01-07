import Taro, { Component } from '@tarojs/taro'
import {View, Text, Image} from '@tarojs/components'
import SearchBar from "../searchBar/searchBar";
import './index.scss'

export default class SearchPage extends Component {

  componentDidMount (){
    this.props.getSearchHistoryAction();
  }

  deleteHistory (){
    Taro.removeStorage({ key: 'searchHistory' })
      .then(res =>  this.props.deleteSearchHistoryAction());
  }

  render () {
    return (
        <View>
          <View className='searchWrapper'>
            <View className='searchBanner'>
              <SearchBar setIndexSearchInputValueAction={this.props.setIndexSearchInputValueAction}
                         getSearchResult={this.props.getSearchResult}
                         searchKeyWords={this.props.searchKeyWords}
                         searchHistory={this.props.searchHistory}
                         updateSearchHistoryAction={this.props.updateSearchHistoryAction}
                         showLoadingBlockAction={this.props.showLoadingBlockAction}
              />
            </View>
            <Text className='cancelBtn' onClick={this.props.hideSearchPageAction}>取消</Text>
          </View>
          {this.props.loadingStatus ?
            <View className='loading'>
              <Text>正在加载中...</Text>
            </View> : null
          }
          {this.props.loadingStatus ?
            null :
            <View>
              <View className='searchContentWrapper'>
                <View className='titleWrapper'>
                  <Text className='title'>搜索记录</Text>
                  <Image onClick={this.deleteHistory} className='img' src='../../assets/images/delete.svg' />
                </View>
                <View className='searchItemWrapper'>
                  {this.props.searchHistory.map((item, index) =>
                    <View className='searchItem'>
                      <Text>{item}</Text>
                    </View>
                  )}
                </View>
              </View>


              <View className='searchContentWrapper'>
                <Text className='title'>热门搜索</Text>
                <View className='searchItemWrapper'>
                  <View className='searchItem'>
                    <Text>广州咖啡聚会</Text>
                  </View>
                  <View className='searchItem'>
                    <Text>广州咖啡</Text>
                  </View>
                  <View className='searchItem'>
                    <Text>聚会</Text>
                  </View>
                  <View className='searchItem'>
                    <Text>广州咖啡</Text>
                  </View>
                  <View className='searchItem'>
                    <Text>广州咖啡聚会大型活动</Text>
                  </View>
                </View>
              </View>
            </View>
          }

        </View>
    )
  }
}
