import { Image } from 'expo-image';
import { Link } from "expo-router";

import { StyleSheet, Text, View } from "react-native";

const greeb = require("@/assets/images/greeb.png")

export default function Index() {
  return (
    <View style={styles.container}>
      <Image source={greeb} style={styles.image} />
      <Text>You talk to Michel Foucault. He says: "Power is used to control knowledge. In the eighteenth century, 'madness' was used as an excuse to stigmatize people the ruling class didn't like."</Text>
      <Text>Interesting social commentary!</Text>
      <Text>    You got the "Michel Foucault" ending!   </Text>
      <Link href="/main_room" style={styles.button}>   Restart   </Link>
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