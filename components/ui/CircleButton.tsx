import { View,StyleSheet } from "react-native";


export default function CircleButton() {
  return( 
  <View style={styles.button}>
   
  </View>
  );
}

const styles = StyleSheet.create({
    button: {
        width: 30,
        height: 30,
        borderRadius: 30,
        backgroundColor: "grey",
        flexDirection: "row",
    }
})