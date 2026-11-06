import {Stylesheet, Text, View} from 'react-native'
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
//left off with asking chat about ios permissions 