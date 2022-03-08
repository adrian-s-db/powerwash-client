import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';

const DashBoardHeader = ({savedMachinesLength}) => {
  return (!savedMachinesLength  ?
    <View style={styles.headerContainer}>

    <Text h3 style={styles.headerText}>
        Scan your first machine to get started!
      </Text>
    </View> :null
  );
};

const styles = StyleSheet.create({
  headerText: {
    color: '#EEEEEE',
    fontWeight: '600'
  },
  headerContainer: {
    marginHorizontal: 20,
    marginTop: -40
  }
})

export default DashBoardHeader;
