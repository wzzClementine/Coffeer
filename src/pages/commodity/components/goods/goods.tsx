import Taro, { Component } from '@tarojs/taro'
import {Image, Input, Radio, Swiper, SwiperItem, Text, View} from '@tarojs/components'
import Comment from "../comment/comment";
import './index.scss'


export default class Goods extends Component {

  render () {
    return (
        <View className='goodsWrapper'>
          <Swiper
            className='SwiperBanner'
            indicatorColor='red'
            indicatorActiveColor='white'
            interval={2000}
            circular
            indicatorDots
            autoplay>
            <SwiperItem>
              <Image className='swiper-img' src='../../../../assets/images/u451.png'/>
            </SwiperItem>
            <SwiperItem>
              <Image className='swiper-img' src='../../../../assets/images/u451.png'/>
            </SwiperItem>
            <SwiperItem>
              <Image className='swiper-img' src='../../../../assets/images/u451.png'/>
            </SwiperItem>
          </Swiper>
          <View className='detailWrapper'>
            <Text className='name'>
              illy意利意大利进口阿卡比卡意式浓缩中度烘焙黑咖啡粉250g罐装
            </Text>
            <View className='priceShare'>
              <View className='priceWrapper'>
                <Text className='price'>￥195</Text>
                <Text className='prePrice'>245</Text>
              </View>
              <View className='share'>
                <Image className='img' src='../../../../assets/images/u461.svg' />
                <Text>分享</Text>
              </View>
            </View>
            <View className='otherInfoWrapper'>
              <View><Text>累计销量 666</Text></View>
              <View><Text>由杭州保税区仓发货</Text></View>
            </View>
            <Comment />
            <View className='goodsDetailWrapper'>
              <View className='imgWrapper'><Image className='img' src='../../../../assets/images/u473.png' /></View>
              <View className='imgWrapper'><Image className='img' src='../../../../assets/images/u473.png' /></View>
            </View>
          </View>
        </View>
    )
  }

}
