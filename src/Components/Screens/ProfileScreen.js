import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';


const ProfileScreen = ({ navigation }) => {
  const [fullName, setFullName] = useState('');
  const [address, setAddress] = useState('');
  const [landmark, setLandmark] = useState('');
  const [mobileNo, setMobileNo] = useState('');
  const [email, setEmail] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Enter your name</Text>
      <TextInput
        style={styles.input}
        value={fullName}
        onChangeText={setFullName}
        placeholder="Full name"
      />

      <Text style={styles.header}>Address with Road/Street</Text>
      <TextInput
        style={styles.input}
        value={address}
        onChangeText={setAddress}
        placeholder="Enter your address"
      />

      <Text style={styles.header}>Landmark</Text>
      <TextInput
        style={styles.input}
        value={landmark}
        onChangeText={setLandmark}
        placeholder="Ex. Near Hospital"
      />

      <Text style={styles.header}>Mobile no.</Text>
      <TextInput
        style={styles.input}
        value={mobileNo}
        onChangeText={setMobileNo}
        placeholder="Enter your mobile no."
        keyboardType="phone-pad"
      />

      <Text style={styles.header}>Email</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Enter your email"
        keyboardType="email-address"
      />

      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("Home")}>
        <Text style={styles.text}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};


export default ProfileScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 50,
        paddingHorizontal: 15,
    },
    header: {
        fontSize: 20,
        marginBottom: 7,
        fontWeight: "500",
        color: '#191919',
    },
    input: {
        marginBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: "#C7C8CC",
        padding: 5,
    },
    btn: {
        backgroundColor: '#e5002b',
        paddingVertical: 13,
        alignItems: 'center',
        borderRadius: 12,
        marginTop: 15,
    },
    text: {
        color: 'white',
        fontSize: 18,
        fontWeight: '500',
    },
})