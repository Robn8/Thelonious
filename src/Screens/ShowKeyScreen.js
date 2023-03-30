import { Text, View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import React from 'react';
import { KeyData } from '../Data/KeyData';

const ShowKeyScreen = ({ route }) => {
    const { id } = route.params;
    const item = KeyData.find(item => item.id === id);

    return (
        <SafeAreaView style={styles.container}>
            <Text>Show Key Details Screen</Text>
            <Text>{item.title}</Text>
            <Text>Chords in This Key: {item.chords}</Text>
            <Text>Number of Sharps in {item.title}: {item.sharps}</Text>
            <Text>Number of Flats in {item.title}: {item.flats}</Text>
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