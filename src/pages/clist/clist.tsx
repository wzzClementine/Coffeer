import Taro, { Component, Config } from '@tarojs/taro'
import { connect } from '@tarojs/redux'
import {View} from '@tarojs/components'
import TopBar from './components/topBar/topBar'
import Coffee from "./components/coffee/coffee";
import './index.scss'
import {
  setPickerValue,
  setClistValue,
  showBarAction
} from '../../actions/clist'

// @ts-ignore
@connect(({ clist }) => ({
  clist
}), (dispatch) => ({
  setPickerValue (id) {
    dispatch(setPickerValue(id))
  },
  setClistValue (clist) {
    dispatch(setClistValue(clist))
  },
  showBarAction (value) {
    dispatch(showBarAction(value))
  }
}))

class Clist extends Component {

  config: Config = {
    navigationBarTitleText: '咖啡列表'
  };

  componentWillMount () { }

  componentDidMount () {

    const { setClistValue } = this.props;

    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        traceUser: true,
      })
    }

    wx.cloud.callFunction({
      // 云函数名称
      name: 'coffeeListMysql',
      // 传给云函数的参数
      data: {},
      success: function(res) {
        console.log("execute mysql result", res.result);
        setClistValue(res.result);
      },
      fail: console.error
    })

  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View>
        <TopBar selectedList={this.props.clist.selectedList}
                defaultSelected={this.props.clist.defaultSelected}
                setPickerValue={this.props.setPickerValue}
        />
        <Coffee selectedList={this.props.clist.selectedList}
                clist={this.props.clist.clist}
                defaultSelected={this.props.clist.defaultSelected}
                num={this.props.clist.num}
                isShow={this.props.clist.isShow}
                showBarAction={this.props.showBarAction}
        />
      </View>
    )
  }
}

export default Clist
