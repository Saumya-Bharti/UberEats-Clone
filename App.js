import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text , View , Image} from 'react-native';
import Home from './screens/home';
import About from './components/RestaurentDetails/about';
import { Divider } from 'react-native-elements/dist/divider/Divider';
import RestaurantDetails from './screens/restaurantDetails';

export default function App() {
  return (
    <View style = {styles.container}>
      <RestaurantDetails />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop : 20,
    flex: 1,
    backgroundColor: '#fff',
  },
});
