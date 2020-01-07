import Taro, { Component } from '@tarojs/taro'
import {Image, Text, View} from '@tarojs/components'
import './index.scss'

export default class Goods extends Component {

  navigateTo () {
    Taro.navigateTo({
      url: '/pages/commodity/commodity'
    })
  }

  render () {
    return (
        <View>
          <View className='titleWrapper'>
            <Text>选购指南</Text>
          </View>

          <View className='goodsWrapper'>
            <View className='leaderWrapper'>
              <View className='leaderLeft'>
                <Text className='textTop'>下午茶怎能没有拉花咖啡?</Text>
                <Text className='textMiddle'>拉花咖啡材料制作攻略</Text>
                <View className='btnWrapper'><Text className='textBottom'>查看更多 ></Text></View>
                {/*<Image className='img' src='../../../../assets/images/u254.svg' />*/}
              </View>
              <View className='leaderRight'>
                <Image className='img' src='../../../../assets/images/u279.png' />
              </View>
            </View>
            <View className='goodsListWrapper'>
              <View className='goodsItem' onClick={this.navigateTo}>
                <Image className='img' src='https://www.starbucks.com.cn/assets/images/featured/2019autumn/sumatra-wahana-estate.png' />
                <Text>庄园咖啡豆</Text>
                <View className='priceWrapper'>
                  <Text className='cPrice'>￥29.00</Text>
                  <Text className='oriPrice'>￥39.00</Text>
                </View>
              </View>
              <View className='goodsItem' onClick={this.navigateTo}>
                <Image className='img' src='https://www.starbucks.com.cn/images/products/origami-verona.jpg' />
                <Text>便携式滴滤咖啡</Text>
                <View className='priceWrapper'>
                  <Text className='cPrice'>￥69.00</Text>
                  <Text className='oriPrice'>￥99.00</Text>
                </View>
              </View>
              <View className='goodsItem' onClick={this.navigateTo}>
                <Image className='img' src='https://www.starbucks.com.cn/images/products/via-vanilla-latte.jpg' />
                <Text>香草拿铁咖啡饮料</Text>
                <View className='priceWrapper'>
                  <Text className='cPrice'>￥49.00</Text>
                  <Text className='oriPrice'>￥59.00</Text>
                </View>
              </View>
              <View className='goodsItem' onClick={this.navigateTo}>
                <Image className='img' src='https://www.starbucks.com.cn/assets/images/featured/2019autumn2/china-yunnan-puer-baoshan.png' />
                <Text>综合咖啡豆</Text>
                <View className='priceWrapper'>
                  <Text className='cPrice'>￥79.00</Text>
                  <Text className='oriPrice'>￥89.00</Text>
                </View>
              </View>
            </View>
          </View>


          <View className='goodsWrapper'>
            <View className='leaderWrapper'>
              <View className='leaderLeft'>
                <Text className='textTop'>Coffer祝你圣诞咖啡快乐</Text>
                <Text className='textMiddle'>全心全意为你制造圣诞惊喜与喜悦</Text>
                <View className='btnWrapper'><Text className='textBottom'>查看更多 ></Text></View>
                {/*<Image className='img' src='../../../../assets/images/u254.svg' />*/}
              </View>
              <View className='leaderRight'>
                <Image className='img' src='../../../../assets/images/u279.png' />
              </View>
            </View>
            <View className='goodsListWrapper'>
              <View className='goodsItem' onClick={this.navigateTo}>
                <Image className='img' src='https://www.starbucks.com.cn/assets/images/featured/2019xmas/reindeer-caramel-mousse-cake.png' />
                <Text>焦糖慕斯蛋糕</Text>
                <View className='priceWrapper'>
                  <Text className='cPrice'>￥89.00</Text>
                  <Text className='oriPrice'>￥99.00</Text>
                </View>
              </View>
              <View className='goodsItem' onClick={this.navigateTo}>
                <Image className='img' src='https://www.starbucks.com.cn/assets/images/featured/2019xmas/christmas-mini-puff.png' />
                <Text>趣萌小点</Text>
                <View className='priceWrapper'>
                  <Text className='cPrice'>￥59.00</Text>
                  <Text className='oriPrice'>￥79.00</Text>
                </View>
              </View>
              <View className='goodsItem' onClick={this.navigateTo}>
                <Image className='img' src='https://www.starbucks.com.cn/assets/images/featured/2019xmas/nuts-cake.png' />
                <Text>圣诞坚果蛋糕</Text>
                <View className='priceWrapper'>
                  <Text className='cPrice'>￥69.00</Text>
                  <Text className='oriPrice'>￥79.00</Text>
                </View>
              </View>
              <View className='goodsItem' onClick={this.navigateTo}>
                <Image className='img' src='https://www.starbucks.com.cn/assets/images/featured/2019xmas/cold-to-go-500ml-xmas.png' />
                <Text>防漏吸管杯</Text>
                <View className='priceWrapper'>
                  <Text className='cPrice'>￥99.00</Text>
                  <Text className='oriPrice'>￥99.00</Text>
                </View>
              </View>
            </View>
          </View>


        </View>
    )
  }

}
