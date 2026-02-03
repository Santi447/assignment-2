import { HeaderTitle } from "@react-navigation/elements";
import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          headerTitle: "Home",
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          title: "Games",
          headerTitle: "Home",
        }}
      />
      <Tabs.Screen
        name="tv"
        options={{
          title: "TV",
          headerTitle: "Home",
        }}
      />
    </Tabs>
  );

}
