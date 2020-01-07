import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'
import DetailBlock from "../../components/detail/detail";
import CommentBlock from "../../components/comment/comment";
import CommentBottomBlock from "../../components/bottom/commentBottom";
import './index.scss'
import {connect} from "@tarojs/redux";
import {
  addLikeAmountFromMysqlAction, changeCollectionStatusAction,
  changeCompetitionStatusAction,
  changePartyStatusAction
} from '../../actions/indexPage';

// @ts-ignore
@connect(({ index }) => ({
  index
}), (dispatch) => ({
  addLikeAmountFromMysqlAction (id, articles, amount, target_id, type, user_id) {
    dispatch(addLikeAmountFromMysqlAction (id, articles, amount, target_id, type, user_id))
  },
  changeCompetitionStatusAction(){
    dispatch(changeCompetitionStatusAction())
  },

  changePartyStatusAction(){
    dispatch(changePartyStatusAction())
  },

  changeCollectionStatusAction(){
    dispatch(changeCollectionStatusAction())
  },
}))

class Detail extends Component {

  config: Config = {
    navigationBarTitleText: '动态详情'
  };

  render () {
    return (
      <View className='detailWrapper'>
        <DetailBlock hotDetail={this.props.index.hotDetail}
                     isDevelopment={this.props.index.isDevelopment}
                     changeCompetitionStatusAction={this.props.changeCompetitionStatusAction}
                     changeCollectionStatusAction={this.props.changeCollectionStatusAction}
                     collectionStatus={this.props.index.collectionStatus}
                     competitionStatus={this.props.index.competitionStatus}
        />
        <CommentBlock comment={this.props.index.comment}
                      isDevelopment={this.props.index.isDevelopment}
        />
        <CommentBottomBlock
          changeCompetitionStatusAction={this.props.changeCompetitionStatusAction}
          hotDetail={this.props.index.hotDetail}
          isDevelopment={this.props.index.isDevelopment}
          addLikeAmountFromMysqlAction={this.props.addLikeAmountFromMysqlAction}
          changeCollectionStatusAction={this.props.changeCollectionStatusAction}
        />
      </View>
    )
  }

}

export default Detail
