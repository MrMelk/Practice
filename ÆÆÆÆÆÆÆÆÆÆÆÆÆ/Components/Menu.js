import React from "react";
import { View, TouchableOpacity, Image, Text, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import MenuButton from './SubComponents/MenuButtons';
import { log, profil, preplanned, stats } from './Images';
var width = Dimensions.get("window").width;


const Menu = ({ navigation }) => {

    //
    return (
        <View style={styles.menu}>
            <MenuButton buttonsStyle={styles.footerButton}
                image={profil} route={"Profile"} />
            <MenuButton buttonsStyle={styles.footerButton}
                image={stats} route={"Statistics"} />
            <MenuButton buttonsStyle={styles.footerButton}
                image={log} route={"Log"} />
            <MenuButton buttonsStyle={styles.footerButton}
                image={preplanned} route={"PrePlanned"} />


        </View>
    );

}

const styles = StyleSheet.create({
    menu: {
        flexDirection: 'row',
        width: "100%",
        height: "10%",
        position: "absolute",
        bottom: 0
    },
    button: {
        borderTopWidth: 1,
        borderBottomWidth: 1,
    },
    footerButton: {

        height: "100%",
        width: width * 0.25,

    },


});
export default Menu;