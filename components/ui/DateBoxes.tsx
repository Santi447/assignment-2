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
        paddingHorizontal: 8,
        backgroundColor: "#77777771",
    },
    dateText:{
        color: "white",
        margin: 'auto',
    }
})