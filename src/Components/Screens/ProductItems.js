import { StyleSheet, Text, View, FlatList, Pressable, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';




const ProductList = [
  {
    id: 1,
    title: "Burger",
    image: require("../../../assets/Burger.png"),
  },
  {
    id: 2,
    title: "Pizza",
    image: require("../../../assets/Pizza.png"),
  },
  {
    id: 3,
    title: "Egg roll",
    image: require("../../../assets/Roll.png"),
  },
  {
    id: 4,
    title: "Noodles",
    image: require("../../../assets/Noodles.png"),
  },
  {
    id: 5,
    title: "Paratha combo",
    image: require("../../../assets/Paratha1.png"),
  },
  {
    id: 6,
    title: "Mac & Cheese",
    image: require("../../../assets/Mac&Cheese.png"),
  },
];


const ProductItems = () => {
  const navigation = useNavigation();
  

  return (
    <View style={styles.productlist}>
      <FlatList
        style={styles.product}
        showsHorizontalScrollIndicator={false}
        data={ProductList}
        horizontal
        renderItem={({ item, index }) => (
          <Pressable
            onPress={() => navigation.navigate("Burger", {item: item})}
            style={styles.imageList}
          >
            <Image style={styles.productImage} source={item.image} />
            <Text style={{ marginTop: 10, fontSize: 12 }}>{item.title}</Text>
          </Pressable>
        )}
      />
      <View>

      </View>
    </View>
  );
};


export default ProductItems

const styles = StyleSheet.create({
  imageList: {
    // padding: 10,

    alignItems: "center",
    justifyContent: "center",
    // paddingHorizontal: 12,
    marginRight: 25,
  },
  productImage: {
    width: 50,
    height: 45,

    // marginHorizontal: 12,
  },
})


