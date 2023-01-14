import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import { Button } from 'react-native-paper';
import CartScreen from './screens/CartScreen';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import SavedItemsScreen from './screens/SavedItemsScreen';
 
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={({navigation}) => ({
          headerRight: _ => (
            <>
              <Button onPress={_ => navigation.push("Cart")}>🛒</Button>
              <Button onPress={_ => navigation.push("SavedItems")}>⭐</Button>
            </>
          )
        })}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Cart" component={CartScreen} options={{headerRight: null}} />
        <Stack.Screen name="Product" component={ProductScreen} />
        <Stack.Screen name="SavedItems" component={SavedItemsScreen} options={{headerRight: null}}  />
      </Stack.Navigator>
    </NavigationContainer>
  );
}