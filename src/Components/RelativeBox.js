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
        backgroundColor: 'white',
        height: 150,
        width: 148,
        alignItems: 'center',
        justifyContent: 'center',
        borderTopRightRadius: 15
    },
    body: {
        fontSize: 28,
        color: 'hotpink',
        fontFamily: 'Marker Felt',
    },
    header: {
        fontSize: 24,
        color: 'hotpink',
        fontFamily: 'Marker Felt',
        paddingBottom: 5
    }
});

export default RelativeBox;