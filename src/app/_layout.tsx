import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { LogBox } from "react-native";

LogBox.ignoreAllLogs(true); // Ignore log notification

export default function RootLayout() {
  return (
    <>
      <StatusBar style="light" />
      <Stack>
        <Stack.Screen
          // Henter screens fra mappen (tabs) og giver den et navn, som kan bruges i navigationen
          name="(tabs)"
          options={{
            headerShown: false, // Skjuler headeren
          }}
        />
        <Stack.Screen name="+not-found" options={{}} />
      </Stack>
    </>
  );
}
