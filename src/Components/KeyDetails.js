import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const KeyDetails = ({ result }) => {
    return (
        <View>
            <Text style={styles.letterStyle}>{result.title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    letterStyle: {
        fontSize: 62,
        marginBottom: 0,
        color: 'black',
        fontFamily: 'Marker Felt',
        alignSelf: 'center',
        marginBottom: 15
    },
});

export default KeyDetails;