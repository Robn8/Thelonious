import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react';

import Box1 from './SandFBox';
import RelativeBox from './RelativeBox';
import DomBox from './DomBox';
import TriadBox from './TriadBox';

export const SharpBox = ({ sharps, flats, title, relative, dom, triad }) => {
    return (
        <SafeAreaView>
          <View style={styles.boxContainer}>
            <View style={styles.row1}>
                <Box1 sharps={sharps} flats={flats} title={title} />
                <RelativeBox title={title} relative={relative} />
            </View>
            <View style={styles.row2}>
                <DomBox title={title} dom={dom} />
                <TriadBox triad={triad}/>
            </View>
          </View>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    boxContainer: {
       
        borderColor: 'black',
        backgroundColor: 'white',
        height: 300,
        width: 300,
        borderRadius: 15,
    },
    row1: {
        flexDirection: 'row',
        borderBottomWidth: 1
    },
    row2: {
        flexDirection: 'row',
    },
});

