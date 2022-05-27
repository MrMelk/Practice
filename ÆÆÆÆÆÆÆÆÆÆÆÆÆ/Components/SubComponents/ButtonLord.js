import React from "react";
import { View, TouchableOpacity, Image, Text, StyleSheet } from 'react-native';

const ButtonLord = ({ stil, onPress, textStil, text, }) => {
    return (
        <TouchableOpacity
            
            activeOpacity={0.5}
            onPress={onPress}
            style={stil}
        >
            <Text style={textStil}>{text}</Text>
        </TouchableOpacity>
    );
}
export default ButtonLord;
