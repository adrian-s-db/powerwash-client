import { Button } from 'react-native-elements';
import { StyleSheet } from 'react-native';
import React from 'react';

import { auth } from '../firebaseAuth';

const SignOutButton = () => {
  const handleSignOut = () => {
    auth.signOut().catch((error) => {
      alert(error.message);
    });
  };

  return (
    <Button
      title="Sign out"
      buttonStyle={{
        borderColor: '#01abf6',
      }}
      type="outline"
      titleStyle={styles.buttonTitle}
      containerStyle={styles.buttonContainer}
      onPress={handleSignOut}
    />
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: 200,
    marginHorizontal: 50,
    marginTop: 0,
    marginBottom: 15,
    position: 'absolute',
    bottom: 15
  },
  buttonTitle: {
    color: '#EEEEEE',
  },
});

export default SignOutButton;
