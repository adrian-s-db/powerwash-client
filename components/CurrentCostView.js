import { View, StyleSheet, Dimensions } from 'react-native';
import { Text } from 'react-native-elements';
import React from 'react';

import { runningCost, dailyAverageCost, dailyMinCost } from '../helpers/currentCostHelpers';

const CurrentCostView = ({currentEnergyPrice, consPerCycle, todayEnergyPrices}) => {

  const currentCost = runningCost(currentEnergyPrice, consPerCycle);
  const todayAverageCost = dailyAverageCost(todayEnergyPrices, consPerCycle);
  const todayMinCost = dailyMinCost(todayEnergyPrices, consPerCycle);

  return (
    <View style={styles.currentCostInfoContainer}>
          <Text h4 style={styles.currentCostInfoText}>
            💡 Running it now: {currentCost}€
          </Text>
          <Text h4 style={styles.currentCostInfoText}>
            💰 Today's minimum cost: {todayMinCost}€
          </Text>
          <Text h4 style={styles.currentCostInfoText}>
            💸 Max price difference: {(currentCost - todayMinCost).toFixed(2)}€
          </Text>
          <Text h4 style={styles.currentCostInfoText}>
            📊 Average cost today: {todayAverageCost}€
          </Text>
        </View >
  )
}

const styles = StyleSheet.create({
  currentCostInfoContainer: {
    justifyContent: 'space-between',
    marginTop: 5,
    marginHorizontal: 5,
    marginBottom: 0,
    width: Dimensions.get('window').width - 40,
    borderRadius: 12
  },
  currentCostInfoText: {
    color: '#EEEEEE',
    marginBottom: 1
  }
})

export default CurrentCostView