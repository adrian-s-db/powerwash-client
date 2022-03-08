import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { runningCost } from '../helpers/currentCostHelpers'

const MachineCardInfo = ({machineData, currentPrice}) => {
  const cost = runningCost(machineData.energyConsPerCycle, currentPrice)
  return (
    <View style={styles.container}>
      <Text>{cost}</Text>
    </View>
  )
}

export default MachineCardInfo

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red'
  }
})