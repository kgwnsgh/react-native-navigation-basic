import React, {Component} from 'react';
import {Image} from 'react-native';

import info from '../assets/pics/info.png';
class InfoIcon extends Component {
  render() {
    return <Image style={{width: 40, height: 40}} source={info} />;
  }
}

export default InfoIcon;
