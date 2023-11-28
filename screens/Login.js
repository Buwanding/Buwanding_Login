import { Button, Text, TextInput } from "react-native-paper";
import React from 'react'

const Login = () => {
  return (
    <View>
      <Text>Login</Text>
      <TextInput
        mode="outlined"
        placeholder="Email"
        label="Email"
        style={{ marginTop: 10 }}
        error={true}
      />
      <TextInput></TextInput>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({})