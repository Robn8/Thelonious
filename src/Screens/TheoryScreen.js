import { Text, View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import React from 'react';

const TheoryScreen = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Text>What the key means:</Text>
            <Text>What does the Dominant chord of the scale do:</Text>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({});

export default TheoryScreen;