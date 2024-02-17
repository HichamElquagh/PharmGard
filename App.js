
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ResetPasswordScreen from './src/screens/ResetPasswordScreen';
import PharmacyList from './src/screens/PharmacyListScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
      // <View style={styles.container}> 
    <NavigationContainer>
        <StatusBar style="auto" />
        <Stack.Navigator>
          <Stack.Screen name="PharmacyList" component={PharmacyList} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} />
          
        </Stack.Navigator>
      </NavigationContainer>
    //  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});