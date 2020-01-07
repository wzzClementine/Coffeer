import Taro, { Component } from '@tarojs/taro'
import { View, Input, Image } from '@tarojs/components'
import './index.scss'

export default class SearchBar extends Component {

  getInputValue (e){
    console.log(e.currentTarget.value);
    let result = e.currentTarget.value;
    if (result != ""){
      this.props.setIndexSearchInputValueAction(result);
    }
  }

  getSearchResult () {
    this.props.showLoadingBlockAction();
    this.props.getSearchResult(this.props.searchKeyWords);
    this.props.updateSearchHistoryAction(this.props.searchHistory, this.props.searchKeyWords);
  }

  render () {
    return (
      <View className='searchBanner'>
        <Image className='img' src='../../assets/images/u145.png'/>
        <Input className='searchInput'
               placeholder='今日推荐内容'
               type="text"
               confirmType="search"
               onInput={this.getInputValue}
               onConfirm={this.getSearchResult}
        />
      </View>
    )
  }

}
