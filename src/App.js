import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigatoin/native-stack'
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import Amplify, {Storage} from 'aws-amplify';
import aws_exports from './aws-exports';
import HomeScreen from './screens/home';
Amplify.configure(aws_exports);

const Stack = createNativeStackNavigator();

class App extends Component {
  render() {
    return (
      <div className="App">
        <AmplifySignOut />
        <header className="App-header">
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen name="Home" component={HomeScreen}/>
            </Stack.Navigator>
          </NavigationContainer>
        </header>
      </div>
    );
  }
}

export default withAuthenticator(App);
