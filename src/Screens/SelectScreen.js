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
    backgroundColor: '#FFFFFF',
  },
  header: {
    fontSize: 36,
    marginBottom: 10,
    marginTop: -23,
    color: 'black',
    fontFamily: 'Marker Felt',
    alignSelf: 'center'
  },
  optionContainer: {
    flexDirection: 'row', // Set direction to row
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 35,
    marginLeft: 15
  },
  // size and prop of btns
  optionButton: {
    marginHorizontal: 0,
    padding: 30,
    backgroundColor: 'white',
    marginTop: 0,
    marginBottom: 0,
  },
  // text for btns: 
  optionLabel: {
    color: 'black',
    fontSize: 26,
    paddingTop: 0,
    fontFamily: 'Marker Felt',
    
  },
});

export default SelectScreen;