import Taro, { Component, Config } from '@tarojs/taro'
import '@tarojs/async-await'
import Index from './pages/index'
import { Provider } from '@tarojs/redux'
import configStore from './store/index'
import './app.scss'

const store = configStore();

class App extends Component {

  config: Config = {
    pages: [
      'pages/index/index',
      'pages/clist/clist',
      'pages/mall/mall',
      'pages/person/person',
      'pages/cart/cart',
      'pages/commodity/commodity',
      'pages/sresult/sresult',
      'pages/detail/detail',
      'pages/topic/topic',
      'pages/activity/activity',
      'pages/competition/competition',
      'pages/coffee/coffee',
      'pages/write/write',
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#6f5c4a',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'white'
    },
    //底部tab导航栏配置
    tabBar: {
      color: "#BFBFC0",
      selectedColor: "#6f5c4a",
      backgroundColor: "#F1E9DF",
      borderStyle: "black",
      list: [
        {
          pagePath: "pages/clist/clist",
          text: "咖啡列表",
          iconPath: "./assets/images/clist.png",
          selectedIconPath: "./assets/images/clistclick.png",
        },
        {
          pagePath: "pages/index/index",
          text: "社区",
          iconPath: "./assets/images/home.png",
          selectedIconPath: "./assets/images/homeclick.png",
        },
        {
          pagePath: "pages/mall/mall",
          text: "咖啡商城",
          iconPath: "./assets/images/mall.png",
          selectedIconPath: "./assets/images/mall.png",
        },
        {
          pagePath: "pages/person/person",
          text: "我的",
          iconPath: "./assets/images/person.png",
          selectedIconPath: "./assets/images/personclick.png",
        }
      ]
    },
  };

  componentDidMount () {
  //
  //   if (!wx.cloud) {
  //     console.error('请使用 2.2.3 或以上的基础库以使用云能力')
  //   } else {
  //     wx.cloud.init({
  //       traceUser: true,
  //     })
  //   }
  //
  //   wx.cloud.callFunction({
  //     // 云函数名称
  //     name: 'coffeeListMysql',
  //     // 传给云函数的参数
  //     data: {},
  //     success: function(res) {
  //       console.log("execute mysql result", res.result) // 3
  //     },
  //     fail: console.error
  //   })
  }

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'));
