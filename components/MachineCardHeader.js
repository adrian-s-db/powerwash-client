import { View, StyleSheet } from 'react-native';
import { Text, Divider } from 'react-native-elements';
import React from 'react';

const MachineCardHeader = ({machineData}) => {
  return (
    <View style={styles.machineInfoContainer}>
      <Text h3 h1Style={{ fontWeight: '700', color: '#373737'}}>
        {machineData.supplierOrTrademark}
      </Text>
      <Divider color="#eeeeee" />
      <Text h4 style={styles.machineInfo}>
        {machineData.modelIdentifier}
      </Text>
    </View>
  );
};

export default MachineCardHeader;

const styles = StyleSheet.create({
  machineInfoContainer: {
    marginLeft: 15,
  },
  machineInfo: {
    color: '#eeeeee',
  }
})