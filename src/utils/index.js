import {ToastAndroid, Platform, Alert} from 'react-native';

export const messageAlert = (message) => {
  if (Platform.OS === 'android') {
    return ToastAndroid.showWithGravityAndOffset(
      message,
      ToastAndroid.SHORT,
      ToastAndroid.BOTTOM,
      0,
      250,
    );
  }
  return Alert.alert(message);
};
