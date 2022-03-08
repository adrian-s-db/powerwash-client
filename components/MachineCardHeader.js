import { View, StyleSheet } from 'react-native';
import { Text, Divider } from 'react-native-elements';
import React from 'react';

const MachineCardHeader = ({machineData}) => {
  return (
    <View style={styles.machineInfoContainer}>
      <Text h3 h1Style={{ fontWeight: '600', color: '#373737'}}>
        {machineData.supplierOrTrademark}
      </Text>
      <Divider />
      <Text h4 style={styles.machineInfo}>
        {machineData.modelIdentifier}
      </Text>
    </View>
  );
};

export default MachineCardHeader;

const styles = StyleSheet.create({
  machineInfoContainer: {
    alignSelf: 'flex-start',
  },
  machineInfo: {
    color: '#1a68c7',
  }
})