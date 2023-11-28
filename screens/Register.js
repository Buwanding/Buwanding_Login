import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';
import { View } from "react-native";
import React from 'react';
import { Button, Text, TextInput } from "react-native-paper";
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#0066ff', 
  },
};
const Register = ({ navigation }) => {
  const [showPass, setShowPass] = React.useState(true);
  return (
    <PaperProvider theme={theme}>
        <View style={{ flex: 1, justifyContent: "center" }}>
      <Text variant="displayMedium" style={{marginLeft: 140, marginBottom: 10, color: '#00008b', fontWeight:
    'bold'}}>Register</Text>
      <TextInput
        mode="outlined"
        placeholder="Email"
        label="Email"
        style={{ marginTop: 10, color: 'blue' }}

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
      <TextInput
        mode="outlined"
        placeholder="Re-Enter Password"
        label="Re-Enter Password"
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
        onPress={() => {alert('Succesful Register');navigation.navigate("Login")}}
        icon="account-plus"
        mode="contained"
        style={{ marginTop: 10 }}
      >
        Register
      </Button>
      <Button
        onPress={() => navigation.navigate("Login")}
        icon="arrow-left"
        mode="contained"
        style={{ marginTop: 10 }}
      >
        Go Back to Login
      </Button>
    </View>
    </PaperProvider>
    
  )
}

export default Register