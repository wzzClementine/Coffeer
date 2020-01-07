import Taro, { Component } from '@tarojs/taro'
import {View, Input, Image, Text} from '@tarojs/components'
import './index.scss'
import { Fragment } from "react";

export default class CommentBottomBlock extends Component {

  showModal (){
    Taro.showToast({
      title: '收藏成功',
      icon: 'success',
      duration: 2000
    }).then(
      this.props.changeCollectionStatusAction()
    )
  }

  getInputValue (e){
    console.log(e.currentTarget.value);
    let result = e.currentTarget.value;
    if (result != ""){
      Taro.showToast({
        title: '发表成功！',
        icon: 'success',
        duration: 2000
      })
    }
  }

  render () {
    return (
      <Fragment>
        {this.props.isDevelopment ?
          <View className='bottomWrapper'>
            <View className='inputWrapper'>
              <Image className='img' src='../../assets/images/u1132.svg' />
              <Input placeholder-style="font-size: 11px;padding-left: 15px;"
                     placeholder={"说点什么吧"}
                     onConfirm={this.getInputValue}
              />
            </View>
            <View className='iconWrapper'>
              <View className='iconBanner'>
                <Image className='icon' src='../../assets/images/u1129.svg' />
                <Text className='amount'>
                  {this.props.isDevelopment ? this.props.hotDetail.amount : this.props.competitionDetail.amount}
                </Text>
              </View>
              <View className='iconBanner' onClick={this.showModal}>
                <Image className='icon1' src='../../assets/images/u1128.svg' />
                <Text className='amount'>
                  {this.props.isDevelopment ? this.props.hotDetail.cltAmount : this.props.competitionDetail.cltAmount}
                </Text>
              </View>
            </View>
          </View> : null
        }
      </Fragment>
    )
  }

}
