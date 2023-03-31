import { Text, View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import React from 'react';
import { KeyData } from '../Data/KeyData';

const ShowKeyScreen = ({ route }) => {
    const { id } = route.params;
    const item = KeyData.find(item => item.id === id);

    return (
        <SafeAreaView style={styles.container}>
            <Text>{item.title}</Text>
            <Text>Diatonic Chords In The Key of {item.title}: {item.chords}</Text>
            <Text>Number of Sharps in {item.title}: {item.sharps}</Text>
            <Text>Number of Flats in {item.title}: {item.flats}</Text>
            <Text>Relative Minor of {item.title}: {item.relativeMinor}</Text>
            <Text>Dominant Chord of {item.title}: {item.dominant}</Text>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
});

export default ShowKeyScreen;