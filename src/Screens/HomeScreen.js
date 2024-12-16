import { Text, View, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import React from 'react';

const HomeScreen = ({ navigation }) => {

    return (
        
        <View style={styles.container}>
            <Text>Thelonious Music Theory App</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Keys')}>
                <Text style={styles.btnText}>Key Selector</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Guitar Modes')}>
                <Text style={styles.btnText}>Modes Charts</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Caged Chords')}>
                <Text style={styles.btnText}>Caged Chords</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('ProgScreen')}>
                <Text style={styles.btnText}>Chord Progressions</Text>
            </TouchableOpacity>
        </View>
        
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    btnText: {
        fontSize: 36,
        marginBottom: 10,
        fontFamily: 'Marker Felt'
    },
    background: {
        flex: 1, // Ensure the background image covers the entire screen
        resizeMode: 'cover', // Ensure the image covers the background
      },
});

export default HomeScreen;