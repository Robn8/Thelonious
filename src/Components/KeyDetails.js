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
        fontSize: 66,
        marginBottom: 5,
        color: '#402E5C'
    },
});

export default KeyDetails;