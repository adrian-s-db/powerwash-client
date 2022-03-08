import { StyleSheet } from 'react-native'
import { Button } from 'react-native-elements';

const ToLoginButton = ({navigation}) => {
  return (
    <Button
          title="Log in"
          buttonStyle={styles.logInButton}
          type="outline"
          titleStyle={styles.logInButtonTitle}
          containerStyle={styles.buttonContainer}
          onPress={() => {
            navigation.navigate('Login');
          }}
    />
  )
}

export default ToLoginButton

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
  }
})