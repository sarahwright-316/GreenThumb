
import BleManager from 'react-native-ble-manager';
import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
} from 'react-native';

const ConnectDevice = () => {
  const [isScanning, setScanning] = useState(false);
  const [bleDevices, setDevices] = useState([]);

  useEffect(() => {
    BleManager.start({showAlert: false})
      .then(() => {
        console.log('Module Initialized');
        startScanning();
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    const stopListener = BleManager.onStopScan(() => {
      setScanning(false);
      handleGetConnectedDevices();
      console.log('Stop Scanning');
    });

    return () => stopListener.remove();
  }, []);

  const startScanning = () => {
    BleManager.scan({
      serviceUUIDs: [],
      seconds: 5,
      allowDuplicates: false,
    })
      .then(() => {
        console.log('Scan started');
        setScanning(true);
      })
      .catch(error => {
        console.error(error);
      });
  };

  const handleGetConnectedDevices = () => {
    BleManager.getDiscoveredPeripherals()
      .then(result => {
        if (result.length === 0) {
          console.log('No Devices Found');
          startScanning();
        } else {
          console.log('RESULT', JSON.stringify(result));
          const allDevices = result.filter(item => item.name !== null);
          setDevices(allDevices);
        }

        console.log('Discovered peripherals:', result);
      })
      .catch(error => {
        console.error(error);
      });
  };

  const renderItem = ({item, index}) => {
    return (
      <View style={styles.bleCard}>
        <Text style={styles.bleTxt}>{item.name}</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.bntTxt}>Connect</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {isScanning ? (
        <View style={styles.rippleView}>
          <Text>Scanning for devices...</Text>
        </View>
      ) : (
        <View>
          <FlatList
            data={bleDevices}
            keyExtractor={(item, index) => index.toString()}
            renderItem={renderItem}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  rippleView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  bleCard: {
    width: '90%',
    padding: 10,
    alignSelf: 'center',
    marginVertical: 10,
    backgroundColor: '#eeeeee',
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  bleTxt: {
    fontSize: 18,
    color: 'black',
  },

  bntTxt: {
    fontSize: 18,
    color: 'white',
  },

  button: {
    width: 100,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    backgroundColor: 'blue',
  },
});

export default ConnectDevice;
