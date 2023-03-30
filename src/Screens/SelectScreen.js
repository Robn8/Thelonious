import { Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import React from 'react';
import { KeyData } from '../Data/KeyData'

const SelectScreen = ({ navigation }) => {
    return (
            <SafeAreaView style={styles.container}>
                <Text style={styles.header}>Select A Key!</Text>
                <FlatList
                  data={ KeyData }
                  keyExtractor={(item) => item.id}
                  renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('KeyScreen', { id: item.id })}>
                      <Text style={styles.letterStyle}>{item.title}</Text>
                    </TouchableOpacity>
                  )} 
                />
            </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    letterStyle: {
        fontSize: 64,
        marginBottom: 5
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    header: {
        marginBottom: 25,
        fontSize: 24,
    }
});

export default SelectScreen;
