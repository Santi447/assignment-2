import { View, StyleSheet} from "react-native";

export default function ProfilePicture(){
    return(
        <View style={styles.profilePicture}></View>
    );
} 

const styles = StyleSheet.create({
    profilePicture: {
        width: 40,
        height: 40,
        borderRadius: 30,
        backgroundColor: "green",
        flexDirection: "row",
    }
})