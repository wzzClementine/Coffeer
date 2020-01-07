import Taro, { Component } from '@tarojs/taro'
import {View, Input, Image, Text, RichText} from '@tarojs/components'
import './index.scss'
import {Fragment} from "react";

class DetailBlock extends Component {

  showModal (){
    Taro.showToast({
      title: '报名成功',
      icon: 'success',
      duration: 2000
    }).then(
      this.props.changeCompetitionStatusAction()
    )
  }

  showModal2 (){
    Taro.showToast({
      title: '收藏成功',
      icon: 'success',
      duration: 2000
    }).then(
      this.props.changeCollectionStatusAction()
    )
  }

  render () {
    return (
      <View className='detailWrapper'>
        {this.props.isDevelopment ?
          <Fragment>
            <View className='titleWrapper'>
              <View className='titleBanner'>
                <View><Image className='img' src={this.props.hotDetail.avatar} /></View>
                <View><Text>{this.props.hotDetail.name}</Text></View>
              </View>
              {this.props.collectionStatus ?
                <View className='collection2'><Text>已收藏</Text></View>
                :  <View className='collection' onClick={this.showModal2}><Text>收藏</Text></View>}
            </View>
            <RichText className='contentWrapper' nodes={this.props.hotDetail.content} />
            <View className='imgWrapper'><Image className='img' src={this.props.hotDetail.imgUrl} /></View>
          </Fragment> : <Fragment>
            <View className='titleWrapper1'>
              <View className='competitionTitleBanner'>
                <View><Text>{this.props.competitionDetail.name}</Text></View>
                <View><Text className='time'>{this.props.competitionDetail.time}</Text></View>
              </View>
              { this.props.competitionStatus ?
                <View className='collection2'><Text>已参赛</Text></View>
                :  <View className='collection' onClick={this.showModal}><Text>参赛</Text></View>
              }
            </View>
            <RichText className='contentWrapper' nodes={this.props.competitionDetail.content} />
            <View className='imgWrapper'><Image className='img' src={this.props.competitionDetail.imgUrl} /></View>
          </Fragment>
        }


      </View>
    )
  }

}

export default DetailBlock
