

import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from "./Home";
import AddWorkout from './AddWorkout';
import Profile from './Profile.js'
import PrePlanned from './PrePlanned';
import Statistics from './Statistics';
import Log from './Log';
import NewWorkout from './NewWorkout';
import DraOppVindu from './DraOppVindu';

const Stack = createStackNavigator();

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" hidden />
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'
          headerMode='screen'>
          <Stack.Screen
            name='Home'
            options={{
              headerShown: false
            }}
          >
            {(props) => <Home username="Are" />}
          </Stack.Screen>

          <Stack.Screen
            name='Record Workout'
            component={AddWorkout}
            options={{
              headerTitleAlign: 'center',


            }}
          />
          <Stack.Screen
            name='Profile'
            component={Profile}
            options={{
              headerTitleAlign: 'center',


            }}
          />
          <Stack.Screen
            name='Statistics'
            component={Statistics}
            options={{
              headerTitleAlign: 'center',


            }}
          />
          <Stack.Screen
            name='Log'
            component={Log}
            options={{
              headerTitleAlign: 'center',


            }}
          />
          <Stack.Screen
            name='PrePlanned'
            component={PrePlanned}
            options={{
              headerTitleAlign: 'center',


            }}
          />
          <Stack.Screen
            name='New Workout'
            component={NewWorkout}
            options={{
              headerTitleAlign: 'center',


            }}
          />
          <Stack.Screen
            name='DraOppVindu'
            component={DraOppVindu}
            options={{
              headerTitleAlign: 'center',


            }}
          />
        </Stack.Navigator>



      </NavigationContainer>

    </>
  );
};
/*
<View>
          <Home />
        </View>
*/


export default App;
