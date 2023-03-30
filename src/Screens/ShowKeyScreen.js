import { Text, View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import React from 'react';
import { KeyData } from '../Data/KeyData';

const ShowKeyScreen = ({ route }) => {
    const { id } = route.params;
    const item = KeyData.find(item => item.id === id);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Text>Show Key Details Screen</Text>
            <Text>{item.title}</Text>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({});

export default ShowKeyScreen;