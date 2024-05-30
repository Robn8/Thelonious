import { Text, View, StyleSheet, FlatList } from 'react-native';
import { ProgData } from '../Data/ProgData';
import React from 'react';


const ProgScreen = () => {

      const renderItem = ({ item }) => (
        <View style={styles.itemContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.description}>{item.description}</Text>
        </View>
      );  

    return (
        <View styles={styles.container}>
          <FlatList
          data={ProgData}
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
        height: 500, // Set the height of each item box
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
        fontFamily: 'Marker Felt'
      },
      description: {
        fontSize: 14,
        color: 'black', 
        textAlign: 'center'
      },
});

export default ProgScreen;