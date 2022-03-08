import { View, StyleSheet } from 'react-native';

import Logo from '../components/Logo';
import ToLoginButton from '../components/ToLoginButton';
import ToRegisterButton from '../components/ToRegisterButton';
import ToScanButton from '../components/ToScanButton';

function HomePage({ navigation }) {
  return (
    <View style={styles.container}>
      <Logo />
      <ToLoginButton navigation={navigation} />
      <ToRegisterButton navigation={navigation} />
      <ToScanButton navigation={navigation} />
    </View>
  );
}

export default HomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1a68c7',
  }
});

