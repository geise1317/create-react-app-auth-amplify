import * as React from 'react';
import { SafeArea, View, Text, Button, Image } from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigatoin/native-stack'

function HomeScreen({navigation}) {
    return(
        <SafeArea style={{flex:1, alignItems:'center', backgroundColor: '#766EC8'}}>
            <Text>Home Screen</Text>
            <Button title="Start Quiz"
            onPress={() => navigation.goBack()}/>

        </SafeArea>
    )
}
export default HomeScreen;