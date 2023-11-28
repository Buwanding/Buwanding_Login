import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';
import { View } from "react-native";
import React from 'react';
import { Button, Text } from "react-native-paper";
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#33cccc', 
  },
};
const LandingPage = ({ navigation }) => {
  return (
    <PaperProvider theme={theme}>
      <View style={{ flex: 1,justifyContent: "center" }}>
      <Text variant="displayMedium" style={{marginLeft: 90, marginBottom: 10, color: '#33cccc', fontWeight:
    'bold'}}>LandingPage</Text>
     
      <Button 
       onPress={() => navigation.navigate("Login")}
      icon="login" 
      mode="contained" 
      style={{ marginTop: 10,borderBlockColor: '#33cccc' }}>
        Login
      </Button>
      <Button
        onPress={() => navigation.navigate("Register")}
        icon="account-plus"
        mode="contained"
        style={{ marginTop: 10 }}
      >
        Register
      </Button>
    </View>
    </PaperProvider>
    
  )
}

export default LandingPage