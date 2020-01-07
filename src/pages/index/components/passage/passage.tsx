import Taro, { Component } from '@tarojs/taro'
import {View, Image, Text, RichText} from '@tarojs/components'
import './index.scss'

export default class Passage extends Component {

  render () {
    const { passage } = this.props;
    return (
      <View className='contentWrapper'>
        {passage.map((item, index) =>
          <View className='contentBlock'>
            <Image className='img' src={item.cover ? item.cover: '../../../../assets/images/content_cover02.jpg'}/>
            <View  className='content'>
              <Text className='title'>{item.title}</Text>
            </View>
            <View className='titleWrapper'>
              <RichText className='con' nodes={item.content} />
            </View>
            <View className='contentInfoBanner'>
              <View className='authorBlock'>
                <Image className='ava' src={item.avatar}/>
                <Text className='username'>{item.name}</Text>
              </View>
              <View className='like'>
                <Image className='likeIcon' src='../../../../assets/images/u116.png'/>
                <Text>{item.amount}</Text>
              </View>
            </View>
          </View>
        )}
      </View>
    )
  }

}
