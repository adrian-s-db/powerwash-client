import { useContext, useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

import { auth } from '../firebaseAuth';
import AuthContext from '../AuthContext';

import Loader from '../components/Loader';
import ToScanButton from '../components/ToScanButton';
import SignOutButton from '../components/SignOutButton';
import AuthedScanButton from '../components/AuthedScanButton';
import DashBoardHeader from '../components/DashBoardHeader';
import DashBoardMachinesList from '../components/DashBoardMachinesList';

export default function AuthorizedApp({navigation}) {
  const {user, setUser} = useContext(AuthContext);

    return (
      <View style={styles.container}>
        <DashBoardHeader
          savedMachinesLength = {user?.savedMachines.length}
        />
        <DashBoardMachinesList
          machineIds={user?.savedMachines}
        />

        <AuthedScanButton
        navigation={navigation}
        />
        <SignOutButton/>
      </View>
    );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a68c7',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
