import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import React from 'react';

const SharpBox = ({ sharps, flats, title }) => {
    return (
        <SafeAreaView>
          <View style={styles.boxContainer}>
          {sharps !== 'None' && (
             <Text>Sharps: {sharps}</Text>
            )}
          {flats !== 'None' && (
             <Text>Flats: {flats}</Text>
            )}
          {title === 'C' && (
            <Text>C has no Sharps or Flats!</Text>
          )}
          </View>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    boxContainer: {
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: 'white',
        height: 250,
        width: 250,
        borderRadius: 15,
        alignItems: 'center'
    },
    sharpStyle: {
        fontSize: 20,
        paddingTop: 5
    }
});

export default SharpBox;