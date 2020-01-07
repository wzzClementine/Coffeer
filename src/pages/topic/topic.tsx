import Taro, { Component } from '@tarojs/taro'
import {View, Input, Image, Text} from '@tarojs/components'
import './index.scss'
import Content from "../index/components/content/content";
import {connect} from "@tarojs/redux";
import {
  addLikeAmountFromMysqlAction,
  changeCollectionStatusAction,
  getDevelopmentDetailFromMysqlAction
} from "../../actions/indexPage";

// @ts-ignore
@connect(({ index }) => ({
  index
}), (dispatch) => ({
  addLikeAmountFromMysqlAction (id, articles, amount, target_id, type, user_id) {
    dispatch(addLikeAmountFromMysqlAction (id, articles, amount, target_id, type, user_id))
  },

  getDevelopmentDetailFromMysqlAction(did, type){
    dispatch(getDevelopmentDetailFromMysqlAction(did, type))
  },

  changeCollectionStatusAction(){
    dispatch(changeCollectionStatusAction())
  },

}))

class TopicBlock extends Component {

  showModal2 (){
    Taro.showToast({
      title: '收藏成功',
      icon: 'success',
      duration: 2000
    }).then(
      this.props.changeCollectionStatusAction()
    )
  }

  turnTo () {
    Taro.navigateTo({
      url: '/pages/write/write',
    })
  }

  render () {

    return (
      <View className='backgroundWrapper'  style={"background-image: url(" + this.props.index.topicDevelopment[0].cover + ");"}>
        <View className='back'/>
        <View className='detailWrapper'>
          {this.props.index.topicDevelopment.length == 0 ?
            <View className='emptyWrapper'>
              <View className='emptyWrapper'><Text>暂时没有人发表动态哦~</Text></View>
            </View> :
            <View className='topicWrapper'>
              <View className='titleWrapper'>
                <View className='titleInfo'>
                  <View><Text>{this.props.index.topicDevelopment[0].title}</Text></View>
                  <View style={"font-size: 11px;font-weight: 400;margin-top: 5px;"}>
                    <Text>{this.props.index.topicDevelopment[0].ctAmount}条 · 评论</Text>
                  </View>
                </View>
                {this.props.index.collectionStatus ?
                  <View style={"margin-top: 25px;text-align: center;"}><Text className='collection2'>已收藏</Text></View>
                  : <View style={"margin-top: 25px;text-align: center;"} onClick={this.showModal2}><Text className='collection'>收藏</Text></View>
                }
              </View>
              <View className='contentWrapper'>
                <Content articles={this.props.index.topicDevelopment}
                         addLikeAmountFromMysqlAction={this.props.addLikeAmountFromMysqlAction}
                         getDevelopmentDetailFromMysqlAction={this.props.getDevelopmentDetailFromMysqlAction}
                />
              </View>
              <View className='bottom' onClick={this.turnTo}><Text>立即参与</Text></View>
            </View>
          }
        </View>
      </View>
    )
  }

}

export default TopicBlock
