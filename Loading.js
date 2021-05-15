import React from "react";
import { StyleSheet, Text, View, StatusBar } from 'react-native';

export default function Loading(){
    return (
        <View style={styles.container}>
            <StatusBar barSytle="dark-content" />
            <Text sytle={styles.text}>Getting the lovely weather</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-end",
        paddingHorizontal: 30,
        paddingVertical: 100,
        backgroundColor: "#fdf6aa"
    },
    text: {
        color: "#2c2c2c",
        fontSize: 30
    }
});