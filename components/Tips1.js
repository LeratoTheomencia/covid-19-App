import React from 'react';
import {StyleSheet, View, Text, Image, StatusBar} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons'
import {Card} from 'react-native-paper';
import NextButton from './NextButton';
import {DotBold, DotLight} from './DotSlider';

const Tips1 = props => {
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
        <Text style={{fontSize: 20, fontWeight: "800", marginTop: 5}}>Preventation</Text>
        <Text style={{marginTop: 25, paddingHorizontal: 35, fontSize: 15}}>Important  :</Text>
        <Image source={{uri: "https://t4.ftcdn.net/jpg/02/52/43/27/240_F_252432702_3nOKjzp9WZrUQeSmjrubQfYtZiDWvnUo.jpg"}} style={styles.image1} />
        <Text style={styles.titleHeader}>HandWash</Text>
         <Text style={styles.tiltleBody}>Washing hands can help prevent illness. It involve five simple and effective steps you can take to reduce the spread of diarrheal and respiratory illness so you can stay heathy.Clean your hands often, use soap and water, or an alchol-based hand rub.</Text>

      </View>
      <NextButton onClick={() => props.navigation.navigate("Tips2")}>Next Step</NextButton>
      <View style={{flexDirection: 'row'}}>
          <DotBold />
          <DotLight />
          <DotLight />
      </View>

    
  
  </View>
  )
}

const styles = StyleSheet.create({
  contrainer: {
    flex: 1,
      backgroundColor: '#FFAA4C',
      paddingHorizontal: 8,
  },
  image1: {
    height: '50%',
    width: '100%',
    marginTop: 10,
    borderRadius: 10,
  },
  titleHeader: {
    fontSize: 25,
    fontWeight: '500',
    backgroundColor: '#fff',
    borderRadius: 10,
    textAlign: 'center',
    color: '#EEB76B',
  },
  tiltleBody: {
    fontSize: 15,
    fontWeight: '500',
    backgroundColor: '#fff',
    borderRadius: 10,
    textAlign: 'center',
    padding: 10,
  }
});

export default Tips1;