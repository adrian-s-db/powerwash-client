import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

import { auth } from '../firebaseAuth';

export default function AuthorizedApp() {
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
