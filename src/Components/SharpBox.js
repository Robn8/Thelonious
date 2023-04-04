import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import React from 'react';

import RelativeBox from './RelativeBox';
import DomBox from './DomBox';

const SharpBox = ({ sharps, flats, title, relative, dom }) => {
    return (
        <SafeAreaView>
          <View style={styles.boxContainer}>
            <View style={styles.row1}>
                {sharps !== 'None' && (
                    <View style={styles.sharpBoxStyle}>
                        <Text style={styles.sharpStyle}>Sharps</Text>
                        <Text style={styles.sharpNumber}>{sharps}</Text>
                    </View>
                    )}
                {flats !== 'None' && (
                    <View style={styles.flatBoxStyle}>
                    <Text>Flats: {flats}</Text>
                    </View>
                    )}
                {title === 'C' && (
                    <View style={styles.flatBoxStyle}>
                    <Text>C has no Sharps or Flats!</Text>
                    </View>
                )}
                <RelativeBox title={title} relative={relative} />
            </View>
            <DomBox title={title} dom={dom} />
          </View>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    boxContainer: {
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: 'white',
        height: 250,
        width: 250,
        borderRadius: 15,
    },
    row1: {
        flexDirection: 'row',
        borderBottomWidth: 1
    },
    sharpStyle: {
        fontSize: 14,
        color: '#660099',
        fontFamily: 'Futura-Bold'
    },
    sharpNumber: {
        fontSize: 28,
        color: '#660099',
        fontFamily: 'Futura-Bold'
    },
    sharpBoxStyle: {
        backgroundColor: '#ffcc00',
        height: 125,
        width: 125,
        alignItems: 'center',
        justifyContent: 'center',
        borderRightWidth: 1,
        borderTopLeftRadius: 15,
    },
    flatBoxStyle: {
        backgroundColor: '#ffcc00',
        height: 125,
        width: 125,
        alignItems: 'center',
        justifyContent: 'center',
        borderRightWidth: 1,
        borderTopLeftRadius: 15,
    },
});

export default SharpBox;