import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';
import { View } from "react-native";
import React from 'react';
import { Button, Text, TextInput } from "react-native-paper";
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#00008b', 
  },
};
const Login = ({ navigation }) => {
  const [showPass, setShowPass] = React.useState(true);
  return (
    <PaperProvider theme={theme}>
      <View style={{ flex: 1,justifyContent: "center" }}>
      <Text variant="displayMedium" style={{textAlign:'center' , marginBottom: 10, color: '#00008b', fontWeight:
    'bold'}}>Login</Text>
      <TextInput
        mode="outlined"
        placeholder="Email"
        label="Email"
        style={{ marginTop: 10, color: '#00008b' }}
      />
      <TextInput
        mode="outlined"
        placeholder="Password"
        label="Password"
        secureTextEntry={showPass}
        right={
          <TextInput.Icon
            icon={!showPass ? "eye" : "eye-off"}
            onPress={() => setShowPass(!showPass)}
          />
        }
        style={{ marginTop: 10 }}
      />
      <Button 
       onPress={() => {alert("Succesfully Login!");navigation.navigate("Main")}}
      icon="login" 
      mode="contained" 
      style={{ marginTop: 10,borderBlockColor: '#00008b' }}>
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
      <Button
        onPress={() => navigation.navigate("AccountRecovery")}
        icon="account-box"
        mode="contained"
        style={{ marginTop: 10 }}
      >
        AccountRecovery
      </Button>
      <Button
        onPress={() => navigation.navigate("LandingPage")}
        icon="arrow-left"
        mode="contained"
        style={{ marginTop: 10 }}
      >
        Back
      </Button>
    </View>
    </PaperProvider>
    
  )
}

export default Login

