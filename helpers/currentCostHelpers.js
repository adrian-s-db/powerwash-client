const moment = require('moment');

export function runningCost(energyPrice, energyCons) {
  return Number(energyPrice * energyCons / 1000).toFixed(2);;
}

export function dailyAverageCost (hourlyEnergyPrices, energyCons) {
  return Number(hourlyEnergyPrices.reduce((a, b) => a + b) / 24 * energyCons / 1000).toFixed(2);
}

export function dailyMinCost (hourlyEnergyPrices, energyCons) {
  return Number(hourlyEnergyPrices.reduce((a,b) => a < b ? a : b) * energyCons / 1000).toFixed(2);
}
