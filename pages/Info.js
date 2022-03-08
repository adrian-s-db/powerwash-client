import { useContext, useState } from 'react';
import { View, StyleSheet, Image, Dimensions } from 'react-native';

import getWashingMachineData from '../services/EPRELapiService';
import saveWashingMachineData from '../services/MachinesDBService';
import {
  getCurrentEnergyPrice,
  getMultidayHourlyEnergyPrices,
} from '../services/REDapiService';
import AuthContext from '../AuthContext';

import GraphFlatList from '../components/GraphFlatList';
import MoreInfoToggle from '../components/MoreInfoToggle';
import CurrentCostView from '../components/CurrentCostView';
import ToggleInfoButton from '../components/ToggleInfoButton';
import MachineInfoHeader from '../components/MachineIdentifier';
import Loader from '../components/Loader';
import ToggleSaveMachineButton from '../components/SaveMachineButton';
import ToHomeButton from '../components/ToHomeButton';

export default function InfoPage({ route, navigation } ) {
  const user = useContext(AuthContext);

  const { washingMachineCode } = route.params;

  const [loading, setLoading] = useState(true);
  const [displayToggle, setDisplayToggle] = useState(false);

  const [machineData, setMachineData] = useState(null);
  const [currentEnergyPrice, setCurrentEnergyPrice] = useState(null);
  const [hourlyEnergyData, setHourlyEnergyData] = useState([]);

  useState(() => {
    async function getData() {
      const machineDataFetch = await getWashingMachineData(washingMachineCode);
      setMachineData(machineDataFetch);
      saveWashingMachineData(machineDataFetch);
      const currentPrice = await getCurrentEnergyPrice();
      setCurrentEnergyPrice(currentPrice);
      const multidayHourlyEnergyPrices = await getMultidayHourlyEnergyPrices();
      setHourlyEnergyData(multidayHourlyEnergyPrices);
      setLoading(false);
    }
    getData();
  }, []);

  if (loading) {
    return <Loader />;
  } else {
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <MachineInfoHeader machineData={machineData} />
          <ToggleInfoButton
            displayToggle={displayToggle}
            setDisplayToggle={setDisplayToggle}
          />
          {user && (
            <ToggleSaveMachineButton
              washingMachineCode={machineData.modelIdentifier}
            />
          )}
        </View>
        <MoreInfoToggle machineData={machineData} display={displayToggle} />
        <CurrentCostView
          currentEnergyPrice={currentEnergyPrice}
          consPerCycle={machineData.energyConsPerCycle}
          todayEnergyPrices={hourlyEnergyData[0].prices}
        />
          <ToHomeButton
            navigation={navigation}
            styles={styles.homeButton}
          />
        <GraphFlatList
          style={styles.graghFlatList}
          data={hourlyEnergyData}
          machineCons={machineData.energyConsPerCycle}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#1a68c7',
    padding: 10,
    paddingTop: 30,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginHorizontal: 10,
    marginTop: 10,
    width: Dimensions.get('window').width - 40,
  },
  graghFlatList: {
    marginTop: 30,
    backgroundColor: 'red',
  },
  homeButton: {
    position: 'absolute',
    bottom: 20
  }
});
