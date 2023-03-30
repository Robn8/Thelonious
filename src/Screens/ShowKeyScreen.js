import { Text, View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import React from 'react';

const ShowKeyScreen = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Text>Now were learning!</Text>
            <Text>What the key means:</Text>
            <Text>What does the Dominant chord of the scale do:</Text>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({});

export default ShowKeyScreen;