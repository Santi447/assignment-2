import { View, Text, StyleSheet } from "react-native";

type props = {
  title?: string;
};

export default function DateBoxes(props: props) {
  return( 
    <View style={styles.dateBox}>
        <Text style={styles.dateText}>{props.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    dateBox:{

        borderRadius: 3,
        paddingVertical: 4,
        paddingHorizontal: 9,
        backgroundColor: "#1A1A1A",
        marginRight: -2,
        borderColor: "#242424",
        borderWidth: 1,
    },
    dateText:{
        color: "white",
        margin: 'auto',
    }
})