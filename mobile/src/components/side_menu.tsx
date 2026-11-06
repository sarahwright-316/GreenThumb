//create a menu that appears when the three lines are pressed
//create buttons that allow the user to switch screens 

import {View, Text, Pressable, StyleSheet} from 'react-native';


type SideMenuProps = {
onChangeScreen: (newScreen: string) => void;
    };

function SideMenu({onChangeScreen}: SideMenuProps) {

  return (
    <View style={{paddingTop: 70, paddingLeft: 20}}>
        <Pressable onPress={() => onChangeScreen('home')}>
        <Text>Home</Text>
        </Pressable>


        <Pressable onPress={() => onChangeScreen('bluetooth')}>
        <Text>Bluetooth</Text>
        </Pressable>

        <Pressable onPress={() => onChangeScreen('light_history')}>
        <Text>Light History</Text>
        </Pressable>

        <Pressable onPress={() => onChangeScreen('settings')}>
        <Text>Settings</Text>
        </Pressable>

    </View>
  );
}

export default SideMenu;
    

   
