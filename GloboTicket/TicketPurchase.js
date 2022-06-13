import React, { useState } from "react";
import { Image, Text, TextInput, View, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import Tickets from "./Tickets";
import globoTickets from './TicketsDB'

const TicketPurchase = ({ route, navigation }) => {
    const [ticketQuantity, setTicketQuantity] = useState('1');
    const { tickID } = route.params;
    const selectedEvent = globoTickets.find(ticket => Tickets.eventID === tickID);

    const purchase = () => {
        var price = selectedEvent.price * ticketQuantity;
        Alert.alert(`Your cost is ${price}`);
        navigation.navigate('Home');
    };


    return (
        <View style={styles.container}>
            <Text style={styles.title}>{selectedEvent}</Text>
            <Image
                style={styles.ticketimage}
                source={selectedEvent.image}
            />
            <Text style={styles.shortdescription}>
                {selectedEvent.shortDescription}
            </Text>
            <Text style={styles.description}>
                {selectedEvent.description}
            </Text>
            <View style={styles.purchaserow}>
                <Text style={styles.shortdescription}>Quantity :</Text>
                <TextInput
                    style={styles.quantityinput}
                    onChangeText={quantity => setTicketQuantity(quantity)}
                    value={ticketQuantity}
                    selectTextOnFocus={true}
                    keyboardType='numeric'
                />
            </View>
            <Text style={styles.price}>
                Total : ${selectedEvent.price * ticketQuantity}
            </Text>
            <TouchableOpacity
                onPress={purchase}
                style={styles.button}
            >
                <Text style={styles.buttontext}>BBuy Now</Text>
            </TouchableOpacity>
        </View>
    )
}