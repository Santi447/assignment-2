import { View, Text, StyleSheet } from "react-native";


type Props = {
    title: string,
    SubTitle: string,
    gameTime: string,
    teamA?: string,
    teamB?: string,
    compLogoUrl?: string,
    moreInfo?: string,



};

export default function GameCardBox(props: Props) {
    return(
        <View style={styles.GameBox}>
            <Text style={styles.TextColorWhite}>{props.compLogoUrl}</Text>
            <Text style={[styles.TextColorWhite,styles.CompTitleStyle]}>{props.title}</Text>
            <View style={styles.TopHorizontalSeperator}/>
            <Text style={[styles.TextColorWhite,styles.CompSubTitleStyle]}>{props.SubTitle}</Text>
            <View style={styles.MiddleLeftVeritcalSeperator}/>
            <Text style={[styles.TextColorWhite,styles.GameTimeStyle]}>{props.gameTime}</Text>
            <View style={styles.MiddleRightVeritcalSeperator}/>
            <Text style={[styles.TextColorWhite,styles.TeamAStyle]}>{props.teamA}</Text>
            <Text style={[styles.TextColorWhite,styles.TeamBStyle]}>{props.teamB}</Text>
            <View style={styles.BottomHorizontalSeperator}/>
            <Text style={[styles.TextColorWhite,styles.SeeMatchdayStyle]}>{props.moreInfo}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    GameBox:{
        backgroundColor: "#1A1F25",
        height: 250,
        marginTop: 45,
        position: "relative"

    },

    TextColorWhite:{
        color: "white",
    },
    GameTimeStyle: {
        fontWeight: 'bold',
        marginLeft: "60%",
        marginTop: "35%",
        position: "absolute",
    },
    CompTitleStyle: {
        fontSize: 16,
        marginLeft: "15%",
        marginTop: "3%",
    },
    CompSubTitleStyle: {
        fontSize: 12,
        marginLeft: "15%"
    },
    SeeMatchdayStyle: {
        marginTop: "57%",
        marginLeft: "38%",
        position: "absolute",
    },
    TeamAStyle:{
        marginLeft: "10%",
        fontSize: 14,
        marginTop: "30%",
        position: "absolute",
        
    },
    TeamBStyle:{
        marginLeft: "10%",
        fontSize: 14,
        position: "absolute",
        marginTop: "40%",
        // marginBottom:,
    },
    TopHorizontalSeperator: {
        height: 1,
        backgroundColor: "grey",
        width: "90%",
        marginTop: "22%",
        position: "absolute", 
        marginLeft: "5%",
    },
        BottomHorizontalSeperator: {
        height: 1,
        backgroundColor: "grey",
        width: "90%",
        marginTop: "52%",
        position: "absolute", 
        marginLeft: "5%",
    },
      MiddleRightVeritcalSeperator:{
        width: 1,
        backgroundColor: "grey",
        height: "30%",
        position: "absolute",
        marginLeft: "81%",
        marginTop: "28%",
      },
      MiddleLeftVeritcalSeperator:{
        width: 1,
        backgroundColor: "grey",
        height: "30%",
        position: "absolute",
        marginLeft: "55%",
        marginTop: "28%",
      }  
});