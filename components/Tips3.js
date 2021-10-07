import React from 'react';
import {StyleSheet, View, Text, Image, StatusBar} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons'
import {Card} from 'react-native-paper';
import {DotBold, DotLight} from './DotSlider';
import NextButton from './NextButton';

const Tips3 = props => {
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
        <Image source={{uri:"https://th.bing.com/th/id/OIP.5D-6NnKofP2DCq3Kd6e-YQAAAA?w=187&h=187&c=7&r=0&o=5&pid=1.7"}} style={styles.image2} />
        <Text style={styles.headerTitle}>Cover your Nose and Mouth</Text>
         <Text style={styles.bodyTitle}>Cover your nose and mouth with your bent elbow or a tissue when you cough or sneeze.</Text>
                      <NextButton onClick={() => props.navigation.navigate("Statistics")}>Next Step</NextButton>
      <View style={{flexDirection: 'row'}}>
          <DotLight />
          <DotLight />
          <DotBold />
          
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
  },
});

export default Tips3;
