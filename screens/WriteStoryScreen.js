import React from 'react';
import { Text, View,TextInput,StyleSheet,TouchableOpacity } from 'react-native';
import {Header} from 'react-native-elements'


export default class WriteStoryScreen extends React.Component {
    render() {
      return (
        <View style={{height: 1000}}>  
            <Header
          backgroundColor={'#00008B'}
          centerComponent={{
            text:'Write Story',
            style:{color:'red', fontSize:20, fontWeight:'bold'}
          }}
        />
           <TextInput
          style={styles.inputBox}
          onChangeText={(text) => {
            this.setState({ text:text });
          }}
        />
        <TextInput
          style={styles.inputBox}
          onChangeText={(text) => {
            this.setState({ text:text });
          }}
        />
        <TextInput
          multiline = {true}
          numberOfLines = {20}
          style={styles.inputBox1}
          onChangeText={(text) => {
            this.setState({ text:text });
          }}
        />

        <TouchableOpacity
        style={styles.submitButton}
        onPress={() => {
            }
          }>
        <Text style={styles.submitButtonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      );
    }
  }
  const styles = StyleSheet.create({
    inputBox: {
      marginTop: 30,
      width: '90%',
      alignSelf: 'center',
      height: 40,
      textAlign: 'center',
      borderWidth: 4,
      borderColor:'black',
      color:'black',
      fontStyle:'italic',
      fontWeight:'bold',
      fontSize:20
    },
    inputBox1: {
      marginTop: 30,
      width: '90%',
      alignSelf: 'center',
      height: 300,
      textAlign: 'left',
      borderWidth: 4,
      borderColor:'black',
      color:'black',
      fontStyle:'italic',
      fontWeight:'bold',
      fontSize:20
    },
    submitButton:{
      backgroundColor: '#FBC02D',
      width: 100,
      height:50,
      alignSelf: 'center'
    },
    submitButtonText:{
      padding: 10,
      textAlign: 'center',
      fontSize: 20,
      fontWeight:"bold",
      color: 'white'
    }
  })