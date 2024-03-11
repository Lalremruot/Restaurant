import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
} from "react-native";
import React from "react";
import { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import ProductItems from "./ProductItems";
import PopularList from "./PopularList";
import { MaterialIcons } from '@expo/vector-icons';


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

const HomeScreen = ({ navigation }) => {
  
  const [search, setSearch] = useState("");

  const searchValue = (searchVal) => {
    setSearch(searchVal);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ fontWeight: "500", fontSize: 17 }}>Deliver To</Text>
      <View style={styles.header}>
        <View style={styles.location}>
          <Pressable style={{flexDirection: 'row', alignItems: 'center', marginLeft: -3,}}>
            <MaterialIcons name="place" size={17} color="black" />
            <Text>New Lamka, Vengnuam</Text>
          </Pressable>
        </View>
      </View>
      <Text style={{ marginVertical: 12, fontSize: 18 }}>Hi, Jason</Text>
      <View style={styles.input}>
        <TouchableOpacity>
          <Feather name="search" size={24} color="gray" />
        </TouchableOpacity>
        <TextInput
          value={search}
          onChangeText={searchValue}
          placeholder="Search..."
        />
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text style={{ marginVertical: 15, fontSize: 17, fontWeight: "500" }}>
          Our Products
        </Text>
        <Pressable onPress={() => navigation.navigate("Pizza")}>
          <Text style={{ marginVertical: 15, fontSize: 15, fontWeight: "400" }}>
            See all
          </Text>
        </Pressable>
      </View>

        {/*Productlist  */}
        <View>
          <ProductItems />
        </View>
      
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text style={{ marginVertical: 15, fontSize: 18, fontWeight: "500" }}>
          Popular
        </Text>
        <Pressable onPress={() => navigation.navigate("PizzaScreen")}>
          <Text style={{ marginVertical: 15, fontSize: 15, fontWeight: "400" }}>
            See all
          </Text>
        </Pressable>
      </View>

      {/* Popular list */}
      <PopularList />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    backgroundColor: "#f0f0f0",
  },
  header: {
    flexDirection: "row",
    // gap: 5,
    alignItems: "center",
    justifyContent: "space-between",
  },
  location: {
    flexDirection: "row",
    alignItems: "center",
    
  },
  input: {
    flexDirection: "row",
    gap: 5,
    backgroundColor: "white",
    paddingVertical: 10,
    paddingLeft: 7,
    borderRadius: 9,
    marginTop: 5,
  },
  // image: {
  //   width: "100%",
  //   height: "50%",
  //   borderRadius: 12,
  // },
  
  
});
