import Taro, { Component } from '@tarojs/taro'
import {Image, ScrollView, Text, View} from '@tarojs/components'
import './index.scss'
import {Fragment} from "nervjs/dist/packages/nerv/src";


export default class Coffee extends Component {

  showBar (value){
    this.props.showBarAction(value);
  }

  render () {
    return (
        <View>
            <View  className='coffeeWrapper'>
              <View className='titleWrapper'>
                <Text className='title'>{this.props.defaultSelected}</Text>
                {/*<Text className='icon'> > </Text>*/}
              </View>
              <View className='coffeeList'>
                {this.props.clist[this.props.num].value.map((item, index) =>
                    <Fragment>
                      <View className='coffeeItem' onClick={() => this.showBar(true)}>
                        <Image className='img' src={item.imgUrl} />
                        <View className='text' style={"width:100%;text-align: center;"}><Text style={"margin-top: 3px;"}>{item.name}</Text></View>
                      </View>
                    </Fragment>
                )}
              </View>
            </View>
        </View>
    )
  }
}
