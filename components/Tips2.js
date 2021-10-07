import React from 'react';
import {StyleSheet, View, Text, Image, StatusBar} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons'
import {Card} from 'react-native-paper';
import {DotBold, DotLight} from './DotSlider';
import NextButton from './NextButton';

const Tips2 = props => {
  return (
    <View style={styles.contrainer}>
      <StatusBar backgroundColor='#' barStyle="dark-content" />
      <View style={{
            padding: 16,
            flexDirection: "row",
            justifyContent: "space-between",
      }}>
          
          <MaterialCommunityIcons name=""  size={30} />   
          <MaterialCommunityIcons name="text"  size={30} />
      </View>
      <View style={{flex: 1}}>
        <Text style={{fontSize: 16, fontWeight: "500"}}>Covid-19</Text>
        <Text style={{fontSize: 20, fontWeight: "800", marginTop: 10}}>Preventation</Text>
        <Text style={{marginTop: 50, paddingHorizontal: 35, fontSize: 15}}>Important  :</Text>
        <Image source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4TRLL6JgQCH-k6_dbKCsX666h0hIydW06SA&usqp=CAU"}} style={styles.image2} />
        <Text style={styles.headerTitle}>Wear A mask & Save lives</Text>
         <Text style={styles.bodyTitle}>Wear a mask in public, especially indoors or when physical distancing is not possible.</Text>
              <NextButton onClick={() => props.navigation.navigate("Tips3")}>Next Step</NextButton>
      <View style={{flexDirection: 'row'}}>
          <DotLight />
           <DotBold />
          <DotLight />
      </View>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  contrainer: {
    flex: 1,
    backgroundColor: '#FFAA4C',
    paddingHorizontal: 8
  },
  image2: {
    height: '40%',
    width: '90%',
    marginTop: 10,
    borderRadius: 10,
  },
  headerTitle: {
    fontSize: 25,
    fontWeight: '500',
    backgroundColor: '#fff',
    borderRadius: 10,
    textAlign: 'center',
    color: '#EEB76B',
  },
  bodyTitle: {
    fontSize: 15,
    fontWeight: '500',
    backgroundColor: '#fff',
    borderRadius: 10,
    textAlign: 'center',
    padding: 10,
  }
});

export default Tips2;
