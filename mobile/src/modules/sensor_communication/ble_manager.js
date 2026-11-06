import {StyleSheet, Text, View} from 'react-native'
import React from 'react'
import BleManager from 'react-native-ble-manager'

const connectDevice = () => {
    const [isScanning, setScanning] = useState(false)
    const [bleDevices, setDevices] = useState([])
}

UseEffect (() =>
    BleManager.start ({showAlert: false}).then(() => {
        console.log("Module Initialized");
    })
)

const startScanning = () => {
    BleManager.scan({ serviceUUIDs: [], seconds: 5 }).then(() => {
    // Success code
    console.log("Scan started");
});
}
//left off with asking chat about ios permissions 