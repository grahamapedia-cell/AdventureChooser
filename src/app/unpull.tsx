import { Image } from 'expo-image';
import { Link } from "expo-router";

import { StyleSheet, Text, View } from "react-native";

const lever = require("@/assets/images/off.png")

export default function Index() {
  return (
    <View style={styles.container}>
      <Image source={lever} style={styles.image} />
      <Text>Nothing un-happens.</Text>
      <Link href="/pull" style={styles.button}>   Pull it again   </Link>
      <Link href="/main_room" style={styles.button}>   Go back   </Link>
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