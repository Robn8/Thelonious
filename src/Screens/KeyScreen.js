import { Text, View, StyleSheet, FlatList } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import React from 'react';
import { KeyData } from '../KeyData/Data'

const KeyScreen = () => {
    return (
            <SafeAreaView style={styles.container}>
                <Text style={styles.header}>Select A Key To Find Out More!</Text>
                <FlatList
                  data={ KeyData }
                  keyExtractor={(item) => item.id}
                  renderItem={({ item }) => (
                    <Text style={styles.letterStyle}>{item.title}</Text>
                  )} 
                />
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
