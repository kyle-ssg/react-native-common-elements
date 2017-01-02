// Precalculate Device Dimensions for better performance
import {Dimensions} from 'react-native';
const deviceWidth = Dimensions.get('window').width;
const ratioX = deviceWidth < 375 ? (x < 320 ? 0.75 : 0.875) : 1;
module.exports = (value = 1, base = 14)=> (base * ratioX) * value;