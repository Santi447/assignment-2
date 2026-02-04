import CircleButton from "@/components/ui/CircleButton";
import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { View, StyleSheet } from "react-native";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "white",
        tabBarStyle: { backgroundColor: "black" },
        tabBarLabelPosition: "below-icon",
        headerStyle: { backgroundColor: "black"},
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          headerTitle: "Home",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "home-sharp" : "home-outline"}
              size={24}
              color="white"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          title: "Games",
          headerTitle: "Games",
          headerTitleContainerStyle: {left: 45},
          headerTintColor: "white",
          headerRight: () => (
            <View style={{ flexDirection: "row" }}>
              <View style={styles.filterButton}>
                <CircleButton />
              </View>
              <View style={styles.whereToWatchButton}>
                <CircleButton />
              </View>
            </View>
          ),
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "football-sharp" : "football-outline"}
              size={24}
              color="white"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="tv"
        options={{
          title: "TV",
          headerTitle: "TV",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "play-circle-sharp" : "play-circle-outline"}
              size={24}
              color="white"
            />
          ),
        }}
      />
    </Tabs>
  );
}


const styles = StyleSheet.create({
    filterButton:{
        marginRight: 20
    },
    whereToWatchButton: {
        marginRight: 20
    }
})
