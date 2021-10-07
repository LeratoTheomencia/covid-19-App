import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Image,
  Button
} from 'react-native';
import Constants from 'expo-constants';
import { Card } from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import NextButton from './NextButton';

const HomeScreen = (props) => {
  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <View style={styles.headerIcons}>
          <TouchableOpacity style={{ paddingTop: 20, paddingLeft: 20 }}>
            <Feather name="menu" size={24} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              marginLeft: '75%',
              marginTop: 20,
            }}>
            <AntDesign name="bells" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
        <View style={styles.heading}>
          <Text style={styles.headerTxt}>Covid-19</Text>
        </View>
        <View>
          <Text style={{ color: '#fff', paddingTop: 30, paddingLeft: 20 }}>
            Are You feeling sick?
          </Text>
          <Text style={{ color: '#fff', paddingTop: 30, paddingLeft: 20 }}>
            If you feel sick with any of covid-19 symptoms,
            <br />
            please call or SMS us immediately for help.
          </Text>
        </View>
        <View style={styles.contactIcons}>
          <TouchableOpacity style={styles.callIcon}>
            <MaterialIcons name="call" size={24} color="#fff" />
            <Text style={{ color: '#fff', fontWeight: 'bold' }}>Call Now</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.smsIcon}>
            <MaterialCommunityIcons name="chat" size={24} color="#fff" />
            <Text style={{ color: '#fff', fontWeight: 'bold' }}>Send SMS</Text>
          </TouchableOpacity>
        </View>
      </Card>
      <View style={styles.body}>
        <Text style={styles.bodyTxt}>Prevention</Text>
        <View style={styles.bodyImg}>
          <View style={styles.bodyContent}>
            <Image
              source={{
                uri:
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgKRz3JSgcUecZDrvWq7nqUeGnFaHk0647lg&usqp=CAU',
              }}
              style={{ height: '100%', width: '100%' }}
            />
          </View>
          <View style={styles.bodyContent}>
            <Image
              source={{
                uri:
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEo7iJ-sVToDusjBe6oe5EcJ0oq78MynrmxA&usqp=CAU',
              }}
              style={{ height: '100%', width: '100%' }}
            />
          </View>
          <View style={styles.bodyContent}>
            <Image
              source={{
                uri:
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzP4ILOBp8uMMQUDNAZT5ELzsN-c8j6nUZ8A&usqp=CAU',
              }}
              style={{ height: '100%', width: '100%' }}
            />
          </View>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text
            style={{
              fontWeight: 'bold',
              textAlign: 'center',
              paddingLeft: 16,
              justifyContent: 'center',
            }}>
            Avoid close <br /> contact
          </Text>
          <Text
            style={{
              fontWeight: 'bold',
              textAlign: 'center',
              paddingLeft: 30,
            }}>
            Clean your <br /> hands often
          </Text>
          <Text
            style={{
              fontWeight: 'bold',
              textAlign: 'center',
              paddingVertical: 2,
            }}>
            Wear a facemask
          </Text>
        </View>
      </View>
      <View style={styles.conclusion}>
        <Image source={{ uri: 'https://cdn2.iconfinder.com/data/icons/covid-19-2/64/30-Doctor-128.png' }} style={{width:90, height: 120}} />
        <Text style={styles.textTitleHeader}>Do you Know your test</Text>
        <Text style={styles.textTitle}>
          Follow the instructions to know your test
        </Text>

        <View style={styles.button}>
          <TouchableOpacity>
              <Text style={{fontSize: 15, color: '#fff', fontWeight: '600'}} onClick={() => props.navigation.navigate('Symptoms')}>Next Step</Text>
          </TouchableOpacity>
        </View>
      </View>
     
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#eee',
    padding: 10,
  },
  card: {
    backgroundColor: 'darkslateblue',
    height: 300,
    borderRadius: 30,
  },
  headerIcons: {
    flexDirection: 'row',
  },
  headerTxt: {
    fontSize: 20,
    color: '#fff',
    paddingLeft: 20,
    paddingTop: 20,
  },
  contactIcons: {
    flexDirection: 'row',
    marginTop: 20,
  },
  callIcon: {
    height: 35,
    width: 130,
    borderRadius: 30,
    marginLeft: 20,
    flexDirection: 'row',
    backgroundColor: 'red',
    alignItems: 'center',
    paddingLeft: 20,
  },
  smsIcon: {
    height: 35,
    width: 130,
    borderRadius: 30,
    marginLeft: '5%',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'blue',
    paddingLeft: 10,
  },
  body: {
    backgroundColor: '#eee',
  },
  bodyTxt: {
    paddingTop: 40,
    paddingLeft: 20,
    fontWeight: 'bold',
    fontSize: 18,
  },
  bodyImg: {
    flexDirection: 'row',
    marginTop: 20,
  },
  bodyContent: {
    margin: 5,
    height: 100,
    width: 100,
    borderRadius: '50%',
    backgroundColor: 'lightpink',
  },
  conclusion: {
    height: 120,
    borderRadius: 20,
    marginTop: 50,
    backgroundColor: 'darkslateblue',
    marginBottom: 280,
  },
  textTitleHeader: {
    marginLeft: 100,
    fontSize: 15,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
   
    marginTop: -80
  },
  textTitle: {
    marginLeft: 100,
    marginTop: 10,
    color: '#fff',
    textAlign: 'center',
  },
  button: {
     width: '30%',
    height: '30%',
    backgroundColor: '#FFB319',
    borderRadius: 50,
    marginVertical: '5%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 80,
  }
});

export default HomeScreen;
