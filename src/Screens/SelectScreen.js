import { Text, StyleSheet, TouchableOpacity, View, SafeAreaView } from 'react-native';
import React, { useState } from 'react';
import KeyList from '../Components/KeyList';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const SelectScreen = () => {
  const [selectedOption, setSelectedOption] = useState('naturals');

  const options = [
    { label: 'Flats', value: 'flats', icon: 'music-accidental-flat' },
    { label: 'Naturals', value: 'naturals', icon: 'music-accidental-natural' },
    { label: 'Sharps', value: 'sharps', icon: 'music-accidental-sharp' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerBlock}>
        <Text style={styles.header}>Major Keys</Text>
        <Text style={styles.subHeader}>Choose a category to explore</Text>
      </View>

      <View style={styles.optionRow}>
        {options.map((item) => {
          const isSelected = selectedOption === item.value;

          return (
            <TouchableOpacity
              key={item.value}
              style={[styles.optionButton, isSelected && styles.optionButtonSelected]}
              onPress={() => setSelectedOption(item.value)}
              activeOpacity={0.85}
            >
              <MaterialCommunityIcons
                name={item.icon}
                size={28}
                color={isSelected ? '#fff' : '#2c2c2c'}
              />
              <Text style={[styles.optionText, isSelected && styles.optionTextSelected]}>
                {item.label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>

      <KeyList selectedOption={selectedOption} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f7fb',
  },
  headerBlock: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 12,
  },
  header: {
    fontSize: 34,
    fontWeight: '800',
    color: '#1c1c1e',
    textAlign: 'center',
  },
  subHeader: {
    marginTop: 6,
    fontSize: 15,
    color: '#6b7280',
    textAlign: 'center',
  },
  optionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  optionButton: {
    flex: 1,
    marginHorizontal: 5,
    paddingVertical: 14,
    borderRadius: 18,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#e5e7eb',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 2,
  },
  optionButtonSelected: {
    backgroundColor: '#4f46e5',
    borderColor: '#4f46e5',
  },
  optionText: {
    marginTop: 6,
    fontSize: 14,
    fontWeight: '600',
    color: '#2c2c2c',
  },
  optionTextSelected: {
    color: '#ffffff',
  },
});

export default SelectScreen;