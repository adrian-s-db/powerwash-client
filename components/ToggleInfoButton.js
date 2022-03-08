import { Button } from 'react-native-elements';
import React from 'react';

const ToggleInfoButton = ({ setDisplayToggle, displayToggle }) => {
  return (
    <Button
      icon={{
        name: displayToggle ? 'minus' : 'plus',
        type: 'font-awesome',
        size: 20,
        color: '#EEEEEE',
      }}
      buttonStyle={{
        borderColor: '#EEEEEE',
        borderWidth: 1,
        backgroundColor: '#00000000',
        borderRadius: 50,
      }}
      containerStyle={{
        width: 60,
        height: 60,
        marginVertical: 20,
        marginVertical: 0,
        alignContent: 'center',
        justifyContent: 'center',
        marginLeft: 12,
        marginRight: 12,
      }}
      onPress={() => {
        setDisplayToggle(!displayToggle);
      }}
    />
  );
};

export default ToggleInfoButton;
