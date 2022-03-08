import { KeyboardAvoidingView, StyleSheet, Image } from 'react-native';
import { useState } from 'react';

import { auth } from '../firebaseAuth'

import AuthenticationInput from '../components/AuthenticationInput';
import SubmitAuthButton from '../components/SubmitAuthButton';
import logo from '../assets/logo.png'

const LoginPage = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    auth
    .signInWithEmailAndPassword(email, password)
    .catch(error => {
      alert(error.message)
    })
  }

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <Image source={logo} style={{marginBottom: 50, height:100, width:100}}/>
      <AuthenticationInput
        email={email}
        password={password}
        setEmail={setEmail}
        setPassword={setPassword}
      />
      <SubmitAuthButton
        auth={auth}
        onPress={handleLogin}
        title='Log in'
      />
    </KeyboardAvoidingView>
  );
};

export default LoginPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1a68c7',
  }
});
