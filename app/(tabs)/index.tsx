import { Text, View,StyleSheet, ScrollView } from "react-native";
import GameCardBox from "@/components/GameCardBox";
import games from "@/data/games.json";

export default function Index() {
  return (
    <ScrollView>
      <View style={style.viewStyle} >
        <View style={{marginBottom: 20}}>
        {games.map((game) => (
          <GameCardBox key={game.id} {...game}/>
        ))}
        </View>
      </View>
    </ScrollView>
  );
}


const style = StyleSheet.create({
  viewStyle: {
        flex: 1,

        backgroundColor: "black",
  }
})
