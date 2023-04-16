import { Text, TouchableOpacity, StyleSheet, FlatList, View } from 'react-native';
import React, { useState } from 'react';
import KeyList from './KeyList';

const AccFlatList = () => {
const [selectedOption, setSelectedOption] = useState('');

const options = [
    { label: 'Flats', value: 'flats' },
    { label: 'Naturals', value: 'naturals' },
    { label: 'Sharps', value: 'sharps' }
];

    return (
    
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
        
    );
}

const styles = StyleSheet.create({
    optionButton: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightgray',
        paddingVertical: 10,
        paddingHorizontal: 20,
      },
      optionLabel: {
        fontSize: 16
      }
});

export default AccFlatList;