import {StyleSheet, Button, Alert} from 'react-native';

type props = {
 title : string,
 message? : string   
};

// const buttonAlert = () => Alert.alert

export default function AlertButton(Props : props){
    const buttonAlert = () => Alert.alert(Props.title, Props.message,[
        {text:'Cancel',onPress: () => console.log('Cancel pressed'), style:'cancel'},
        {text: 'Ok', onPress: () => console.log('Ok pressed'),style: 'default'},
    ]);
    return(
        <Button title={Props.title} onPress={buttonAlert}/>
    );
}

const styles = StyleSheet.create({
    cancel:{
        color: 'red',
    },
    default:{
        color: 'blue',
    }
})