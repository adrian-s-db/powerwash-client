import { View, StyleSheet, Dimensions} from 'react-native';
import { Text } from 'react-native-elements'
import React from 'react';

export default function MoreInfoToggle ({machineData, display}) {
  return display ? (
  <View style={styles.container}>
    <View style={styles.subContainer}>
      <Text h4 style={{fontWeight: '700'}}>⚡Class: {machineData.energyClass}</Text>
      <Text h4 style={{fontWeight: '700'}}>🔌{machineData.energyConsPerCycle} KWh/wash</Text>
    </View>

    <View style={styles.subContainer}>
      <Text h4>👂 Class {machineData.noiseClass}</Text>
      <Text h4> 🧺 {machineData.ratedCapacity} L</Text>
      <Text h4>💧 {machineData.waterCons} L/wash</Text>
    </View>
  </View>) : null
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    justifyContent: 'space-between',
    marginLeft: 5,
    marginBottom: 5,
    width: Dimensions.get('window').width - 40,
    borderRadius: 12,
    backgroundColor: '#EEEEEE99',
  },
  infoText: {
    color: '#1a68c7'
  },
  subContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5
  }
})