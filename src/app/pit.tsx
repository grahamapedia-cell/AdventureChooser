import { Link } from "expo-router";

import { StyleSheet, Text, View } from "react-native";


export default function Index() {
  return (
    <View style={styles.container}>
      <Text>Okay. You're in a pit now. Good job. I guess you starve there and die.</Text>
      <Text>You got the "In a pit" ending!</Text>
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
