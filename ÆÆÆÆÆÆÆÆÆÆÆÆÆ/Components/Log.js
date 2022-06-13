import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';

const Log = () => {
    return (
        <View style={styles.container}>
            <Text>Log screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#1E90FF",
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: 20,
        paddingBottom: 20,
        height: "100%"
    },
});
export default Log;