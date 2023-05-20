import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('ModesChartScreen')}>
                <Text style={styles.btnText}>Guitar Modes Chart</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('CagedScreen')}>
                <Text style={styles.btnText}>Caged Chords Chart</Text>
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnText: {
        fontSize: 36,
        marginBottom: 10
    }
});

export default HomeScreen;