import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import MachineInfoCard from './MachineCard';

const DashBoardMachinesList = ({ machineIds, navigation }) => {
  return (
   machineIds.length ?
    <View style={styles.container}>
      {machineIds.map((id)=> {
        return (
        <MachineInfoCard
          navigation={navigation}
          machineId={id}
          key={id}
        />
      )
      })
      }
    </View>
   : null
  );
};

export default DashBoardMachinesList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    marginTop: 50,
    marginBottom: 130,
    width: '90%'
  },
});
