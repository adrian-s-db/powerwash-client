import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useState, useEffect } from 'react';

import { auth } from './firebaseAuth';
import AuthContext from './AuthContext';
import { getUserData } from './services/UsersDbService';

import HomePage from './pages/Home';
import ScanPage from './pages/Scan';
import InfoPage from './pages/Info';
import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';

import AuthorizedApp from './pages/AuthorizedApp';

export default function App() {
  const [user, setUser] = useState(null);
  const Stack = createStackNavigator();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((loggedInUser) => {
    const uid = loggedInUser?.uid;
      if (uid) {
        getUserData(uid)
        .then(data => setUser(data))
        .catch(e => console.error(e));
      } else {
        setUser(null);
      }
    });
    return unsubscribe;
  }, []);

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <AuthContext.Provider value={user}>
          <Stack.Navigator>
            {user ? (
              <>
                <Stack.Screen
                  name="Authorized"
                  component={AuthorizedApp}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="Scan"
                  component={ScanPage}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="Info"
                  component={InfoPage}
                  options={{ headerShown: false }}
                />
              </>
            ) : (
              <>
                <Stack.Screen
                  name="Home"
                  component={HomePage}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="Scan"
                  component={ScanPage}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="Info"
                  component={InfoPage}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="Login"
                  component={LoginPage}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="Register"
                  component={RegisterPage}
                  options={{ headerShown: false }}
                />
              </>
            )}
          </Stack.Navigator>
        </AuthContext.Provider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
