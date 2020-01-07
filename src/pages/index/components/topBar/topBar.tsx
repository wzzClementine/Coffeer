import Taro, { Component } from '@tarojs/taro'
import { View, Text} from '@tarojs/components'
import './index.scss'

export default class TopBar extends Component {

  render () {
    return (
      <View className='topBarBanner'>
        {this.props.topBarList.map((item, index) =>
          <View className='miniLabel'
                style={item.isSelected ? "border-bottom: 4px solid #6f5c4a;" : ""}
                onClick={() => this.props.switchTabBarAction(index)}
          >
            <Text>{item.name}</Text>
          </View>
        )}
      </View>
    )
  }

}
