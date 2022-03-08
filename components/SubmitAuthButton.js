import { StyleSheet } from 'react-native'
import { Button } from 'react-native-elements'

const SubmitAuthButton = ({onPress, title, auth}) => {
  return (
    <Button
          auth={auth}
          title={title}
          buttonStyle={styles.button}
          type="outline"
          titleStyle={styles.title}
          containerStyle={styles.buttonContainer}
          onPress={onPress}
    />
  )
}

export default SubmitAuthButton

const styles = StyleSheet.create({
  button: {
    backgroundColor:'#eeeeee',
  },
  title: {
    color: '#1a68c7'
  },
  buttonContainer: {
    width: 200,
    marginHorizontal: 50,
    marginVertical: 30,
  }
})