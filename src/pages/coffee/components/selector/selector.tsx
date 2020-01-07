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
        {this.props.coffeeList.map((item, index) =>
            <View>
              <View className='titleWrapper'>
                <Text>{item.title}</Text>
                {item.status ?
                  <Image id={index}
                         className='img'
                         src='../../../../assets/images/u642.svg'
                         onClick={this.onFatherItemHide}
                  /> :
                  <Image id={index}
                         className='img2'
                         src='../../../../assets/images/u865.svg'
                         onClick={this.onFatherItemShow}
                  />
                }
              </View>
              {
                item.status ?
                  <View>
                    {item.options.map((item, index1) =>
                      <View id={index}  className='selectorItem'>
                        <View className='title'>
                          <Text>{item.name}</Text>
                          {item.status ?
                            <Image id={index1}
                                   data-father={index}
                                   data-type={"hide"}
                                   className='img'
                                   src='../../../../assets/images/u591.svg'
                                   onClick={this.onChildItemHide}
                            /> :
                            <Image id={index1}
                                   className='img2'
                                   data-father={index}
                                   data-type={"show"}
                                   src='../../../../assets/images/u590.svg'
                                   onClick={this.onChildItemShow}
                            />
                          }
                        </View>
                        {item.status ?
                          <View className='itemWrapper'>
                            {item.material.map((item, index2) =>
                              <View className='item'>
                                <View><Text>{item.name}</Text></View>
                                <View className='rightFuncWrapper'>
                                  <View className='amountWrapper'>
                                    <Image data-current={index2}
                                           data-father={index1}
                                           data-top={index}
                                           data-amount={item.amount}
                                           className='img1'
                                           src='../../../../assets/images/u603.svg'
                                           onClick={this.subtractAmount}
                                    />
                                    <Text className='amount'>{item.amount}{item.unit}</Text>
                                    <Image data-current={index2}
                                           data-father={index1}
                                           data-top={index}
                                           data-amount={item.amount}
                                           className='img0'
                                           src='../../../../assets/images/u597.svg'
                                           onClick={this.addAmount}/>
                                  </View>
                                  <Image className='img' onClick={this.showModal} src='../../../../assets/images/u605.svg' />
                                </View>
                              </View>
                            )}
                          </View> : null
                        }
                      </View>
                    )}
                  </View> : null
              }
            </View>

        )}
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
