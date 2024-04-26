import {NavigationContainer} from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, Image, ScrollView,  Alert, TextInput, ImageBackground, Button} from 'react-native';
import  { useState } from 'react';
import {images, names, nameList} from './imageList.js';
import {Stack, MyStack} from './navigation.js';


// onPress={() => console.log('You tapped the button!')}/>
// <Image source={images.id=2} style={styles.imageStyle}/>
// <Image source={images.id=1} style={styles.imageStyle}/>

/*
function printID(){
  console.log(images.id);
}

  <div> 
      <input 
        type="text"
        value={id}
        onClick = {(e) => printID(console.log('hello')) }
      /> 
    </div>
*/
function Example(){
  
  // Declare a new state variable, which we'll call "count"
    const[pictureId,setPictureId] = useState(5);
    const newId = () => setPictureId(2);
    console.log(pictureId);
    
  }
//onPress={() => console.log('You tapped the button!')}/>
//onPress={() => Example()}/> 
/*
      <Pressable 
      onPress={()=> console.log("Pressed Button!")}
      style={ ( { pressed } ) => {
        return{opacity: pressed ? 0.5 : 1 }} 
        }>
      <Image source= {require("./assets/pizza.jpg")} style={styles.imageStyle}/>      
      </Pressable>
*/

/*
export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
      <Image source={images.id=1} style={styles.imageStyle}/>
      <Example />
      <Button 
      title="Next" 
      color='blue'
      onPress={() => Example()}/>
      


      <StatusBar style="auto" />      
      </View>    
    </NavigationContainer> 
  );
}
*/

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
      <Image source={images.id=1} style={styles.imageStyle}/>
      <Example />
      <Button 
      title="Next" 
      color='blue'
      onPress={() => console.log('Press')}/>
      


      <StatusBar style="auto" />      
      </View>    
    </NavigationContainer> 
  );
}


//<Image source={imageOne} style={styles.imageStyle}></Image>
//<Image source={imageTwo} style={styles.imageStyle}></Image>
//const imageOne = require('./assets/pizza.jpg')
//const imageTwo = require('./assets/Classic-Lasagna.jpg')

//<ImageButton onPress={() => console.log("Button as component")}
//imageStyle={styles.image} source={require("./assets/pizza.jpg")}/>
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
    height:300
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

  image:{
    width:100,
    height:100
 }
});
