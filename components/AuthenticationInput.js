import { View, TextInput, StyleSheet } from 'react-native'

const AuthenticationInput = ({email, password, setEmail, setPassword}) => {
  return (
    <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={text => setEmail(text)}
          style={styles.input}
        ></TextInput>
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={text => setPassword(text)}
          style={styles.input}
          secureTextEntry
        ></TextInput>
    </View>
  )
}

export default AuthenticationInput

const styles = StyleSheet.create({
  inputContainer: {
    width: 200
  },
  input: {
    backgroundColor: '#EEEEEE',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 10,
  }
})