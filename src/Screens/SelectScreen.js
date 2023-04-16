import { Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import React, { useState } from 'react';
import KeyList from '../Components/KeyList';

const SelectScreen = () => {
const [selectedOption, setSelectedOption] = useState('');

const options = [
        { label: 'Flats', value: 'flats' },
        { label: 'Naturals', value: 'naturals' },
        { label: 'Sharps', value: 'sharps' }
    ];

    return (
            <SafeAreaView style={styles.container}>
                <FlatList
                data={options}
                renderItem={({ item }) => (
                    <TouchableOpacity
                    style={styles.optionButton}
                    onPress={() => setSelectedOption(item.value)}
                    >
                    <Text style={styles.optionLabel}>{item.label}</Text>
                    </TouchableOpacity>
                )}
                horizontal={true}
                />
                {selectedOption === 'naturals' && (
                    // Render the information for naturals option
                    <KeyList />
                )}
            </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    optionButton: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightgray',
        paddingVertical: 10,
        paddingHorizontal: 20
      },
      optionLabel: {
        fontSize: 16
      }
});

export default SelectScreen;
