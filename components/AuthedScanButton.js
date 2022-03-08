import { StyleSheet } from 'react-native'
import { Button } from 'react-native-elements';


const AuthedScanButton = ({navigation}) => {
  return (
    <Button
          title="Scan"
          buttonStyle={styles.logInButton}
          type="outline"
          titleStyle={styles.logInButtonTitle}
          containerStyle={styles.buttonContainer}
          onPress={() => {
            navigation.navigate('Scan');
          }}
    />
  )
}

export default AuthedScanButton

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
    marginVertical: 10,
    position: 'absolute',
    bottom: 70,
  }
})