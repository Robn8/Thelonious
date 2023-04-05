import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const RelativeBox = ({ relative }) => {
    return (
          <View style={styles.boxContainer}>
            <Text style={styles.header}>Relative Minor</Text>
            <Text style={styles.body}>{relative}</Text>
          </View>
    )
};

const styles = StyleSheet.create({
    boxContainer: {
        backgroundColor: '#ffcc00',
        height: 125,
        width: 123,
        alignItems: 'center',
        justifyContent: 'center',
        borderTopRightRadius: 15
    },
    body: {
        fontSize: 26,
        color: '#660099',
        fontFamily: 'Futura-Bold',
    },
    header: {
        fontSize: 14,
        color: '#660099',
        fontFamily: 'Futura-Bold',
        paddingBottom: 5
    }
});

export default RelativeBox;