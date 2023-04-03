import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const RelativeBox = ({ relative }) => {
    return (
          <View style={styles.boxContainer}>
            <Text>{relative}</Text>
          </View>
    )
};

const styles = StyleSheet.create({
    boxContainer: {
        backgroundColor: 'white',
        height: 120,
        width: 120,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15
    },
});

export default RelativeBox;