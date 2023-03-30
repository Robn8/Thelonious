import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { KeyData } from '../Data/KeyData';
import KeyDetails from './KeyDetails';

const KeyList = ({ navigation }) => {
    return (
        <View>
            <FlatList
                  data={ KeyData }
                  keyExtractor={(item) => item.id}
                  showsHorizontalScrollIndicator={false}
                  renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('ShowKeyScreen', { id: item.id })}>
                      <KeyDetails result={item} />
                    </TouchableOpacity>
                  )} 
                />
        </View>
    );
};

const styles = StyleSheet.create({});

export default KeyList;