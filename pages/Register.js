import { KeyboardAvoidingView, StyleSheet, Image } from 'react-native';
import React, { useState } from 'react';

import { auth } from '../firebaseAuth';
import { saveUser } from '../services/UsersDbService';

import AuthenticationInput from '../components/AuthenticationInput';
import SubmitAuthButton from '../components/SubmitAuthButton';
import logo from '../assets/logo.png';

const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((data) => {
        const input = {};
        input.uid = data.user.uid;
        input.email = data.user.email;
        saveUser(input);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <Image
        source={logo}
        style={{ marginBottom: 50, height: 100, width: 100 }}
      />
      <AuthenticationInput
        email={email}
        password={password}
        setEmail={setEmail}
        setPassword={setPassword}
      />
      <SubmitAuthButton auth={auth} onPress={handleSignUp} title="Sign up" />
    </KeyboardAvoidingView>
  );
};

export default RegisterPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1a68c7',
  },
  inputContainer: {
    width: '80%',
  },
  input: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },
  buttonContainer: {
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  button: {
    backgroundColor: '#0782F9',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
});
