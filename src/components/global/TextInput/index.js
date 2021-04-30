import React from 'react';

import {TextInput} from './styles';

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
  return <TextInput {...newProps}>{props.children}</TextInput>;
};

export default index;
