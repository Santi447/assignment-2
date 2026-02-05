import { Text, View,StyleSheet } from "react-native";
import GameCardBox from "@/components/GameCardBox";

export default function Index() {
  return (

    <View style={style.viewStyle} >
      <View>
       <GameCardBox title="Copa Del Rey" SubTitle="Quarter-finals" gameTime="01:00 PM" moreInfo="See Matchday" teamA="Real Betis" teamB="Atletico Madrid"/>
      </View>
      <View>
       <GameCardBox title="Coupe de France" SubTitle="Round of 16" gameTime="01:00 PM" moreInfo="See Matchday" teamA="Strasbourg" teamB="Monaco"/>
      </View>
    </View>
  );
}


const style = StyleSheet.create({
  viewStyle: {
        flex: 1,

        backgroundColor: "black",
  }
})
