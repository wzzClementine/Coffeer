import Taro, { Component } from '@tarojs/taro'
import {Image, Swiper, SwiperItem} from '@tarojs/components'
import './index.scss'

export default class SwiperBlock extends Component {

  render () {
    return (
          <Swiper
            className='SwiperBanner'
            indicatorColor='red'
            indicatorActiveColor='white'
            interval={2000}
            circular
            indicatorDots
            autoplay>
            <SwiperItem>
              <Image className='swiper-img' src='https://www.starbucks.com.cn/assets/images/featured/2019xmas/kv-wave2.jpg'/>
            </SwiperItem>
            <SwiperItem>
              <Image className='swiper-img' src='https://www.starbucks.com.cn/assets/images/featured/2019xmas/kv-food.jpg'/>
            </SwiperItem>
            <SwiperItem>
              <Image className='swiper-img' src='https://www.starbucks.com.cn/assets/images/featured/2019xmas/kv-coffee.jpg'/>
            </SwiperItem>
          </Swiper>
    )
  }

}
