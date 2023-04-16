import { Text, StyleSheet, FlatList, TouchableOpacity, View } from 'react-native';
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
        />
      </View>
      <Text style={styles.header}>Select A Key!</Text>
      <KeyList />
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#402E5C',
  },
  header: {
    fontSize: 24,
    marginBottom: 5,
    marginTop: 0,
    color: 'white'
  },
  optionContainer: {
    marginVertical: 20,
    flexDirection: 'row', // Set direction to row
    justifyContent: 'center'
  },
  optionButton: {
    marginHorizontal: 10,
    padding: 10,
    backgroundColor: 'lightblue',
    borderRadius: 5,
    marginTop: 100
  },
  optionLabel: {
    color: 'white',
    fontSize: 18,
  },
});

export default SelectScreen;

