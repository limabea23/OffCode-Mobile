import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './navigation/StackNavigator';
import Post from './pages/Post';

export default function App() {
  return (
    <View style={styles.container}>
      <Duvidas />
      <StatusBar style="light" />
    </View>
  );
}