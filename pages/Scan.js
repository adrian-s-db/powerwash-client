import React, { useState, useEffect, useCallback } from 'react';
import { Text, View, StyleSheet, Alert } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { useFocusEffect } from '@react-navigation/native';

import ScanToInfoNavButton from '../components/ScanToInfoNavButton';

import extractCode from '../helpers/scanhelpers';

export default function ScanPage({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [scannedCode, setScannedCode] = useState(null);

  // Get or check camera permission
  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  // Clear data from previous scan
  useFocusEffect(
    useCallback(() => {
      setScanned(false);
      setScannedCode(null);
    }, [])
  )

  const handleBarCodeScanned = async ({ _, data }) => {
    const qrData = extractCode(data);
    if (qrData) {
      setScanned(true);
      setScannedCode(qrData);
    } else {
      setScanned(true);
      Alert.alert('Wrong QR code!', [
        {
          text: 'OK',
          onPress: () => setScanned(false),
        },
      ]);
    }
  };

  // TODO: Add proper permission handling
  if (hasPermission === null) {
    return <Text>Requesting access to camera</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={[StyleSheet.absoluteFill, styles.container]}
      >
        <View style={styles.layerTop}>
          <View style={styles.infoContainer}>
            <Text style={styles.infoText}>
              {scanned && scannedCode ? 'Scanned successfully!' : "Scan a washing machine's QR code to get started!"}
            </Text>
          </View>
        </View>
        <View style={styles.layerCenter}>
          <View style={styles.layerLeft} />
          <View style={styles.focused} />
          <View style={styles.layerRight} />
        </View>
        <View style={styles.layerBottom}>
          {scanned && scannedCode && (
            <View>
              <ScanToInfoNavButton
                navigation={navigation}
                scannedCode={scannedCode}
              />
            </View>
          )}
        </View>
      </BarCodeScanner>
    </View>
  );
}

const opacity = '#1a68c7e1';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  layerTop: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    flex: 2,
    backgroundColor: opacity,
  },
  layerCenter: {
    height: 200,
    flexDirection: 'row',
  },
  layerLeft: {
    flex: 1,
    backgroundColor: opacity,
  },
  focused: {
    width: 200,
  },
  layerRight: {
    flex: 1,
    backgroundColor: opacity,
  },
  layerBottom: {
    flex: 2,
    backgroundColor: opacity,
    justifyContent: 'center',
    alignItems: 'center'
  },
  infoContainer: {
    width: 250,
    borderRadius: 10,
    padding: 10,
    marginBottom: 30,
  },
  infoText: {
    fontSize: 25,
    color: '#EEEEEE',
    fontWeight: '400',
    textAlign: 'center',
  }
});
