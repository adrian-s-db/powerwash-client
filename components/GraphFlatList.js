import { SafeAreaView, View, FlatList, StyleSheet, Dimensions } from 'react-native';
import { Text } from 'react-native-elements';
import { HourlyPriceChart } from './HourlyPriceChart';

// TODO: Conditional rendering for tomorrow
const GraphFlatList = ({data, machineCons}) => {

  const renderItem = ({item}) => { return(
      <View style={styles.item}>
          <Text h4 style={{color:'#EEEEEE', textAlign: 'center', marginBottom: 12}}>
            {item.day}
          </Text>
        <HourlyPriceChart day={item.day} hourlyPrices={item.prices} machineCons={machineCons}/>
      </View>
    )};

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        // TODO: Make it snap using snaptoalignment or snaptooffsets
        horizontal={true}
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.day}
        initialScrollIndex={1}
        getItemLayout={(data, index) => (
          {length: Dimensions.get('window').width - 60 + 30, offset: (Dimensions.get('window').width - 60 +30 ) * index, index}
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  item: {
    margin: 15,
  },
});

export default GraphFlatList;