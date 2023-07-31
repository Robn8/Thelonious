import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const TriadBox = ({ triad }) => {
    return (
          <View style={styles.boxContainer}>
            <Text style={styles.header}>Major Triad</Text>
            <Text style={styles.body}>{triad}</Text>
          </View>
    )
};

const styles = StyleSheet.create({
    boxContainer: {
        backgroundColor: 'hotpink',
        height: 147,
        width: 150,
        alignItems: 'center',
        justifyContent: 'center',
        borderRightWidth: 1,
        borderBottomRightRadius: 15,
    },
    header: {
        color: 'white',
        fontFamily: 'Marker Felt',
        fontSize: 24,
        paddingBottom: 5
    },
    body: {
        color: 'white',
        fontFamily: 'Marker Felt',
        fontSize: 28
    }
});

export default TriadBox;