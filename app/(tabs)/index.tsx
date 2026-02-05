import { Text, View,StyleSheet } from "react-native";
import {Header} from "../../components/ui/header";
import CircleButton from "../../components/ui/CircleButton";
import GameCardBox from "@/components/GameCardBox";

export default function Index() {
  return (

    <View style={style.viewStyle} >
     <GameCardBox title="Copa Del Rey" SubTitle="Quarter-Finals" gameTime="01:00 PM" moreInfo="See Matchday" teamA="Real Betis" teamB="Atletico Madrid"/>
    </View>
  );
}


const style = StyleSheet.create({
  viewStyle: {
        flex: 1,

        backgroundColor: "black",
  }
})
