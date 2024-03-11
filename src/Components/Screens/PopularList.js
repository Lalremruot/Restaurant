import { StyleSheet, Text, View, FlatList, Pressable, Image } from 'react-native'
import React from 'react'




const PopularItems = [
    {
      id: 1,
      title: "Fried Rice",
      Price: "₹80",
      Description: "eMVee Restaurant",
      Ingredients: 'Fermented local ingredients',
      image: require("../../../assets/Friedrice.jpg"),
    },
    {
      id: 2,
      title: "Grilled Chicken",
      Price: "₹190",
      Description: "eMVee Restaurant",
      image: require("../../../assets/chickengrill.jpg"),
    },
    {
      id: 3,
      title: "Octopus Stir Fried",
      Price: "₹400",
      Description: "eMVee Restaurant",
      image: require("../../../assets/octstir.jpg"),
    },
    {
      id: 4,
      title: "Porkribs",
      Price: "₹270",
      Description: "eMVee Restaurant",
      image: require("../../../assets/Porkribs.jpg"),
    },
    {
      id: 5,
      title: "Prawn Fried",
      Price: "₹290",
      Description: "eMVee Restaurant",
      image: require("../../../assets/Prawnfried.jpg"),
    },
    {
      id: 6,
      title: "Thukpa",
      Price: "₹80",
      Description: "eMVee Restaurant",
      image: require("../../../assets/Thukpa.jpg"),
    },
  ];


const PopularList = () => {


  return (
    <View style={styles.popularContainer}>
        <FlatList
        showsVerticalScrollIndicator={false}
          data={PopularItems}
          numColumns={2}
          renderItem={({ item, index }) => (
            <Pressable style={styles.popularItems}>           
                <Image style={{width: '100%', height: 130, 
                resizeMode: 'cover', borderRadius: 10,}} source={item.image} />
                <Text style={{fontSize: 17, fontWeight: '500', marginTop: 5,}}>{item.title}</Text>
                <Text style={{fontSize: 12, opacity: 0.7,}}>{item.Description}</Text>
                <Text style={{fontWeight: '500', color: '#e5002b'}}>{item.Price}</Text>
            </Pressable>
          )}
        />
      </View>
  )
}

export default PopularList

const styles = StyleSheet.create({
    popularContainer: {
        flex: 1,
        backgroundColor: '#f0f0f0',
      },
      popularItems: {
        flex: 1,
        margin: 5,
        borderColor: '#c2c0c0',
        borderWidth: 0.5,
        padding: 6,
        borderRadius: 10,
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.8,
        shadowRadius: 16,
      }
})