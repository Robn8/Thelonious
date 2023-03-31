import { Text, View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import React from 'react';
import { KeyData } from '../Data/KeyData';

const ShowKeyScreen = ({ route }) => {
    const { id } = route.params;
    const item = KeyData.find(item => item.id === id);

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.keyStyle}>{item.title}</Text>
            <Text>Diatonic Chords In The Key of {item.title}:</Text>
            <Text style={styles.chordStyle}>{item.chords}</Text>
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
        alignItems: 'center',
        backgroundColor: '#D8D8D8',
    },
    keyStyle: {
        paddingBottom: 5,
        fontSize: 64,
    },
    chordStyle: {
        paddingBottom: 5,
        paddingTop: 2,
        paddingLeft: 2,
        paddingRight: 2,
        fontSize: 20
    }
});

export default ShowKeyScreen;