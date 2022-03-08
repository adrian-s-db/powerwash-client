import { LineChart } from 'react-native-chart-kit';
import { View, Dimensions } from 'react-native';

export function HourlyPriceChart ({hourlyPrices, machineCons}) {
  const hourlyRunningCost = hourlyPrices.map((price) => Number(price * machineCons / 1000));

  return(
    <View>
      <LineChart
    data={{
      labels: ['12am', '6am', '12pm', '6pm', '12am'],
      datasets: [
        {
          data: hourlyRunningCost
        }
      ]
    }}
    width={Dimensions.get('window').width - 60} // from react-native
    height={180}
    yAxisSuffix='€'
    chartConfig={{
      backgroundGradientFrom: "#01abf6",
      backgroundGradientFromOpacity: 0.7,
      backgroundGradientTo: "#373737",
      backgroundGradientToOpacity: 0,
      color: () => '#EEEEEE',
      labelColor: () => '#EEEEEE',
      style: {
        borderRadius: 10
      },
    }}
    withDots = {false}
    withInnerLines = {false}
    bezier
    style={{
      borderRadius: 16
    }}
  />
    </View>
  )
}