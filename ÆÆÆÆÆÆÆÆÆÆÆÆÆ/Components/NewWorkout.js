import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import ButtonLord from './SubComponents/ButtonLord';

const NewWorkout = ({navigation}) => {
    return (
        <View style={styles.container}>
            
            <ButtonLord 
            stil={styles.addExerciseButton}
            text={"Add exercises"}
            onPress={() => navigation.navigate("DraOppVindu")}
            />

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
    addExerciseButton: {
        //paddingHorizontal: 8,
        //paddingVertical: 6,
        //elevation: 6,
        backgroundColor: "#1E90FF",
        //borderRadius: 10,

    },


});

export default NewWorkout;