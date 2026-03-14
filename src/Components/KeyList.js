import React, { useState, useEffect } from 'react';
import { View, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { KeyData } from '../Data/KeyData.js';
import { SharpData } from '../Data/SharpData';
import { FlatData } from '../Data/FlatData';
import KeyDetails from './KeyDetails';
import { useNavigation } from '@react-navigation/native';

const getDataObject = (selectedOption) => {
  switch (selectedOption) {
    case 'naturals':
      return KeyData;
    case 'sharps':
      return SharpData;
    case 'flats':
      return FlatData;
    default:
      return KeyData;
  }
};

const KeyList = ({ selectedOption }) => {
  const [data, setData] = useState(() => getDataObject(selectedOption));
  const navigation = useNavigation();

  useEffect(() => {
    setData(getDataObject(selectedOption));
  }, [selectedOption]);

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            activeOpacity={0.85}
            onPress={() => navigation.navigate('ShowKeyScreen', { id: item.id })}
          >
            <KeyDetails result={item} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContent: {
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 28,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 18,
    padding: 16,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: '#eceff4',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 3,
  },
});

export default KeyList;