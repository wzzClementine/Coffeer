import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'
import DetailBlock from "../../components/detail/detail";
import CommentBlock from "../../components/comment/comment";
import CommentBottomBlock from "../../components/bottom/commentBottom";
import './index.scss'
import {connect} from "@tarojs/redux";


// @ts-ignore
@connect(({ index }) => ({
  index
}), (dispatch) => ({

}))

class Competition extends Component {


  config: Config = {
    navigationBarTitleText: '比赛'
  };

  render () {
    return (
      <View className='detailWrapper'>
        <DetailBlock competitionDetail={this.props.index.competitionDetail}
                     isDevelopment={this.props.index.isDevelopment}
        />
        <CommentBlock />
        <CommentBottomBlock competitionDetail={this.props.index.competitionDetail}
                            isDevelopment={this.props.index.isDevelopment}
        />
      </View>
    )
  }

}

export default Competition
