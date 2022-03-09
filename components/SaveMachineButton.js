import { Button } from 'react-native-elements';

import { useContext } from 'react';

import { updateUser } from '../services/UsersDbService';
import AuthContext from '../AuthContext';

const ToggleSaveMachineButton = (washingMachineCode) => {
  const { user, setUser } = useContext(AuthContext);

  const toggleSaveMachine = async (machineid) => {
    const updatedUser = await updateUser(user, machineid);
    setUser(updatedUser);
  };

  return (
    <Button
      icon={{
        name: 'heart',
        type: 'font-awesome',
        size: 20,
        color: user.savedMachines.includes(
          washingMachineCode.washingMachineCode
        )
          ? '#c70000'
          : '#EEEEEE',
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
        marginVertical: 0,
        alignContent: 'center',
        justifyContent: 'center',
        marginLeft: 0,
        marginRight: 0,
      }}
      onPress={() => {
        toggleSaveMachine(washingMachineCode);
      }}
    />
  );
};

export default ToggleSaveMachineButton;
