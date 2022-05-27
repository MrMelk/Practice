import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity, Dimensions, FlatList } from 'react-native';
import ButtonLord from './SubComponents/ButtonLord';



const DraOppVindu = ({exercises}) => {
    return (
        <View style={styles.container}>
        <ButtonLord />

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

export default DraOppVindu;