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
        color: '#402E5C',
        fontFamily: 'Marker Felt'
    },
});

export default KeyDetails;