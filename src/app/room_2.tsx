import { Image } from 'expo-image';
import { Link } from "expo-router";

import { StyleSheet, Text, View } from "react-native";

const door = require("@/assets/images/greeb_door.png")

export default function Index() {
  return (
    <View style={styles.container}>
      <Image source={door} style={styles.image} />
      <Text>Ouch! There's a door here. There is also a Michel Foucault here.</Text>
      <Link href="/through" style={styles.button}>   Open the door   </Link>
      <Link href="/Foucault" style={styles.button}>   Michel Foucault   </Link>
      <Link href="/door_2" style={styles.button}>   Go back through the spikes   </Link>
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
    height: 200,
    
    borderRadius: 4,
  }
});