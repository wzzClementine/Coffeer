import Taro, { Component } from '@tarojs/taro'
import {View, Text, ScrollView, Image} from '@tarojs/components'
import './index.scss'

export default class Topic extends Component {

  componentDidMount (){
    this.props.getTopicListFromMysqlAction();
    this.props.setTopicPassagesFromMysqlAction(this.props.topicID);
  }

  switchBar (e) {
    this.props.setTopicPassagesFromMysqlAction(e.currentTarget.id);
  }

  getDevelopment (topic) {
    this.props.getTopicDevelopmentFromMysqlAction(topic);
  }

  render () {
    return (
      <View className='topicBanner'>
        <ScrollView scrollX style={"height: 40px;"}>
          <View className='labelWrapper'>
            {this.props.topicList.map((item, index) =>
              <View id={index}
                    className='label'
                    onClick={this.switchBar}
                    style={this.props.topicID == index ? "background-color: rgb(239, 140, 43);color: white;" : "background-color: white;"}
              >
                <Text>{item.name}</Text>
              </View>
            )}
          </View>
        </ScrollView>
        <View className='contentWrapper'>
          {this.props.topicPassages.map((item, index) =>
            <View className='contentBanner'>
              <View className='titleWrapper'>
                <View className='title'>
                  <View><Image className='img' src={item.icon} /></View>
                  <Text className='titleText'>{item.title}</Text>
                </View>
                <View onClick={() => this.getDevelopment(item.incid)}><Image className='img' src='../../../../assets/images/u896.svg' /></View>
              </View>
              <View className='contentBlock'>
                <View className='left'>
                  <View className='content'><Text>{item.description}</Text></View>
                  <View className='userInfo'>
                    <Text>@{item.name}</Text>
                    <Text style={"margin-left: 15px;color: #9F9F9F;"}>{item.date}</Text>
                  </View>
                </View>
                <View className='right'>
                  <Image className='cover' src={item.cover} />
                </View>
              </View>
            </View>
          )}

        </View>

      </View>
    )
  }

}
