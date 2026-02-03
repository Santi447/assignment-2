import { Pressable, StyleSheet, View, Text} from "react-native";

export function Header(){
    return(
        <View style={styles.headerBox}>
            <Text>Header</Text>
        </View>
    );
}

const styles = StyleSheet.create({
        headerBox : {
           flexDirection: 'row',
           alignItems: 'center',
           padding: 16,
           backgroundColor: 'black', 
        }
    });

