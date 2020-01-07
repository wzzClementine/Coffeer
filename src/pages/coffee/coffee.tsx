import Taro, { Component, Config } from '@tarojs/taro'
import {Input, View} from '@tarojs/components'
import { connect } from '@tarojs/redux'
import SelectorItem from "./components/selector/selector";
import BottomBar from "./components/bottom/bottomBar";
import './index.scss'
import {
  hideSelectorItemAction,
  showSelectorItemAction,
  hideSelectorItemItemsAction,
  showSelectorItemItemsAction,
  showImageAction,
  getLocationListAction,
  getLabelListAction,
  addAmountAction,
  subtractAmountAction
} from '../../actions/coffee';

// @ts-ignore
@connect(({ coffee }) => ({
  coffee
}), (dispatch) => ({
  hideSelectorItemAction (fatherID) {
    dispatch(hideSelectorItemAction(fatherID))
  },
  showSelectorItemAction (fatherID) {
    dispatch(showSelectorItemAction(fatherID))
  },
  hideSelectorItemItemsAction (fatherID, childID) {
    dispatch(hideSelectorItemItemsAction(fatherID, childID))
  },
  showSelectorItemItemsAction (fatherID, childID) {
    dispatch(showSelectorItemItemsAction(fatherID, childID))
  },
  showImageAction (path) {
    dispatch(showImageAction(path))
  },
  getLocationListAction (locationList, loaction) {
    dispatch(getLocationListAction(locationList, loaction))
  },
  getLabelListAction (labelList, label){
    dispatch(getLabelListAction(labelList, label))
  },
  addAmountAction (currentID, fatherID, TopID, currentAmount){
    dispatch(addAmountAction(currentID, fatherID, TopID, currentAmount))
  },
  subtractAmountAction (currentID, fatherID, TopID, currentAmount){
    dispatch(subtractAmountAction(currentID, fatherID, TopID, currentAmount))
  }
}))

class Coffee extends Component {

  config: Config = {
    navigationBarTitleText: '制作咖啡'
  };

  render () {
    return (
      <View className='coffeeWrapper'>
        <View className='nameInput'>
          <Input placeholder='请输入自定义咖啡名称' />
        </View>
        <SelectorItem
          hideSelectorItemAction={this.props.hideSelectorItemAction}
          showSelectorItemAction={this.props.showSelectorItemAction}
          hideSelectorItemItemsAction={this.props.hideSelectorItemItemsAction}
          coffeeList={this.props.coffee.coffeeList}
          selectorItemsStatus={this.props.coffee.selectorItemsStatus}
          showSelectorItemItemsAction={this.props.showSelectorItemItemsAction}
          showImageAction={this.props.showImageAction}
          getLocationListAction={this.props.getLocationListAction}
          imageList={this.props.coffee.imageList}
          locationList={this.props.coffee.locationList}
          defaultImage={this.props.coffee.defaultImage}
          defaultLocation={this.props.coffee.defaultLocation}
          pickerValue={this.props.coffee.pickerValue}
          getLabelListAction={this.props.getLabelListAction}
          selectedValue={this.props.coffee.selectedValue}
          addAmountAction={this.props.addAmountAction}
          subtractAmountAction={this.props.subtractAmountAction}
        />
        <BottomBar />
      </View>
    )
  }

}

export default Coffee
