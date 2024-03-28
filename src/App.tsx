// In App.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Provider} from 'react-redux';
import {store} from '@state/store';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import HomeScreen from '@screens/HomeScreen';
import QuestionScreen from '@screens/QuestionScreen';
import LeaderBoardScreen from '@screens/LeaderBoardScreen';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <GestureHandlerRootView style={{flex: 1}}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Question" component={QuestionScreen} />
            <Stack.Screen name="LeaderBoard" component={LeaderBoardScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </GestureHandlerRootView>
    </Provider>
  );
}

export default App;
