import { Text, View, StyleSheet, FlatList } from 'react-native';
import { TheoryData } from '../Data/TheoryData';
import React from 'react';


const TheoryScreen = () => {

      const renderItem = ({ item }) => (
        <View style={styles.itemContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.description}>{item.description}</Text>
        </View>
      );  

    return (
        <View styles={styles.container}>
          <FlatList
          data={TheoryData}
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
        height: 800, // Set the height of each item box
        backgroundColor: 'lightblue', 
        marginVertical: 0,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: 'black'
      },
      title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black',
        marginBottom: 10,
        marginTop: 15,
        fontFamily: 'Marker Felt' 
      },
      description: {
        fontSize: 14,
        color: 'black', 
        textAlign: 'center',
        marginBottom: 10
      },
});

export default TheoryScreen;