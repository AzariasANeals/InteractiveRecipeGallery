import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, Image, ScrollView,  Alert, TextInput} from 'react-native';
// imageList.js

export const images = [
    {
      id: 1,
      image:require("./assets/pizza.jpg"),
      description: 'This is a picture of a Pizza!'
    },

    {
      id: 2,
      image:require("./assets/Classic-Lasagna.jpg"),
      description: 'This is a picture of a Lasagna!'
    },
    // Add more images as needed
  ];

  
  
  
  export const names = ['Alice', 'Bob', 'Charlie'];
  export const nameList =(
    <View>{names.map(name => <Text key={name}> {name} </Text>)}</View>
  );


  // const gallery = images.filter()

//const imageOne = require('./assets/pizza.jpg')
// const imageTwo = require('./assets/Classic-Lasagna.jpg')