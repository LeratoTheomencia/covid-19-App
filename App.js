import React, { useState } from 'react';
import { View, TextInput, Button, TouchableOpacity, StyleSheet, Text, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Icons from 'react-native-vector-icons/MaterialIcons';
import Tips1 from './components/Tips1';
import Tips2 from './components/Tips2';
import Tips3 from './components/Tips3';
import Statistics from './components/Statistics';
import HomeScreen from './components/HomeScreen';
import Symptoms from './components/Symptoms';

const Stack = createStackNavigator();
const App = () => {





  return (
  
   <NavigationContainer>
        <Stack.Navigator>

        <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}/>

          <Stack.Screen
        name="Symptoms"
        component={Symptoms}
        />


          <Stack.Screen
        name="Tips1"
        component={Tips1}
        />
        

          <Stack.Screen
          name="Tips2"
          component={Tips2}
          />

           <Stack.Screen
          name="Tips3"
          component={Tips3}
          />

           <Stack.Screen
          name="Statistics"
          component={Statistics}
          />

          

        </Stack.Navigator>
      </NavigationContainer>

      
  
  

  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ba55d3',
    justifyContent: 'center',
    
  }
});

export default App;