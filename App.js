import { StatusBar } from 'expo-status-bar';
import {styles} from './styles'
import Weather from './Weather';
import { View } from 'react-native';

export default function App() {

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Weather/>
    </View>
  );
}

