import { Button } from "react-native-elements";

import { useEffect, useState, useContext } from 'react';

import { updateUser } from "../services/UsersDbService";
import AuthContext from '../AuthContext';

const ToggleSaveMachineButton = (washingMachineCode) => {

  const {user, setUser} = useContext(AuthContext);

   const toggleSaveMachine = async (machineid) => {
    const updatedUser = await updateUser(user, machineid);
    setUser(updatedUser);
  }
  
  return (
    <Button
      icon={{
        name: 'heart',
        type: 'font-awesome',
        size: 30,
        color: user.savedMachines.includes(washingMachineCode.washingMachineCode) ? '#8E1600' : '#EEEEEE',
      }}
      buttonStyle={{
        borderColor: '#EEEEEE',
        borderWidth: 1,
        backgroundColor: '#00000000',
        borderRadius: 25,
      }}
      containerStyle={{ width: 50, height: 50, margin: 20 }}
      onPress={() => {
        toggleSaveMachine(washingMachineCode)
      }}
    />
  );
};

export default ToggleSaveMachineButton;
