import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import React from 'react';

const KeyScreen = () => {
    return (
            <SafeAreaView style={styles.container}>
                <Text style={styles.header}>Select A Key To Find Out More!</Text>
                <Text style={styles.letterStyle}>A</Text>
                <Text style={styles.letterStyle}>B</Text>
                <Text style={styles.letterStyle}>C</Text>
                <Text style={styles.letterStyle}>D</Text>
                <Text style={styles.letterStyle}>E</Text>
                <Text style={styles.letterStyle}>F</Text>
                <Text style={styles.letterStyle}>G</Text>
            </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    letterStyle: {
        fontSize: 64,
        marginBottom: 15
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    header: {
        marginBottom: 15,
        fontSize: 24,
    }
});

export default KeyScreen;
