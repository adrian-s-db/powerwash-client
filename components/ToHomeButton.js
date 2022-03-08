import { StyleSheet } from 'react-native'
import { Button } from 'react-native-elements';

const ToHomeButton = ({navigation}) => {
  return (
    <Button
          title="Back to home"
          buttonStyle={styles.logInButton}
          type="outline"
          titleStyle={styles.logInButtonTitle}
          containerStyle={styles.buttonContainer}
          onPress={() => {
            navigation.navigate('Authorized');
          }}
    />
  )
}

export default ToHomeButton

const styles=StyleSheet.create({
  logInButton: {
    backgroundColor:'#eeeeee',
  },
  logInButtonTitle: {
    color: '#1a68c7'
  },
  buttonContainer: {
    width: 200,
    marginHorizontal: 50,
  }
})