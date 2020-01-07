import Taro, { Component, Config } from '@tarojs/taro'
import { connect } from '@tarojs/redux'
import {View, Image} from '@tarojs/components'
import SearchBar from '../../components/searchBar/searchBar'
import Goods from './components/goods/goods'
import NavigatorBlock from './components/navigator/navigator'
import SwiperBlock from './components/swiper/swiper'
import './index.scss'
import { add, minus, asyncAdd } from '../../actions/mall'

// @ts-ignore
@connect(({ mall }) => ({
  mall
}), (dispatch) => ({
  add () {
    dispatch(add())
  },
  dec () {
    dispatch(minus())
  },
  asyncAdd () {
    dispatch(asyncAdd())
  }
}))

class Mall extends Component {

  config: Config = {
    navigationBarTitleText: '咖啡商城'
  };

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  navigateTo () {
    Taro.navigateTo({
      url: '/pages/cart/cart'
    })
  }

  render () {
    return (
      <View className='mallWrapper'>
        <View className='searchWrapper'>
          <View className='searchBanner'><SearchBar /></View>
          <Image onClick={this.navigateTo} className='img' src='../../assets/images/u224.svg' />
        </View>
        <SwiperBlock />
        <NavigatorBlock navigatorList={this.props.mall.navigatorList}/>
        <Goods />
      </View>
    )
  }
}

export default Mall
