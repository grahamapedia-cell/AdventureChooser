import { Image } from 'expo-image';
import { Link } from "expo-router";

import { StyleSheet, Text, View } from "react-native";

const door = require("@/assets/images/bad_idea.png")

export default function Index() {
  return (
    <View style={styles.container}>
      <Image source={door} style={styles.image} />
      <Text>Not wanting to actually have to use your brain, you open the handy-dandy ChatGPT app on your phone.</Text>
      <Text>You put into the app: "I need help getting through this escape room"</Text>
      <Text>It responds:"That sounds like a perilous predicament! Don’t worry — with my advice, you’ll get through in no time."</Text>
      <Link href="/swa" style={styles.button}>   Use its instructions   </Link>
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
    height: 320,
    
    borderRadius: 4,
  }
});