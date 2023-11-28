import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import Main from './screens/Main';
import Login from './screens/Login';
import Register from './screens/Register';
import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  PaperProvider,
  MD3LightTheme as DefaultTheme,
} from "react-native-paper";
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <PaperProvider theme={DefaultTheme}>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar style="auto" />
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              options={{ headerShown: false }}
              name="Login"
              component={Login} 
            />
            <Stack.Screen
              options={{ headerShown: false }}
              name="Register"
              component={Register}
            /><Stack.Screen
            options={{ headerShown: false }}
            name="Main"
            component={Main}
          />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </PaperProvider>
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