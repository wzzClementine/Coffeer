import Taro, { Component } from '@tarojs/taro'
import {View, Input, Image, Text} from '@tarojs/components'
import './index.scss'
import { Fragment } from 'react';

export default class CommentBlock extends Component {

  render () {
    return (
      <Fragment>
      {this.props.isDevelopment ?
          <Fragment>
            <View className='commentWrapper'>

              <View className='titleWrapper'>
                <Text>精彩评论 {this.props.comment.length}</Text>
              </View>
              {this.props.comment.map((item, index) =>
                <View className='contentWrapper'>
                  <View className='titleWrapper'>
                    <View className='userInfo'>
                      <View><Image className='img' src={item.avatar}/></View>
                      <View className='info'>
                        <View><Text>用户名</Text></View>
                        <View style={"padding-top: 3px;color: #7B7B7B;"}><Text>{item.time}</Text></View>
                      </View>
                    </View>
                    <View className='iconWrapper'>
                      {/*<View><Image className='img' src='../../assets/images/u1138.svg' /></View>*/}
                      <Image className='img1' src='../../assets/images/u1139.svg'/>
                      <Text>回复</Text>
                    </View>
                  </View>

                  <View className='content'>
                    <Text>{item.content}</Text>
                  </View>

                </View>
              )}
            </View>
          </Fragment> : null
      }
      </Fragment>
    );
  }

}
