import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { KeyData } from '../Data/KeyData';
import KeyDetails from './KeyDetails';
import { withNavigation } from '@react-navigation/compat';


const KeyList = ({ navigation, selectedOption }) => {
  console.log(selectedOption)

    return (
        <View>
            <FlatList
                  data={ KeyData }
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

export default withNavigation(KeyList);