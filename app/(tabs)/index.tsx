import AlertButton from "@/components/ui/AlertButton";
import GameCardBox from "@/components/ui/GameCardBox";
import games from "@/data/games.json";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <ScrollView>
      <View style={style.viewStyle}>
        <Text style={style.allMatchesText}>All Matches</Text>
        <Text style={style.competitionText}>{`Competition you don't follow`}</Text>
        <View style={{ marginBottom: 20 }}>
          {games.map((game) => (
            <GameCardBox key={game.id} {...game} />
          ))}
        </View>
        <AlertButton title="Show Alert" message="This is an alert message!" />
      </View>
    </ScrollView>
  );
}

const style = StyleSheet.create({
  viewStyle: {
    flex: 1,
    backgroundColor: "black",
    paddingTop: 35,
  },
  allMatchesText: {
    color: "white",
    marginLeft: "5%",
    paddingTop: 40,
    position: "absolute",
    fontWeight: "bold",
  },
  competitionText: {
    color: "grey",
    marginLeft: "5%",
    position: "absolute",
    paddingTop: 55,
  },
});
