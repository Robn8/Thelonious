import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const Box1 = ({ sharps, flats, title }) => {
    return (
    <View>
        {sharps !== 'None' && (
            <View style={styles.sharpBoxStyle}>
                <Text style={styles.sharpStyle}>Sharps</Text>
                <Text style={styles.sharpNumber}>{sharps}</Text>
            </View>
            )}
        {flats !== 'None' && (
            <View style={styles.flatBoxStyle}>
            <Text style={styles.flatText}>Flats</Text>
            <Text style={styles.flatNumber}>{flats}</Text>
            </View>
            )}
        {title === 'C' && (
            <View style={styles.flatBoxStyle}>
            <Text style={styles.cStyle}>C Has No Sharps Or Flats!</Text>
            </View>
        )}
    </View>
    )
};

const styles = StyleSheet.create({
    cStyle: {
        fontSize: 24,
        color: 'white',
        fontFamily: 'Futura-Bold',
        textAlign: 'center'
    },
    sharpStyle: {
        fontSize: 24,
        color: 'white',
        fontFamily: 'Marker Felt',
        paddingBottom: 5
    },
    sharpNumber: {
        fontSize: 28,
        color: 'white',
        fontFamily: 'Marker Felt'
    },
    sharpBoxStyle: {
        backgroundColor: 'maroon',
        height: 150,
        width: 150,
        alignItems: 'center',
        justifyContent: 'center',
        
        borderTopLeftRadius: 15,
    },
    flatBoxStyle: {
        backgroundColor: 'maroon',
        height: 150,
        width: 150,
        alignItems: 'center',
        justifyContent: 'center',
        
        borderTopLeftRadius: 15,
    },
    flatText: {
        fontSize: 24,
        color: 'white',
        fontFamily: 'Marker Felt',
        paddingBottom: 5
    },
    flatNumber: {
        fontSize: 28,
        color: 'white',
        fontFamily: 'Marker Felt'
    }
});

export default Box1;