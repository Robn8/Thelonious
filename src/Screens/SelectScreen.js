import { Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import React from 'react';
import KeyList from '../Components/KeyList';

const SelectScreen = () => {
    return (
            <SafeAreaView style={styles.container}>
                <Text style={styles.header}>Select A Key!</Text>
                <KeyList />
            </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    header: {
        fontSize: 24,
        marginBottom: 5,
        marginTop: 50
    }
});

export default SelectScreen;
