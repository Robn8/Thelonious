import { Text, View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import React from 'react';
import backgroundStyle from '../Data/BackgroundStyle';

const HomeScreen = () => {
    return (
        <SafeAreaView style={backgroundStyle.container}>
            <Text>Home Screen</Text>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({});

export default HomeScreen;