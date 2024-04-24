import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, Image, ScrollView,  Alert, TextInput, ImageBackground} from 'react-native';
import {images, names, nameList} from './imageList.js';



export default function App() {
  return (
      <View style={styles.container}>
      <Image source={images.id=1} styles={{width:30, height:30}}/>
      <StatusBar style="auto" />      

      </View>    
  );
}
//<Image source={imageOne} style={styles.imageStyle}></Image>
//<Image source={imageTwo} style={styles.imageStyle}></Image>
const imageOne = require('./assets/pizza.jpg')
const imageTwo = require('./assets/Classic-Lasagna.jpg')
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button:{
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black'
  },
  text:{
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  imageStyle:{
    width:300,
    height:200
  },
  scrollView:{
    marginHorizontal:50,
    },

  scrollText:{
    marginTop:20,
    marginLeft:15,
    marginRight:15,
    fontFamily:'Optima',
    fontWeight:'500',
    color:'#00542D',
    fontSize: 30,
  },
});
