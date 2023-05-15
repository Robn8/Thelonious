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
            <Text style={styles.cStyle}>C has no Sharps or Flats!</Text>
            </View>
        )}
    </View>
    )
};

const styles = StyleSheet.create({
    cStyle: {
        fontSize: 16,
        color: '#660099',
        fontFamily: 'Futura-Bold',
        textAlign: 'center'
    },
    sharpStyle: {
        fontSize: 16,
        color: '#660099',
        fontFamily: 'Futura-Bold',
        paddingBottom: 5
    },
    sharpNumber: {
        fontSize: 26,
        color: '#660099',
        fontFamily: 'Futura-Bold'
    },
    sharpBoxStyle: {
        backgroundColor: '#ffcc00',
        height: 150,
        width: 150,
        alignItems: 'center',
        justifyContent: 'center',
        borderRightWidth: 1,
        borderTopLeftRadius: 15,
    },
    flatBoxStyle: {
        backgroundColor: '#ffcc00',
        height: 150,
        width: 150,
        alignItems: 'center',
        justifyContent: 'center',
        borderRightWidth: 1,
        borderTopLeftRadius: 15,
    },
    flatText: {
        fontSize: 16,
        color: '#660099',
        fontFamily: 'Futura-Bold',
        paddingBottom: 5
    },
    flatNumber: {
        fontSize: 26,
        color: '#660099',
        fontFamily: 'Futura-Bold'
    }
});

export default Box1;