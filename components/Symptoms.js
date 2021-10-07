import * as React from 'react';
import { Text, View, StyleSheet, StatusBar, Dimensions, Image } from 'react-native';
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {FlatList} from "react-native-gesture-handler";
import NextButton from './NextButton';

const screenWidth = Dimensions.get("window").width
const colors = {
  themeColor: "#ffc66a",
  white: "#fff",
  background: "#f4f6fc",
  grayish: "#5a5a5a"
};
const symptoms = [{
  symptom: "Cold",
  icon: "snowflakes",
  selected: true
},
{
  symptom: "Dry Cough",
  icon: "flash",
  selected: false
},
{
  symptom: "Fever",
  icon: "themometer",
  selected: false
},
{
  symptom: "Breathing Difficulty",
  icon: "air-filter",
  selected: false
}
];
const Symptom = ({symptom, icon, selected}) => {
  return (
    <View style={styles.mainContainer }>
        <Text style={{
          fontSize: 20, 
          fontWeight: "700", 
          color:selected ? colors.white : colors.greyish
          }}>
          {symptom}
          </Text>
        <Text style={{ 
          fontSize: 16, 
          marginVertical: 7, 
          colors:selected ? colors.white : colors.greyish}}> 
          </Text>
        <MaterialCommunityIcons name={icon} size={35} style={{ 
          alignSelf:"flex-end", 
          color: selected ? colors.white :  colors.themeColor,
          
        }} 
        />
      </View>
  )
}

export default function Symtoms(props) {
  return (
    <View style={{
      flex: 1,
      backgroundColor: colors.background,
      paddingHorizontal: 8
    }}>
      <StatusBar backgroundColor={colors.background} barStyle="dark-content" />
      <View style={{
            padding: 16,
            flexDirection: "row",
            justifyContent: "space-between",
      }}>
          <MaterialCommunityIcons name="text"  size={30} />
          <MaterialCommunityIcons name="magnify"  size={30} />   
      </View>
       <View style={{
            padding: 16,
            flexDirection: "row",
            justifyContent: "space-between",
      }}>
          <View>
            <Text style={{ fontSize: 16}}>Covid-19</Text>
            <Text style={{ fontSize: 20}}>Symptoms</Text>
          </View>
          <MaterialCommunityIcons 
          name="thermometer"  
          size={45} style={{ 
            color: colors.white, 
            backgroundColor: colors.themeColor,
            }}
           /> 
           </View>
           <View style={{ 
             borderTopWidth: 6, 
             borderTopColor: colors.themeColor,
             borderRadius: 3,
             marginHorizontal: 16,
             width: 40,
              marginTop: -5
             }} 
             /> 
   
      <View  
      style={styles.titleContainer1}>
          <Text style={{fontWeight: 'bold', fontSize: 14, alignItems: 'center', justifyContent: 'center'}}>Cold</Text>
        <Text style={styles.titleText}>The severity of COVID-19 symptoms can range fro mild to severe.</Text>
        <Image source={{uri: "https://cdn1.iconfinder.com/data/icons/allergy-indigo-vol-2/256/Sneezing-128.png"}} style={styles.image1} />
      </View>

            <View 
      style={styles.titleContainer2}>
          <Text style={{fontWeight: 'bold', fontSize: 14, alignItems: 'center', justifyContent: 'center'}}>Dry Cough</Text>
        <Text style={styles.titleText}>It appears to spread from person to person among those in close contact.</Text>
        <Image source={{uri: "https://cdn2.iconfinder.com/data/icons/covid-19-2/64/22-Cough-128.png"}} style={styles.image2}  />
      </View>

                  <View 
      style={styles.titleContainer3}>
          <Text style={{fontWeight: 'bold', fontSize: 14, alignItems: 'center', justifyContent: 'center'}}>Fever</Text>
        <Text style={styles.titleText}>People who are older or have exisiting chronic medical conditions such as heart or lung diseases.</Text>
        <Image source={{uri: "https://cdn2.iconfinder.com/data/icons/covid-19-2/64/07-Fever-128.png"}} style={styles.image3} />
      </View>
                    <View 
      style={styles.titleContainer4}>
          <Text style={{fontWeight: 'bold', fontSize: 14, alignItems: 'center', justifyContent: 'center'}}>Breathing Difficulty</Text>
        <Text style={styles.titleText}>Excited or tense, often to the point of holding your breath.</Text>
        <Image source={{uri: "https://cdn2.iconfinder.com/data/icons/covid-19-2/64/10-Shortness_of_breath-128.png"}} style={styles.image4} />
      </View>
      <NextButton onClick={() => props.navigation.navigate("Tips1")}>Next Step</NextButton>
    </View>  

    
    
  );
}

const styles = StyleSheet.create({
  mainContainer: {
     backgroundColor: colors.white, 
      margin: 8,
      borderRadius: 20, 
      paddingVertical: 20,
      paddingHorizontal: 24,
      width: (screenWidth - 64) / 2
  },
  titleContainer1: {
    width: 150,
    height: 190,
    backgroundColor: '#ffc66a',
    borderRadius: 20,
    paddingTop: 20,
    paddingLeft: 15,
    marginLeft: -15,
    marginTop: 10,
     justifyContent: 'center',
    alignItems: 'center'
  },
  image1: {
    width: 60,
    height: 60,
  },
  titleContainer2: {
    width: 140,
    height: 190,
    backgroundColor: '#ffc66a',
    borderRadius: 20,
    paddingTop: 20,
    paddingLeft: 15,
    marginLeft: 150,
    marginTop: -188,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image2: {
    width: 60,
    height: 60,
  },
    titleContainer3: {
    width: 150,
    height: 190,
    backgroundColor: '#ffc66a',
    borderRadius: 20,
    paddingLeft: 15,
    marginLeft: -15,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
   image3: {
    width: 60,
    height: 60,
  },
    titleContainer4: {
    width: 140,
    height: 190,
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingTop: 20,
    paddingLeft: 15,
    marginLeft: 150,
    marginTop: -188,
    justifyContent: 'center',
    alignItems: 'center'
  },
   image4: {
    width: 60,
    height: 60,
  },
});