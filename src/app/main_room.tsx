import { Image } from 'expo-image';
import { Link } from "expo-router";

import { StyleSheet, Text, View } from "react-native";

const doors = require("@/assets/images/monty-hall-pic-1.png")

export default function Index() {
  return (
    <View style={styles.container}>
      <Image source={doors} style={styles.image} />
      <Text>There are three doors here. What do you want to do?</Text>
      <Link href="/door_1" style={styles.button}>   Go through Door 1   </Link>
      <Link href="/door_2" style={styles.button}>   Go through Door 2   </Link>
      <Link href="/door_3" style={styles.button}>   Go through Door 3   </Link>
      <Link href="/gpt" style={styles.button}>   Ask ChatGPT   </Link>
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
