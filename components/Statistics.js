import React, { Component, useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
  ImageBackground,
  Image,
} from 'react-native';
import { Card } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FlatList } from 'react-native-gesture-handler';
import ItemRows from './ItemRows';
import NextButton from './NextButton'

const Statistics = props => {
  const url = 'https://api.covid19api.com/summary';
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    const fetchCovidData = async () => {
      setIsLoading(true);
      try {
        const result = await fetch(url);
        const response = await result.json();
        setData(response);
        setIsLoading(false);
      } catch (e) {
        console.log(e);
      }
    };
    fetchCovidData();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View
        style={{
          padding: 16,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <MaterialCommunityIcons name="text" size={30} color="#fff" />
        <MaterialCommunityIcons name="bell" size={25} color="#fff" />
      </View>
      <View>
        <Text
          style={{
            fontSize: 20,
            fontWeight: '700',
            marginTop: 20,
            marginLeft: 10,
            color: '#fff',
          }}>
          Statistics
        </Text>
      </View>
      <TouchableOpacity onPress={() =>{this.fetchCovidData.MyCountry}}>
        <Text style={styles.textTitle}>South Africa</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.textTiltle1}>Global</Text>
      </TouchableOpacity>
      <View style={styles.topic}>
        <Text style={styles.total}>Total</Text>
        <Text style={styles.today}>Today</Text>
        <Text style={styles.yesterday}>Yesterday</Text>
      </View>

      <View style={styles.container1}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            paddingRight: 50,
            color: '#fff',
          }}>
          Affected
        </Text>
               <Text> 
          {data ? data.Global.TotalConfirmed : 0 }
        </Text>
       
      </View>

      <View style={styles.container2}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            paddingRight: 50,
            color: '#fff',
          }}>
          Death
        </Text>
            <Text> 
          {data ? data.Global.TotalDeaths : 0 }
        </Text>
       
      </View>
      <View style={styles.container3}>
        <Text
          style={{
            fontSize: 17,
            fontWeight: 'bold',
            paddingRight: 50,
            color: '#fff',
          }}>
         Recovered
        </Text>
    
            <Text> 
          {data ? data.Global.TotalRecovered : 0 }
        </Text>
      
       
      </View>


      <View style={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
      }} >
      </View>
      {/* {console.log(data, 'data) */}
      <View style={styles.flatList}>
          <FlatList data={data} 
            renderItem={(item) => <ItemRows items={item} />}
          />

          
        <View style={styles.button}>
          <TouchableOpacity>
              <Text style={{fontSize: 15, color: '#fff', fontWeight: '600'}} onClick={() => props.navigation.navigate('HomeScreen')}>Next Step</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2D46B9',
    paddingHorizontal: 8,
  },
  textTitle: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    borderRadius: 24,
    paddingTop: 5,
    paddingRight: 40,
    marginLeft: 20,
    height: 40,
    width: 200,
    textAlign: 'center',
    color: '#000',
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 30,
  },
  textTiltle1: {
    flexDirection: 'row',
    backgroundColor: '#04009A',
    borderRadius: 24,
    paddingTop: 5,
    paddingRight: 40,
    marginLeft: 160,
    marginTop: -40,
    height: 40,
    width: 200,
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
  },
  total: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  today: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  yesterday: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  topic: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-between',
    paddingHorizontal: 40,
    paddingLeft: 30,
  },
  container1: {
    width: 150,
    height: 80,
    backgroundColor: '#ffc66a',
    borderRadius: 12,
    paddingTop: 1,
    paddingLeft: 15,
    marginLeft: 5,
    marginTop: 10,
  },
  container2: {
    width: 150,
    height: 79,
    backgroundColor: '#F14668',
    borderRadius: 12,
    paddingTop: 1,
    paddingLeft: 15,
    marginLeft: 165,
    marginTop: -80,
  },
  container3: {
    width: 150,
    height: 80,
    backgroundColor: '#16C79A',
    borderRadius: 12,
    paddingTop: 1,
    paddingLeft: 15,
    marginLeft: 5,
    marginTop: 10,
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

export default Statistics;