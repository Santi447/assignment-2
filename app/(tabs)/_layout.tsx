import CircleButton from "@/components/ui/CircleButton";
import ProfilePicture from "@/components/ui/ProfilePicture";
import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { StyleSheet, View } from "react-native";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "white",
        tabBarStyle: { backgroundColor: "black" },
        tabBarLabelPosition: "below-icon",
        headerStyle: { backgroundColor: "black", height: 150 },
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
          headerTitleContainerStyle: { left: 10, bottom: 35 },
          headerTintColor: "white",
          headerLeft: () => (
            <View>
              <View style={styles.profilePicture}>
                <ProfilePicture />
              </View>
            </View>
          ),
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
  filterButton: {
    marginRight: 20,
    marginBottom: 70,
  },
  whereToWatchButton: {
    marginRight: 20,
    marginBottom: 70,
  },
  profilePicture: {
    marginLeft: 17,
    marginBottom: 65,
  },
});
