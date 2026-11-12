import { Image } from 'expo-image';
import { Link } from "expo-router";

import { StyleSheet, Text, View } from "react-native";

const point = require("@/assets/images/spikes.png")

export default function Index() {
  return (
    <View style={styles.container}>
      <Image source={point} style={styles.image} />
      <Text>You're in a room. There's a door on the other side of a field of spikes.</Text>
      <Link href="/room_2" style={styles.button}>   Through the spikes...   </Link>
      <Link href="/main_room" style={styles.button}>   No spikes today, please!   </Link>
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
    width: 360,
    height: 100,
    
    borderRadius: 4,
  }
});