import { Button } from "react-native-elements";
import React from 'react';

const SaveMachineButton = (user, washingMachineCode) => {


  return (
    <Button
      icon={{
        name: 'heart',
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
        //addMachine(user, washingMachineCode);
      }}
    />
  );
};

export default SaveMachineButton;
