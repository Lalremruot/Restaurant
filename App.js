import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './src/Components/Screens/WelcomeScreen';
import SignInScreen from './src/Components/Screens/SignInScreen'
import TabNavigation from './src/Components/Screens/TabNavigation';
import BurgerScreen from './src/Components/ProductScreen/BurgerScreen';
import FriedRiceScreen from './src/Components/Screens/FriedRiceScreen';



const Stack = createNativeStackNavigator();



export default function App() {
  return (
    <NavigationContainer initialRouteName="Welcome">
  <Stack.Navigator>
    <Stack.Screen options={{ headerShown: false }} name="Welcome" component={WelcomeScreen} />
    <Stack.Screen options={{ headerShown: false }} name="SignIn" component={SignInScreen} />
    <Stack.Screen options={{ headerShown: false }} name="Home" component={TabNavigation} />
    <Stack.Screen options={{ headerShown: false }} name="Burger" component={BurgerScreen} />
    <Stack.Screen options={{ headerShown: false }} name="Fried" component={FriedRiceScreen} />
    
  </Stack.Navigator>                        
</NavigationContainer>

);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
