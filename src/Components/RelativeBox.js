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
        fontSize: 28,
        color: '#660099',
        fontFamily: 'Futura-Bold',
    },
    header: {
        fontSize: 14,
        color: '#660099',
        fontFamily: 'Futura-Bold',
    }
});

export default RelativeBox;