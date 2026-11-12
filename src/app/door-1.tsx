import { Image } from 'expo-image';
import { Link } from "expo-router";

import { StyleSheet, Text, View } from "react-native";

const doors = require("@/assets/images/fall.png")

export default function Index() {
  return (
    <View style={styles.container}>
      <Image source={doors} style={styles.image} />
      <Text>You're in a hallway now. There's an ominous-looking pit.</Text>
      <Link href="/room-1" style={styles.button}>   Go forth   </Link>
      <Link href="/pit" style={styles.button}>   Into the pit! (bad idea)   </Link>
      <Link href="/main-room" style={styles.button}>   Go back   </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#0000ff',
    margin: 20,
  },
  image: {
    width: 320,
    height: 480,
    
    borderRadius: 4,
  }
});