import React from 'react';
import FW from 'react-native-vector-icons/FontAwesome';
import MI from 'react-native-vector-icons/MaterialIcons';
import MCI from 'react-native-vector-icons/MaterialCommunityIcons';
import SL from 'react-native-vector-icons/SimpleLineIcons';
import ION from 'react-native-vector-icons/Ionicons';

const IconType = (lib) => {
  switch (lib) {
    case 'FW':
      return FW;
    case 'MI':
      return MI;
    case 'MCI':
      return MCI;
    case 'SL':
      return SL;
    case 'ION':
      return ION;
    default:
      return MCI;
  }
};

const index = ({...props}, lib) => {
  const IconComp = IconType(lib);

  const newProps = {
    ...props,
    style: [
      {
        ...props.style[0],
        fontSize: props.style[0].fontSize + 0,
      },
    ],
  };

  return <IconComp {...newProps}>{props.children}</IconComp>;
};

export default index;
