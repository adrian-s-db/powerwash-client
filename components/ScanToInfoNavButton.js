import { StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import React from 'react';

const ScanToInfoNavButton = ({navigation, scannedCode}) => {

  return (
    <Button
      title="Check machine data"
      buttonStyle={styles.dataButton}
      type="outline"
      titleStyle={styles.dataButtonTitle}
      containerStyle={styles.buttonContainer}
      onPress={() => {
        navigation.navigate('Info', {
          washingMachineCode: scannedCode,
        });
      }}
    />
  );
};

export default ScanToInfoNavButton;

const styles = StyleSheet.create({
  dataButton: {
    backgroundColor: '#eeeeee',
  },
  dataButtonTitle: {
    color: '#1a68c7',
  },
  buttonContainer: {
    width: 200,
  },
});
