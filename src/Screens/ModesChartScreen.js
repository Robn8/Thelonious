import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import { GModesChart } from '../Data/GModesChart';

const ModesChartScreen = () => {
    return (
        <View>
            <FlatList
             data={ GModesChart }
             renderItem={({ item }) => (
                <View>
                  <Image 
                    source={item.source}
                    style={{ width: 420, height: 400 }}
                />
                </View>
             )}
            />
        </View>
    );
};

const styles = StyleSheet.create({});

export default ModesChartScreen;