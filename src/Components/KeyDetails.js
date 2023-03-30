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
        fontSize: 64,
        marginBottom: 5
    },
});

export default KeyDetails;