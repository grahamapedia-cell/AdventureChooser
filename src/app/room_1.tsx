import { Image } from 'expo-image';
import { Link } from "expo-router";

import { StyleSheet, Text, View } from "react-native";

const door = require("@/assets/images/door.png")

export default function Index() {
  return (
    <View style={styles.container}>
      <Image source={door} style={styles.image} />
      <Text>There's a door here.</Text>
      <Link href="/locked_door" style={styles.button}>   Open it   </Link>
      <Link href="/door_1" style={styles.button}>   Go back   </Link>
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