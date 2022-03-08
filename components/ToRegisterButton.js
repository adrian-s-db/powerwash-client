import { StyleSheet } from 'react-native'
import { Button } from 'react-native-elements'

const ToRegisterButton = ({navigation}) => {
  return (
    <Button
          title="Sign up"
          buttonStyle={{
            borderColor: '#01abf6',
          }}
          type="outline"
          titleStyle={styles.buttonTitle}
          containerStyle={styles.buttonContainer}
          onPress={() => {navigation.navigate('Register')}}
        />
  )
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 200,
    marginHorizontal: 50,
    marginVertical: 10,
  },
  buttonTitle: {
    color: '#EEEEEE'
  }
})

export default ToRegisterButton