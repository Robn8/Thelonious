import { Text, StyleSheet, FlatList, TouchableOpacity, View } from 'react-native';
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
    <View style={styles.container}>
      <View style={styles.optionContainer}>
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
          contentContainerStyle={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}
          style={{ alignSelf: 'center' }}
        />
      </View>
      <Text style={styles.header}>Select A Major Key!</Text>
      <KeyList selectedOption={selectedOption} />
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D8D8D8',
  },
  header: {
    fontSize: 24,
    marginBottom: 5,
    marginTop: 10,
    color: '#402E5C'
  },
  optionContainer: {
    marginVertical: 0,
    flexDirection: 'row', // Set direction to row
    justifyContent: 'center'
  },
  optionButton: {
    marginHorizontal: 10,
    padding: 10,
    backgroundColor: '#402E5C',
    borderRadius: 5,
    marginTop: 125
  },
  optionLabel: {
    color: 'white',
    fontSize: 18,
  },
});

export default SelectScreen;

