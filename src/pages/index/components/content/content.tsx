import Taro, { Component } from '@tarojs/taro'
import {View, Image, Text, RichText} from '@tarojs/components'
import './index.scss'

export default class Content extends Component {

  addLikeAmount (id, articles, amount, target_id, type, user_id) {
    this.props.addLikeAmountFromMysqlAction(id, articles, amount, target_id, type, user_id);
  }

  getDetail (did, type){
    this.props.getDevelopmentDetailFromMysqlAction(did, type);
  }

  render () {
    const { articles } = this.props;
    return (
      <View className='contentWrapper'>
        { articles.length ==0 ? null : articles.map((item, index) =>
          <View className='contentBlock'>
            <Image className='img'
                   src={item.imgUrl ? item.imgUrl: '../../../../assets/images/content_cover02.jpg'}
                   onClick={() => this.getDetail(item.did, item.Dtype)}
            />
            <View  className='content'>
              <Text className='con' onClick={() => this.getDetail(item.did, item.Dtype)}>{item.content}</Text>
            </View>
            <View className='contentInfoBanner'>
              <View className='authorBlock'>
                <Image className='ava' src={item.avatar}/>
                <Text className='username'>{item.name}</Text>
              </View>
              <View
                className='like'
                onClick={() => this.addLikeAmount(index, articles, item.amount, item.did, item.Ttype, item.uid)}
              >
                <Image className='likeIcon' src='../../../../assets/images/u116.png'
                />
                <Text>{item.amount}</Text>
              </View>
            </View>
          </View>
        )}
      </View>
    )
  }

}
