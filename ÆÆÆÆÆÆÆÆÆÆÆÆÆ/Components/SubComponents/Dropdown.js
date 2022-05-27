import React from "react";
import SelectDropdown from "react-native-select-dropdown";
import { View, TouchableOpacity, Image, Text, StyleSheet } from 'react-native';

const testelest = ["swaggers", "bulldoggers", "fourtwentyshrek"]

const Dropdown = () => {
    return (
        <SelectDropdown
            data={"testelest"}
            rowStyle={styles.rowstyle}
            buttonStyle={styles.buttonstyle}
            onSelect={(selectedItem, index) => {
                console.log(selectedItem, index)
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem
            }}
            rowTextForSelection={(item, index) => {
                return item
            }}
        />
    );
}

const styles = StyleSheet.create({
    rowstyle: {
        height: 50,
        width: 100
    },
    buttonstyle: {
        height: 30,
        width: 60
    }
})

export default Dropdown;