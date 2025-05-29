import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './navigation/StackNavigator';
import Post from './pages/Post';

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}