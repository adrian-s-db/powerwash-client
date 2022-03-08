import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'


import MachineCardHeader from './MachineCardHeader';
import { getWashingMachineData } from '../services/MachinesDBService';

const MachineInfoCard = ({machineId}) => {
  const [info, setInfo] = useState(null);

  useEffect(async () => {
    const fetchedInfo = await getWashingMachineData(machineId);
    setInfo(fetchedInfo);
  }, [])

  return (info ?
    <View style={styles.container}>
      {/* NOW: Change MachineInfoHeader for more suitable copied new components */}
      <MachineCardHeader
        machineData={info}
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
    width: '100%'
  }
})