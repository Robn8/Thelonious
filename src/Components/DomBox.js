import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const DomBox = ({ dom, title }) => {
    return (
          <View style={styles.boxContainer}>
            <Text style={styles.header}>Dominant</Text>
            <Text style={styles.body}>{dom}</Text>
          </View>
    )
};

const styles = StyleSheet.create({
    boxContainer: {
        backgroundColor: '#ffcc00',
        height: 122,
        width: 125,
        alignItems: 'center',
        justifyContent: 'center',
        borderRightWidth: 1,
        borderBottomLeftRadius: 15,
    },
    header: {
        color: '#660099',
        fontFamily: 'Futura-Bold',
        fontSize: 16,
        paddingBottom: 5
    },
    body: {
        color: '#660099',
        fontFamily: 'Futura-Bold',
        fontSize: 28
    }
});

export default DomBox;