import Taro, { Component } from '@tarojs/taro'
import {Image, ScrollView, Text, View} from '@tarojs/components'
import Passage from "../passage/passage";
import './index.scss'


export default class SelectorItem extends Component {

  onChildItemHide = e => {
    this.props.hideSelectorItemItemsAction(e.currentTarget.dataset.father, e.currentTarget.id);
    console.log(e);
  };

  onChildItemShow = e => {
    this.props.showSelectorItemItemsAction(e.currentTarget.dataset.father, e.currentTarget.id);
    console.log(e);
  };

  onFatherItemShow = e => {
    console.log(e);
    this.props.showSelectorItemAction(e.currentTarget.id);
  };

  onFatherItemHide = e => {
    console.log(e);
    this.props.hideSelectorItemAction(e.currentTarget.id);
  };

  showModal (){
    Taro.showToast({
      title: '添加成功',
      icon: 'success',
      duration: 1000
    })
  }

  addAmount (e){
    console.log(e);
    let current = e.currentTarget.dataset.current;
    let father = e.currentTarget.dataset.father;
    let top = e.currentTarget.dataset.top;
    let amount = e.currentTarget.dataset.amount;
    this.props.addAmountAction(current, father, top, amount);
  }

  subtractAmount (e){
    console.log(e);
    let current = e.currentTarget.dataset.current;
    let father = e.currentTarget.dataset.father;
    let top = e.currentTarget.dataset.top;
    let amount = e.currentTarget.dataset.amount;
    this.props.subtractAmountAction(current, father, top, amount);
  }

  render () {
    return (
      <ScrollView scrollY={true} className="selectorWrapper">
        <Passage getLocationListAction={this.props.getLocationListAction}
                 showImageAction={this.props.showImageAction}
                 locationList={this.props.locationList}
                 imageList={this.props.imageList}
                 defaultImage={this.props.defaultImage}
                 defaultLocation={this.props.defaultLocation}
                 pickerValue={this.props.pickerValue}
                 getLabelListAction={this.props.getLabelListAction}
                 selectedValue={this.props.selectedValue}
                 addAmountAction={this.props.addAmountAction}
                 subtractAmountAction={this.props.subtractAmountAction}
        />
      </ScrollView>
    )
  }

}
