import { Text, StyleSheet, TouchableOpacity, View, SafeAreaView } from 'react-native';
import React, { useState } from 'react';
import KeyList from '../Components/KeyList';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const getOptionTheme = (selectedOption) => {
  switch (selectedOption) {
    case 'sharps':
      return {
        accent: '#DC2626',
        accentSoft: '#FEE2E2',
        accentText: '#B91C1C',
      };
    case 'flats':
      return {
        accent: '#0F766E',
        accentSoft: '#CCFBF1',
        accentText: '#115E59',
      };
    case 'naturals':
    default:
      return {
        accent: '#4F46E5',
        accentSoft: '#EEF2FF',
        accentText: '#4338CA',
      };
  }
};

const SelectScreen = ({ navigation }) => {
  const [selectedOption, setSelectedOption] = useState('naturals');
  const theme = getOptionTheme(selectedOption);

  const options = [
    {
      label: 'Flats',
      value: 'flats',
      icon: 'music-accidental-flat',
      color: '#0F766E',
    },
    {
      label: 'Naturals',
      value: 'naturals',
      icon: 'music-accidental-natural',
      color: '#4F46E5',
    },
    {
      label: 'Sharps',
      value: 'sharps',
      icon: 'music-accidental-sharp',
      color: '#DC2626',
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topBar}>
        <TouchableOpacity
          style={styles.homeIconButton}
          onPress={() => navigation.navigate('Home')}
          activeOpacity={0.8}
        >
          <MaterialCommunityIcons name="home-outline" size={24} color="#1F2937" />
        </TouchableOpacity>
      </View>

      <View style={styles.headerBlock}>
        <Text style={styles.header}>Major Keys</Text>
        <Text style={styles.subHeader}>Tap a Key to explore</Text>
      </View>

      <View style={styles.optionRow}>
        {options.map((item) => {
          const isSelected = selectedOption === item.value;

          return (
            <TouchableOpacity
              key={item.value}
              style={[
                styles.optionButton,
                isSelected && {
                  backgroundColor: theme.accent,
                  borderColor: theme.accent,
                },
              ]}
              onPress={() => setSelectedOption(item.value)}
              activeOpacity={0.85}
            >
              <MaterialCommunityIcons
                name={item.icon}
                size={28}
                color={isSelected ? '#FFFFFF' : item.color}
              />
              <Text
                style={[
                  styles.optionText,
                  { color: isSelected ? '#FFFFFF' : '#2C2C2C' },
                ]}
              >
                {item.label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>

      <KeyList selectedOption={selectedOption} theme={theme} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FB',
  },
  topBar: {
    paddingHorizontal: 16,
    paddingTop: 10,
    marginBottom: 8,
  },
  homeIconButton: {
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,
  },
  headerBlock: {
    paddingHorizontal: 20,
    paddingBottom: 12,
  },
  header: {
    fontSize: 34,
    fontWeight: '800',
    color: '#1C1C1E',
    textAlign: 'center',
  },
  subHeader: {
    marginTop: 6,
    fontSize: 15,
    color: '#6B7280',
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
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 2,
  },
  optionText: {
    marginTop: 6,
    fontSize: 14,
    fontWeight: '600',
  },
});

export default SelectScreen;