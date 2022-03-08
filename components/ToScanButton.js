import { StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

const ToScanButton = ({navigation}) => {
  return (
    <Button
      containerStyle={styles.buttonContainer}
      title="... or continue without an account"
      type="clear"
      titleStyle={styles.buttonTitle}
      onPress={() => navigation.navigate('Scan')}
    />
  );
};

export default ToScanButton;

const styles = StyleSheet.create({
  buttonContainer: {
    width: 200,
    marginHorizontal: 50,
    marginVertical: 10,
  },
  buttonTitle: {
    color: '#EEEEEE',
  }
})
