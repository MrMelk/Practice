import React from "react";
import { View, TouchableOpacity, Image, Text, StyleSheet } from 'react-native';
import { useNavigation } from "@react-navigation/native";

const MenuButton = ({ image, buttonsStyle, route }) => {
    const navigation = useNavigation();

    return (
        <TouchableOpacity onPress={() => navigation.navigate(route)}>
            <Image style={buttonsStyle}
                source={image} />
        </TouchableOpacity>

    );

}

export default MenuButton;