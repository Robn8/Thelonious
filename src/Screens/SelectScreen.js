import { Text, StyleSheet, FlatList, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import KeyList from '../Components/KeyList';

import { MaterialCommunityIcons } from '@expo/vector-icons';


const SelectScreen = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const options = [
    { label: 'Flats', value: 'flats', icon: "music-accidental-flat" },
    { label: 'Naturals', value: 'naturals', icon: "music-accidental-natural" },
    { label: 'Sharps', value: 'sharps', icon: "music-accidental-sharp" }
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
              <MaterialCommunityIcons name={item.icon} size={60} color="black" />
              
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
    marginBottom: 0,
    marginTop: -25,
    color: 'black',
    fontFamily: 'Marker Felt',
    alignSelf: 'center'
  },
  optionContainer: {
    flexDirection: 'row', // Set direction to row
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
    marginLeft: 0
  },
  // size and prop of btns
  optionButton: {
    marginHorizontal: 0,
    padding: 30,
    backgroundColor: 'white',
    marginTop: 0,
    marginBottom: 0,
  },
  
});

export default SelectScreen;