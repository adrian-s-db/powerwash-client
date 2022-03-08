import { View, StyleSheet } from 'react-native';
import { Text, Divider } from 'react-native-elements';
import React from 'react';

const MachineInfoHeader = ({machineData}) => {
  return (
    <View style={styles.machineInfoContainer}>
      <Text h1 h1Style={{ fontWeight: '600' }} style={styles.machineInfo}>
        {machineData.supplierOrTrademark}
      </Text>
      <Divider />
      <Text h3 style={styles.machineInfo}>
        {machineData.modelIdentifier}
      </Text>
    </View>
  );
};

export default MachineInfoHeader;

const styles = StyleSheet.create({
  machineInfoContainer: {
    alignSelf: 'flex-start',
  },
  machineInfo: {
    color: '#EEEEEE',
  }
})