import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import Menu from './Menu';
import MenuButton from './SubComponents/MenuButtons';
import { plussTegn } from "./Images";
import addWorkout from "./AddWorkout.js"

var width = Dimensions.get("window").width;
var height = Dimensions.get("window").height;
var plussButtonHeight = 40;
var middleOfScreen = (height - (height / 10)) / 2 - plussButtonHeight;

const Home = ({ username }) => {
    console.log("yoyo")
    return (

        <View style={styles.container}>
            <Text>Wollah {username}, fet workout!</Text>
            <View>
                <MenuButton buttonsStyle={styles.plussButton}
                    image={plussTegn} route={"Record Workout"} />
            </View>

            <Menu />
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
    footerButton: {
        height: 70,
        width: width * 0.25,

    },
    plussButton: {
        height: plussButtonHeight,
        width: width * 0.5,
        position: "absolute",
        top: middleOfScreen,
        left: 0

    },
});

export default Home;