import { Text, StyleSheet, FlatList, TouchableOpacity, View, SafeAreaView } from 'react-native';
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
      <View style={styles.hero}>
        <Text style={styles.header}>Major Keys</Text>
        <Text style={styles.subHeader}>Choose a category to explore</Text>
      </View>

      <View style={styles.optionContainer}>
        <FlatList
          data={options}
          keyExtractor={(item) => item.value}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.optionList}
          renderItem={({ item }) => {
            const isSelected = selectedOption === item.value;

            return (
              <TouchableOpacity
                style={[
                  styles.optionButton,
                  isSelected && styles.optionButtonSelected,
                ]}
                onPress={() => setSelectedOption(item.value)}
                activeOpacity={0.8}
              >
                <MaterialCommunityIcons
                  name={item.icon}
                  size={34}
                  color={isSelected ? '#FFFFFF' : '#2D3142'}
                />
                <Text
                  style={[
                    styles.optionLabel,
                    isSelected && styles.optionLabelSelected,
                  ]}
                >
                  {item.label}
                </Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>

      <View style={styles.listWrapper}>
        <KeyList selectedOption={selectedOption} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F8FC',
  },
  hero: {
    paddingTop: 20,
    paddingHorizontal: 24,
    marginBottom: 18,
  },
  header: {
    fontSize: 34,
    fontWeight: '800',
    color: '#1B1F2A',
    textAlign: 'center',
  },
  subHeader: {
    fontSize: 16,
    color: '#6B7280',
    textAlign: 'center',
    marginTop: 8,
  },
  optionContainer: {
    marginBottom: 12,
  },
  optionList: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  optionButton: {
    width: 120,
    minHeight: 110,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    paddingVertical: 18,
    paddingHorizontal: 14,
    marginHorizontal: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 3,
  },
  optionButtonSelected: {
    backgroundColor: '#4F46E5',
    borderColor: '#4F46E5',
    transform: [{ scale: 1.03 }],
  },
  optionLabel: {
    marginTop: 10,
    fontSize: 15,
    fontWeight: '600',
    color: '#2D3142',
  },
  optionLabelSelected: {
    color: '#FFFFFF',
  },
  listWrapper: {
    flex: 1,
    marginTop: 8,
  },
});

export default SelectScreen;