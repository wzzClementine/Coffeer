import Taro, { Component, Config } from '@tarojs/taro';
import { connect } from '@tarojs/redux';
import { View } from '@tarojs/components';
import Header from "./components/Header/header";
import PersonList from './components/List/list';
import './index.scss';
import { add, minus, asyncAdd } from '../../actions/person';

// @ts-ignore
@connect(({ person }) => ({
  person
}), (dispatch) => ({
  add () {
    dispatch(add())
  },
  dec () {
    dispatch(minus())
  },
  asyncAdd () {
    dispatch(asyncAdd())
  }
}))

class Person extends Component {

  config: Config = {
    navigationBarTitleText: '我的'
  };

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View>
        <Header />
        <PersonList specialLabel={this.props.person.specialLabel}
                    labelList={this.props.person.labelList}
        />
      </View>
    )
  }
}

export default Person
