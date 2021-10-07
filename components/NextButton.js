import React from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';

const Name = props => {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onClick}>
      <Text style={styles.title}>{props.children}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '40%',
    height: '6%',
    backgroundColor: '#fff',
    borderRadius: 50,
    marginVertical: '5%',
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  title: {
    fontSize: 20,
    color: '#F5AD47',
    fontFamily: 'HalveticaNeue',
    marginRight: '5%',
    justifyContent: 'center',
    textAlign: 'center'
  },
})

export default Name;