import React from 'react';
import { Text, View, StyleSheet, FlatList, Image } from 'react-native';
import { CagedChart } from '../Data/CagedChart';

const CagedScreen = () => {
    return (
        <View>
            <FlatList
             data={ CagedChart }
             keyExtractor={(item) => item.id}
             renderItem={({ item }) => (
                <View>
                  <Image 
                    source={typeof item.source === 'string' ? { uri: item.source } : item.source}
                    style={{ width: 420, height: 450 }}
                  />
                </View>
             )}
            />
        </View>
    )
};

const styles = StyleSheet.create({});

export default CagedScreen;
