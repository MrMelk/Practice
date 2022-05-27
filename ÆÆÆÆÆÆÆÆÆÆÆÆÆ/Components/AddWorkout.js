import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import ButtonLord from './SubComponents/ButtonLord';
import MenuButton from './SubComponents/MenuButtons';

const exercises = []

const AddWorkout = ({navigation}) => {
    return (
        <View style={styles.container}>
            


            <ButtonLord
                stil={styles.recordButtonStyle}
                text={"Record Workout"}
                onPress={() => navigation.navigate("New Workout")}

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
    recordButtonStyle: {
        paddingHorizontal: 8,
        paddingVertical: 6,
        elevation: 6,
        backgroundColor: "#dc143c",
        borderRadius: 10,

    },

});
export default AddWorkout;