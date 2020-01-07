import Taro, { Component } from '@tarojs/taro'
import {View, Text, Image, SwiperItem, Swiper} from '@tarojs/components'
import SwiperBlock from "../../../mall/components/swiper/swiper";
import './index.scss'

export default class Game extends Component {

  getDetail (cid){
    this.props.getCompetitionDetailFromMysqlAction(cid);
  }

  render () {
    return (
      <View className='gameBanner'>
        <View className='swiperWrapper'>
          <Swiper
            className='SwiperBanner'
            indicatorColor='red'
            indicatorActiveColor='white'
            interval={2000}
            circular
            indicatorDots
            autoplay>
            <SwiperItem>
              <Image className='swiper-img' src='http://gfcdn.coffeecdn.com/uploads/allimg/180118/3-1P11R1121c02.jpg'/>
            </SwiperItem>
            <SwiperItem>
              <Image className='swiper-img' src='http://5b0988e595225.cdn.sohucs.com/images/20181107/998dd5e5d65949579fa3e6ad9922ae47.jpeg'/>
            </SwiperItem>
            <SwiperItem>
              <Image className='swiper-img' src='http://t10.baidu.com/it/u=563068791,767981707&fm=173&app=25&f=JPEG?w=640&h=640&s=61B31BD5C411FBC64C105C2B0300B000'/>
            </SwiperItem>
          </Swiper>
        </View>
        <View className='contentWrapper'>
          {this.props.competition.map((item, index) =>
            <View className='contentBanner'  onClick={() => this.getDetail(item.cid)}>
              <View>
                <Text className='content'>{item.name}</Text>
              </View>
              <View>
                <Image className='cover' src={item.cover ? item.cover : "../../../../assets/images/game.jpg"} />
              </View>
            </View>
          )}

        </View>
      </View>
    )
  }

}
