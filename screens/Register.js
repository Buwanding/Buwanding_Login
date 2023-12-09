import { View, ToastAndroid } from "react-native";
import React from "react";
import { Button, Text, TextInput } from "react-native-paper";
import fetchServices from "./Services/fetchServices";

export default function Register({ navigation }) {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [repassword, setRepassword] = React.useState("");
  const [showPass, setShowPass] = React.useState(false);
  const [showRePass, setShowRePass] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [isError, setIsError] = React.useState(false);

  const showToast = (message = "Something wen't wrong") => {
    ToastAndroid.show(message, 3000);
  };

  const handleRegistration = async () => {
    try {
      setLoading(true);

      if (name === "" || email === "" || password === "" || repassword === "") {
        showToast("Please input required data");
        setIsError(true);
        return false;
      }

      if (password !== repassword) {
        showToast("Please match the password");
        setIsError(true);
        return false;
      }

      const url = "http://192.168.1.5:8000/api/v1/register";
      const data = {
        name,
        email,
        password,
      };
 

      const result = await fetchServices.postData(url, data);
      
      if (result?.message != null) {
        showToast(result?.message);
      } else {
        navigation.navigate("Login");
      }
    } catch (e) {  
      showToast(e.toString());
    } finally {
      setLoading(false);
    }
  };

  return (
    <View styles={{ flex: 1, justifyContent: "center"}}>
          <Text variant="displayMedium"style={{textAlign:'center' , marginBottom: 10, color: '#00008b', fontWeight:
        'bold'}}>Register</Text>
          <TextInput
            mode="outlined"
            placeholder="Name"
            label="Name"
            style={{ marginTop: 10 }}
            value={name}
            onChangeText={setName}
            error={isError}
          />
          <TextInput
            mode="outlined"
            placeholder="Email"
            label="Email"
            style={{ marginTop: 10 }}
            value={email}
            onChangeText={setEmail}
            error={isError}
          />
          <TextInput
            mode="outlined"
            placeholder="Password"
            label="Password"
            secureTextEntry={!showPass}
            right={
              <TextInput.Icon
                icon={showPass ? "eye" : "eye-off"}
                onPress={() => setShowPass(!showPass)}
              />
            }
            style={{ marginTop: 10 }}
            value={password}
            onChangeText={setPassword}
            error={isError}
          />
          <TextInput
            mode="outlined"
            placeholder="Re-type Password"
            label="Re-type Password"
            secureTextEntry={!showRePass}
            right={
              <TextInput.Icon
                icon={showPass ? "eye" : "eye-off"}
                onPress={() => setShowRePass(!showRePass)}
              />
            }
            style={{ marginTop: 10 }}
            value={repassword}
            onChangeText={setRepassword}
            error={isError}
          />
          <Button
            disabled={loading}
            loading={loading}
            icon="account-plus"
            mode="contained"
            style={{ marginTop: 10 }}
            onPress={handleRegistration}
          >
            Register
          </Button>
          <Button
            disabled={loading}
            onPress={() => navigation.pop()}
            icon="arrow-left"
            mode="contained"
            style={{ marginTop: 10 }}
          >
            Go Back
          </Button>
    </View>
  );
}