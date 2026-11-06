import HomeScreen from './src/screens/HomeScreen';
import {useState} from 'react';
import SideMenu from './src/components/side_menu';
import BlueToothScanner from './src/screens/BlueToothScanner';
import LightHistory from './src/screens/LightHistory';
import Settings from './src/screens/Settings';


function App() {
  const [screen, setScreen] = useState('home');

  function changeScreen(newScreen: string) {
    setScreen(newScreen);
  }

  return (
    <>

    <SideMenu onChangeScreen={changeScreen} />

    {screen === 'home' && <HomeScreen />}

    {screen === 'bluetooth' && <BlueToothScanner />}

    {screen === 'light_history' && <LightHistory />}

    {screen === 'settings' && <Settings />} 

    </>
  );
}

export default App;