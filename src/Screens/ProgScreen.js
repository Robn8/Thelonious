import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';


const ProgScreen = () => {
    return (
        <View>
          <TouchableOpacity>
            <Text>Happy Progressions</Text>
        </TouchableOpacity>
        <TouchableOpacity>
            <Text>Sad Progressions</Text>
        </TouchableOpacity>
        
        </View>
    )
};

const styles =StyleSheet.create({});

export default ProgScreen;