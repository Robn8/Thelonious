import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const DomBox = ({ dom }) => {
    return (
          <View style={styles.boxContainer}>
            <Text>{dom}</Text>
          </View>
    )
};

const styles = StyleSheet.create({
    boxContainer: {
        backgroundColor: 'white',
        height: 122,
        width: 125,
        alignItems: 'center',
        justifyContent: 'center',
        borderRightWidth: 1,
        borderBottomLeftRadius: 15,
    },
});

export default DomBox;