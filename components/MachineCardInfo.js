import { StyleSheet, View } from 'react-native'
import { Text } from 'react-native-elements'
import React from 'react'
import { runningCost } from '../helpers/currentCostHelpers'

const MachineCardInfo = ({machineData, currentPrice}) => {
  const cost = runningCost(machineData.energyConsPerCycle, currentPrice)
  return (
    <View style={styles.container}>
      <Text h5 style={{fontWeight: '600',  textAlign: 'center'}}>{cost}</Text>
      <Text h5 style={{fontWeight: '600',  textAlign: 'right'}}>/wash</Text>
    </View>
  )
}

export default MachineCardInfo

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  }
})