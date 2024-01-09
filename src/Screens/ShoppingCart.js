//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, Pressable } from 'react-native';
import cart from '../data/cart';
import CartListItem from '../components/CartListItem';

// create a component
const ShoppingCartTotals = () => {
    return (
        <View style={styles.totalContainer}>
            <View style={styles.row}>
                <Text style={styles.text}>Subtotal:</Text>
                <Text style={styles.text}>10,000 US$</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.text}>Delivery:</Text>
                <Text style={styles.text}>1,000 US$</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.textBold}>Total:</Text>
                <Text style={styles.textBold}>11,000 US$</Text>
            </View>
        </View>
    )
}
const ShoppingCart = () => {
    return (
        <>
            <FlatList data={cart} renderItem={({ item }) => (
                <CartListItem cartItem={item} />
            )}
                ListFooterComponent={ShoppingCartTotals}
            />
            <Pressable style={styles.button}>
                <Text style={styles.buttonText}>Checkout</Text>
            </Pressable>
        </>
    );
};

// define your styles
const styles = StyleSheet.create({
    totalContainer: {
        margin: 20,
        paddingTop: 10,
        borderTopWidth: 1,
        borderColor: 'gainsboro'
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 2,
    },
    text: {
        fontSize: 16,
        color: 'gray',
    },
    textBold: {
        fontSize: 16,
        color: 'black',
        fontWeight: '500',
    },
    button: {
        position: 'absolute',
        backgroundColor: 'black',
        bottom: 30,
        width: '90%',
        alignSelf: 'center',
        padding: 20,
        alignItems: 'center',
        borderRadius: 100
    },
    buttonText: {
        color: 'white',
        fontWeight: '500',
        fontSize: 16
    },
});

//make this component available to the app
export default ShoppingCart
    ;
