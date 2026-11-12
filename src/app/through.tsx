import { Link } from "expo-router";

import { StyleSheet, Text, View } from "react-native";


export default function Index() {
  return (
    <View style={styles.container}>
      <Text>You go through the door! This is where the story ends. Don't ask me to tell you what happens next, this is my artistic choice.</Text>
      <Text>You got the "Through the Door" ending!</Text>
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
