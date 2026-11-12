import { Image } from 'expo-image';
import { Link } from "expo-router";

import { StyleSheet, Text, View } from "react-native";

const greeb = require("@/assets/images/jegswa.png")

export default function Index() {
  return (
    <View style={styles.container}>
      <Image source={greeb} style={styles.image} />
      <Text>You use Chat's instructions to go through the escape room. But at the end is Jegswa, the goose with a saw who put you here.</Text>
      <Text>Jegswa honks, and you know he's saying "I spent a lot of time on this escape room, and you ruined the experience. I'm sending you to the torture vortex."</Text>
      <Text>You vanish, and are transported to the torture vortex.</Text>
      <Text>    You got the "Torture Vortex" ending!   </Text>
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