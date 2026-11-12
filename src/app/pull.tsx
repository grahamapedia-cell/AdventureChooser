import { Image } from 'expo-image';
import { Link } from "expo-router";

import { StyleSheet, Text, View } from "react-native";

const lever = require("@/assets/images/on.png")

export default function Index() {
  return (
    <View style={styles.container}>
      <Image source={lever} style={styles.image} />
      <Text>Nothing happens.</Text>
      <Link href="/unpull" style={styles.button}>   Pull it again   </Link>
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
    height: 300,
    
    borderRadius: 4,
  }
});