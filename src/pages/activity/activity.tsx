import Taro, { Component } from '@tarojs/taro'
import {View, Input, Image, Text, RichText} from '@tarojs/components'
import './index.scss'
import {connect} from "@tarojs/redux";
import {changePartyStatusAction} from "../../actions/indexPage";

// @ts-ignore
@connect(({ index }) => ({
  index
}), (dispatch) => ({

  changePartyStatusAction(){
    dispatch(changePartyStatusAction())
  },

}))

class ActivityBlock extends Component {

  showModal (){
    Taro.showToast({
      title: '加入成功',
      icon: 'success',
      duration: 2000
    }).then(
      this.props.changePartyStatusAction()
    )
  }

  render () {
    const activityDetail  = this.props.index.activityDetail;
    return (
      <View className='backgroundWrapper'  style={"background-image: url(" + activityDetail.cover + ");"}>
        <View className='back'></View>
        <View className='detailWrapper'>
          <View className='topicWrapper'>
            <View className='titleWrapper'>
              <View className='titleInfo'>
                <View><Text>{activityDetail.title} | {activityDetail.name}</Text></View>
                <View style={"font-size: 11px;font-weight: 400;margin-top: 5px;"}>
                  <Text>{activityDetail.amount}人 · 已加入</Text>
                </View>
              </View>
              {this.props.index.partyStatus ?
                <View style={"margin-top: 25px;text-align: center;"}><Text className='collection2'>已加入</Text></View>
                : <View style={"margin-top: 25px;text-align: center;"} onClick={this.showModal}><Text className='collection'>立即加入</Text></View>
              }
            </View>

            <View className='contentWrapper'>
              <View className='infoWrapper'>
                <View className='timeWrapper'>
                  <View className='label'><Text>时间</Text></View>
                  <View><Text>{activityDetail.time}</Text></View>
                </View>
                <View className='timeWrapper'>
                  <View className='label'><Text>活动地点</Text></View>
                  <View><Text>{activityDetail.location}</Text></View>
                </View>
              </View>
              <View className='contentBanner'>
                <RichText className='content' nodes={activityDetail.description} />
                <View><Image className='img' src={activityDetail.img} /></View>
              </View>
            </View>
          </View>
          {this.props.index.partyStatus ?
            <View className='bottom2'><Text>已加入</Text></View>
            :   <View className='bottom' onClick={this.showModal}><Text>立即参与</Text></View>
          }
        </View>
      </View>
    )
  }

}

export default ActivityBlock
