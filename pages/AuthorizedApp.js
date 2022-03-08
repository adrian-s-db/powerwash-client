import { useContext, useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

import { auth } from '../firebaseAuth';
import AuthContext from '../AuthContext';
import { getUserData } from '../services/UsersDbService';

import Loader from '../components/Loader';
import ToScanButton from '../components/ToScanButton';

export default function AuthorizedApp({navigation}) {
  const user = useContext(AuthContext);

  const [userData, setUserData] = useState();
  const [loading, setLoading] = useState(true);

  const handleSignOut = () => {
    auth.signOut().catch((error) => {
      alert(error.message);
    });
  };

  useEffect(async () => {
    const fetchedData = await getUserData(user);
    setUserData(fetchedData);
    setLoading(false);
  }, []);

  if (loading) {
    return <Loader />;
  } else {
    return (
      <View style={styles.container}>
        <Text>You are authorized!</Text>
        <Text>Your email is {auth.currentUser?.email}</Text>
        <Text>The value of the context passed is {user}</Text>
        <Text>The machines on your account are: {userData.savedMachines}</Text>
        <Button onPress={handleSignOut} title="Log out"></Button>
        <StatusBar style="auto" />

        <ToScanButton
          navigation={navigation}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
