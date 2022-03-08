import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';

const DashBoardHeader = ({savedMachinesLength}) => {
  return (
    <View style={styles.headerContainer}>

    <Text h3 style={styles.headerText}>
        {!savedMachinesLength && "Scan your first machine to get started!"}
        {savedMachinesLength == 1 && "This is your saved machine:"}
        {savedMachinesLength > 1 && "These are your saved machines:"}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerText: {
    color: '#EEEEEE',
    fontWeight: '600'
  },
  headerContainer: {
    margin: 10,
    position: 'absolute',
    top: 40
  }
})

export default DashBoardHeader;
