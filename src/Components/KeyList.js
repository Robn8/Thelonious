import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
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
        <View>
            <FlatList
                  data={ data }
                  keyExtractor={(item) => item.id}
                  showsHorizontalScrollIndicator={false}
                  renderItem={({ item }) => (
                    <View>
                    <TouchableOpacity onPress={() => navigation.navigate('ShowKeyScreen', { id: item.id })}>
                      <KeyDetails result={item} />
                    </TouchableOpacity>
                    </View>
                  )} 
                />
        </View>
    );
};

const styles = StyleSheet.create({});

export default KeyList;