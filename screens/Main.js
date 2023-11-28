import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';
import React from 'react';
import { View } from 'react-native';
import { Appbar, Card,Text } from 'react-native-paper';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#0066ff',
  },
};

const Main = ({ navigation }) => {

  return (
    <PaperProvider theme={theme}>
        <View style={{ flex: 1 }}>
      <Appbar.Header >
        <Appbar.Content title="Welcome to my Home Page" />
        <Appbar.Action icon="logout" onPress={() => navigation.navigate("Login")}
        mode="contained"
        style={{ marginTop: 10 }} />
        
      </Appbar.Header>


      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Card>
          <Card.Content style={{flex: 1, justifyContent: 'center'}}>
            <Text variant="displaySmall" style={{fontWeight:'bold',color: theme.colors.primary}} >Welcome to My Login App!</Text>
            <Text variant="headlineLarge">This is my HomePage.</Text>
          </Card.Content>
        </Card>
      </View>


      <View style={{ alignItems: 'center', paddingBottom: 20 }}>
        <Text>© 2023 Buwanding App</Text>
      </View>
    </View>
    </PaperProvider>
    
  );
};

export default Main;
