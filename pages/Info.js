import { useState } from "react";
import { View, StyleSheet, Image, Dimensions} from "react-native";

import getWashingMachineData from "../services/EPRELapiService";
import saveWashingMachineData from "../services/MachinesDBService";
import {getCurrentEnergyPrice, getMultidayHourlyEnergyPrices} from "../services/REDapiService";

import GraphFlatList from "../components/GraphFlatList";
import MoreInfoToggle from "../components/MoreInfoToggle";
import CurrentCostView from "../components/CurrentCostView";
import ToggleInfoButton from "../components/ToggleInfoButton";
import MachineInfoHeader from "../components/MachineIdentifier";
import Loader from "../components/Loader";

export default function InfoPage({ route }) {
  const { washingMachineCode } = route.params;

  const [loading, setLoading] = useState(true);
  const [displayToggle, setDisplayToggle] = useState(false);

  const [machineData, setMachineData] = useState(null);
  const [currentEnergyPrice, setCurrentEnergyPrice] = useState(null);
  const [hourlyEnergyData, setHourlyEnergyData] = useState([])

  useState(() => {
    async function getData () {
      const machineDataFetch = await getWashingMachineData(washingMachineCode);
      setMachineData(machineDataFetch);
      saveWashingMachineData(machineDataFetch);
      const currentPrice = await getCurrentEnergyPrice();
      setCurrentEnergyPrice(currentPrice);
      const multidayHourlyEnergyPrices = await getMultidayHourlyEnergyPrices();
      setHourlyEnergyData(multidayHourlyEnergyPrices);
      setLoading(false)
    };
    getData();
  }, []);

  if (loading) {
    return(
      <Loader/>
    )
  } else {
    return(
      <View style={styles.container}>
        <View style={styles.headerContainer}>
            <MachineInfoHeader
              machineData={machineData}
            />
            <ToggleInfoButton
              displayToggle={displayToggle}
              setDisplayToggle={setDisplayToggle}
            />
        </View>
        <MoreInfoToggle
          machineData={machineData}
          display={displayToggle}
        />
        <CurrentCostView
          currentEnergyPrice={currentEnergyPrice}
          consPerCycle={machineData.energyConsPerCycle}
          todayEnergyPrices={hourlyEnergyData[0].prices}
        />
        <GraphFlatList
          style={styles.graghFlatList}
          data={hourlyEnergyData}
          machineCons={machineData.energyConsPerCycle}
        />
      </View>
    )
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
    margin: 10,
    width: Dimensions.get('window').width - 40
  },
  graghFlatList: {
    marginTop: 30
  }
})