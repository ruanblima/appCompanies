import React from 'react';

import {Text} from './styles';

const index = (props) => {
  const newProps = {
    ...props,
    style: [
      {
        ...props.style[0],
        fontSize: props.style[0].fontSize + 0,
      },
    ],
  };
  return <Text {...newProps}>{props.children}</Text>;
};

export default index;
