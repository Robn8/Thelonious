import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const RelativeBox = ({ relative }) => {
    return (
          <View style={styles.boxContainer}>
            <Text style={styles.header}>Rel. Minor</Text>
            <Text style={styles.body}>{relative}</Text>
          </View>
    )
};

const styles = StyleSheet.create({
    boxContainer: {
        backgroundColor: '#FFC857',
        height: 150,
        width: 150,
        alignItems: 'center',
        justifyContent: 'center',
        borderTopRightRadius: 15,
        borderBottomWidth: 1
    },
    body: {
        fontSize: 28,
        color: 'maroon',
        fontFamily: 'Marker Felt',
    },
    header: {
        fontSize: 24,
        color: 'maroon',
        fontFamily: 'Marker Felt',
        paddingBottom: 5
    }
});

export default RelativeBox;