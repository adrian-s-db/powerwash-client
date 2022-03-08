import { Button } from "react-native-elements";
import React from 'react';

const ToggleInfoButton = ({setDisplayToggle, displayToggle}) => {
  return (
    <Button
      icon={{
        name: displayToggle ? 'minus' : 'plus',
        type: 'font-awesome',
        size: 30,
        color: '#EEEEEE',
      }}
      buttonStyle={{
        borderColor: '#EEEEEE',
        borderWidth: 1,
        backgroundColor: '#00000000',
        borderRadius: 25,
      }}
      containerStyle={{ width: 50, height: 50, margin: 20 }}
      onPress={() => {
        setDisplayToggle(!displayToggle);
      }}
    />
  );
};

export default ToggleInfoButton;
