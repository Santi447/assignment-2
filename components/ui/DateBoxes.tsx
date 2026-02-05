import { View, Text, StyleSheet } from "react-native";

type props = {
  title?: string;
};

export default function DateBoxes(props: props) {
  return( 
    <View style={styles.dateBox}>
        <Text>{props.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    dateBox:{
        borderWidth: 1,
    }
})