import Taro, { Component } from '@tarojs/taro'
import {Image, Radio, RadioGroup, Text, View} from '@tarojs/components'
import './index.scss'


export default class GoodsItem extends Component {

  render () {
    return (
      <View className="goodsWrapper">

        <View className='goodsItem'>
          <View className='titleWrapper'>
            <Radio className='radio' value="单选框" />
            <Text>进口咖啡豆直营店</Text>
          </View>
          <View className='goodsDetailWrapper'>
            <Radio className='radio' value="单选框" />
            <Image className='img' src='../../../../assets/images/u357.png' />
            <View className='descWrapper'>
              <View className='name'>
                <Text>意大利进口Lavazza金牌咖啡豆</Text>
                <Text className='weight'>1kg</Text>
              </View>
              <View className='priceWrapper'>
                <Text style={"color: #DD5D00;"}>￥89.00</Text>
                <View className='amountWrapper'>
                  <Image className='img' src='../../../../assets/images/u355.svg' />
                  <Text>4</Text>
                  <Image className='img2' src='../../../../assets/images/u354.svg' />
                </View>
              </View>
            </View>
          </View>
        </View>

        <View className='goodsItem'>

          <View className='titleWrapper'>
            <Radio className='radio' value="单选框" />
            <Text>进口咖啡豆直营店</Text>
          </View>

          <View className='goodsDetailWrapper'>
            <Radio className='radio' value="单选框" />
            <Image className='img' src='../../../../assets/images/u357.png' />
            <View className='descWrapper'>
              <View className='name'>
                <Text>意大利进口Lavazza金牌咖啡豆</Text>
                <Text className='weight'>1kg</Text>
              </View>
              <View className='priceWrapper'>
                <Text style={"color: #DD5D00;"}>￥89.00</Text>
                <View className='amountWrapper'>
                  <Image className='img' src='../../../../assets/images/u355.svg' />
                  <Text>4</Text>
                  <Image className='img2' src='../../../../assets/images/u354.svg' />
                </View>
              </View>
            </View>
          </View>
        </View>


      </View>
    )
  }

}
