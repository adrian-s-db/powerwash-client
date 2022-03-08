import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'


import MachineCardHeader from './MachineCardHeader';
import { getWashingMachineData } from '../services/MachinesDBService';
import ToggleSaveMachineButton from './SaveMachineButton';
import { RotationGestureHandler } from 'react-native-gesture-handler';

const MachineInfoCard = ({machineId}) => {
  const [info, setInfo] = useState(null);

  useEffect(async () => {
    const fetchedInfo = await getWashingMachineData(machineId);
    setInfo(fetchedInfo);
  }, [])

  return (info ?
    <View style={styles.container}>
      <MachineCardHeader
        machineData={info}
      />
      <ToggleSaveMachineButton
        washingMachineCode={machineId}
      />

    </View> : null
  )
}

export default MachineInfoCard

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EEEEEE99',
    marginBottom: 10,
    padding: 15,
    borderRadius: 12,
    width: '100%',
    flexDirection: 'row',
    alignContent: 'center'
  }
})