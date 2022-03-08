import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';

import MachineCardHeader from './MachineCardHeader';
import MachineCardInfo from './MachineCardInfo';
import { getWashingMachineData } from '../services/MachinesDBService';
import ToggleSaveMachineButton from './SaveMachineButton';
import { getCurrentEnergyPrice } from '../services/REDapiService';
import { NavigationContainer } from '@react-navigation/native';

const MachineInfoCard = ({ machineId, navigation }) => {
  const [info, setInfo] = useState(null);
  const [currentPrice, setcurrentPrice] = useState(null);

  useEffect(async () => {
    const fetchedInfo = await getWashingMachineData(machineId);
    setInfo(fetchedInfo);
    const fetchedCost = await getCurrentEnergyPrice();
    setcurrentPrice(fetchedCost);
  }, []);

  return info && currentPrice ? (
    <TouchableOpacity
      style={styles.container}
      onPress={() => 
        navigation.navigate('Info', {
          washingMachineCode: info.scannedCode,
        })
      }
    >
      <ToggleSaveMachineButton washingMachineCode={machineId} />
      <MachineCardHeader machineData={info} />
      <MachineCardInfo machineData={info} currentPrice={currentPrice} />
    </TouchableOpacity>
  ) : null;
};

export default MachineInfoCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EEEEEE99',
    marginBottom: 10,
    padding: 15,
    borderRadius: 12,
    width: '100%',
    flexDirection: 'row',
    alignContent: 'center',
  },
});
