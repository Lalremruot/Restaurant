import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'


const WelcomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      
      <Image style={styles.img} source={require("../../../assets/food.png")} />
      <Text style={styles.text}>100+ Recipe</Text>
      <TouchableOpacity onPress={() => navigation.navigate("SignIn")}style={styles.buttonContainer}>
        
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  )
}
export default WelcomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#E5002B',
  },
  img: {
    width: '100%',
    height: 250,
    alignItems: 'center',
    marginTop: 50,
  },
  text: {
    color: 'white',
    fontSize: 60,
    fontWeight: '500',
    marginTop: 50,
  },
  buttonContainer: {
    backgroundColor: '#fff',
    padding: 20,
    width: 350,
    alignItems: 'center',
    marginTop: 280,
    borderRadius: 25,
  },
  buttonText: {
    fontSize: 15,
    fontWeight: '500'
  }
})