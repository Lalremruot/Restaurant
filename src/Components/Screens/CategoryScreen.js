import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  Pressable,
  Image,
} from "react-native";
import React from "react";

const categoryList = [
  {
    id: 1,
    title: "SIGNATURE DISH",
    image: require("../../../assets/Burger.png"),
  },
  { id: 2, title: "emVEee SPECIAL", image: require("../../../assets/Burger.png"), },
  { id: 3, title: "ROLL", image: require("../../../assets/Burger.png"), },
  { id: 4, title: "SEA FOOD", image: require("../../../assets/Burger.png"), },
  { id: 5, title: "SALAD", image: require("../../../assets/Burger.png"), },
  { id: 6, title: "PARATHA COMBO", image: require("../../../assets/Burger.png"), },
  { id: 7, title: "BURGER", image: require("../../../assets/Burger.png"), },
  { id: 8, title: "BEVERAGE", image: require("../../../assets/Burger.png"), },
  { id: 9, title: "PIZZA", image: require("../../../assets/Burger.png"), },
  { id: 10, title: "APPETIZER", image: require("../../../assets/Burger.png"), },
  { id: 12, title: "NOODLES", image: require("../../../assets/Burger.png"), },
  { id: 13, title: "MAC & CHEESE", image: require("../../../assets/Burger.png"), },
  { id: 14, title: "SOUP", image: require("../../../assets/Burger.png"), },
  { id: 15, title: "MAIN COURSE", image: require("../../../assets/Burger.png"), },
  { id: 16, title: "MOMO", image: require("../../../assets/Burger.png"), },
  { id: 17, title: "FRIED RICE", image: require("../../../assets/Burger.png"), },
  { id: 18, title: "THUKPA", image: require("../../../assets/Burger.png"), },
];

const CategoryScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={categoryList}
        renderItem={({ item, index }) => (
          <View style={{ flex: 1, padding: 5 }}>
            <Pressable
              style={{
                borderWidth: 1,
                borderColor: "gray",
                alignItems: "center",
                flexDirection: "row",
                justifyContent: "space-between",
                padding: 5,
                paddingHorizontal: 15,
                borderRadius: 12,
              }}
            >
              <Text style={{color: 'black'}}>{item.title}</Text>
              <Image style={{ width: 40, height: 40 }} source={item.image} />
            </Pressable>
          </View>
        )}
      />
    </View>
  );
};

export default CategoryScreen;

const styles = StyleSheet.create({});
