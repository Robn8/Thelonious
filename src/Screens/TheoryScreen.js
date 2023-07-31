import { Text, View, StyleSheet, FlatList } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import React from 'react';


const TheoryScreen = () => {

    const data = [
        { id: '1', title: 'Diatonic Chords', description: 'Diatonic chords are a fundamental concept that helps us understand and analyze the harmony within a musical key. Diatonic chords are built exclusively from the notes of a particular major or minor scale. In a major scale, there are seven unique notes, and each note can form a chord by stacking two or more notes on top of it. These chords are named after the scale degree from which they are constructed. For example, in the key of C major, the C major scale consists of the notes: C, D, E, F, G, A, and B. Using these notes, we can build seven diatonic chords:' },
        { id: '2', title: 'Major Triads', description: 'Description for Item 2' },
        { id: '3', title: 'Dominant Chords', description: 'Description for Item 1' },
        { id: '4', title: 'Relative Minor', description: 'Description for Item 2' },
        // Add more items as needed
      ];

      const renderItem = ({ item }) => (
        <View style={styles.itemContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.description}>{item.description}</Text>
        </View>
      );  

    return (
        <View styles={styles.container}>
          <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.flatlistContainer}
          />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff', // Set your background color here
      },
      flatlistContainer: {
        alignItems: 'center',
        justifyContent: 'center',
      },
      itemContainer: {
        width: 400, // Set the width of each item box
        height: 250, // Set the height of each item box
        backgroundColor: 'lightblue', // Set your item box background color here
        marginVertical: 0,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: 'black'
      },
      title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black', // Set your title text color here
      },
      description: {
        fontSize: 14,
        color: 'black', // Set your description text color here
      },
});

export default TheoryScreen;