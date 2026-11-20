import { Link, Stack } from "expo-router";
import { StyleSheet, View } from "react-native";

export default function NotFoundScreen() {
  return (
    <>
      {/* Stack = add configuration directly like options, title osv. instead of going to layout and add a new screen*/}
      <Stack.Screen options={{ title: "Oops! Not found" }} />
      <View style={styles.container}>
        <Link href="/" style={styles.button}>
          Go back to homepage
        </Link>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#25292e",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  text: {
    color: "#fff",
  },

  button: {
    fontSize: 20,
    textDecorationLine: "underline",
    color: "#fff",
  },
});
