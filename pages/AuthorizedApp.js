import { useContext } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

import { auth } from '../firebaseAuth';
import AuthContext from "../AuthContext";

export default function AuthorizedApp() {
  const user = useContext(AuthContext);
  const handleSignOut = () => {
    auth
    .signOut()
    .catch((error) => {
      alert(error.message)
    });
  };
  return (
    <View style={styles.container}>
      <Text>You are authorized!</Text>
      <Text>Your email is {auth.currentUser?.email}</Text>
      <Text>The value of the context passed is {user}</Text>
      <Button onPress={handleSignOut} title="Log out"></Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
