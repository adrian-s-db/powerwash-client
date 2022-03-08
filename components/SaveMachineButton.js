import { Button } from "react-native-elements";

import { useContext } from 'react';

import { updateUser } from "../services/UsersDbService";
import AuthContext from '../AuthContext';

const ToggleSaveMachineButton = (washingMachineCode) => {

  const {user, setUser} = useContext(AuthContext);

  const toggleSaveMachine = async (machineid) => {
    const updatedArr = await updateUser(user, machineid);
    console.log(updatedArr);
    // Call service to update DB
    // DB returns updated object
    // setUser(updatedObject)
  }

  return (
    <Button
      icon={{
        name: 'heart',
        type: 'font-awesome',
        size: 30,
        color: user.savedMachines.includes(washingMachineCode) ? '#8E1600' : '#EEEEEE',
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
