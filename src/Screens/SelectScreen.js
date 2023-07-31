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
          numColumns={1} // Set numColumns to 1 to display items in a single column
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
    fontSize: 26,
    marginBottom: 0,
    marginTop: 5,
    color: '#402E5C',
    fontFamily: 'Marker Felt',
  },
  optionContainer: {
    flexDirection: 'row', // Set direction to row
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5
  },
  optionButton: {
    marginHorizontal: 0,
    padding: 34,
    backgroundColor: '#402E5C',
    marginTop: 100,
    
  },
  optionLabel: {
    color: 'white',
    fontSize: 24,
    paddingTop: 10
  },
});

export default SelectScreen;

