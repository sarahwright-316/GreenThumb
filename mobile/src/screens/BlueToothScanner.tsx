import React from 'react';
import {View, Text} from 'react-native';
import ConnectDevice from '../modules/sensor_communication/ble_manager';

function BluetoothScanner() {
  return (
    <View style={{flex: 1, padding: 20}}>
      <Text>Bluetooth Scanner</Text>
      <ConnectDevice />
    </View>
  );
}

export default BluetoothScanner;