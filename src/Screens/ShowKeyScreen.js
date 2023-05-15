import { Text, View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import React from 'react';

import { KeyData } from '../Data/KeyData';
import { SharpData } from '../Data/SharpData';
import { FlatData } from '../Data/FlatData';
import SharpBox from '../Components/SharpBox';

const ShowKeyScreen = ({ route }) => {
    const { id } = route.params;
    let item;

    if (id >= 1 && id <= 7) {
        item = KeyData.find(item => item.id === id);
    } else if (id >= 8 && id <= 14) {
        item = SharpData.find(item => item.id === id);
    } else if (id >= 15 && id <=21) {
        item = FlatData.find(item => item.id === id);
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.keyStyle}>{item.title}</Text>
            <Text style={styles.body}>Diatonic Chords of {item.title}:</Text>
            
            <Text style={styles.chordStyle}>{item.chords}</Text>
            <SharpBox 
             sharps={item.sharps}
             flats={item.flats} 
             title={item.title}
             relative={item.relativeMinor}
             dom={item.dominant}
             triad={item.majorTriad}
            />
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#402E5C',
    },
    keyStyle: {
        paddingBottom: 5,
        fontSize: 100,
        color: 'white'
    },
    chordStyle: {
        fontSize: 21,
        color: 'white',
        marginTop: 10,
        marginBottom: 15
    },
    body: {
        color: 'white',
        fontSize: 32
    },
});

export default ShowKeyScreen;