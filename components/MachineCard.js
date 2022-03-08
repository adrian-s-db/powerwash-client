import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const MachineInfoCard = ({machineId}) => {
  return (
    <View style={styles.container}>
      <Text>This machine has id {machineId}</Text>
    </View>
  )
}

export default MachineInfoCard

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EEEEEE99',
    marginBottom: 10,
    width: '100%'
  }
})