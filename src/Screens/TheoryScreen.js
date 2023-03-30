import { Text, View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import React from 'react';

const TheoryScreen = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Text>Now were learning!</Text>
            <Text>What the key means:</Text>
            <Text>What does the Dominant chord of the scale do:</Text>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({});

export default TheoryScreen;




/*

const aMajor = {
    name: 'A Major',
    keySignature: 'F#',
    chords: ['A', 'B', 'C#', 'D', 'E', 'F#', 'G#'],
    scale: ['A', 'B', 'C#', 'D', 'E', 'F#', 'G#', 'A'],
    relativeMinor: 'F# Minor'
  };

const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017';
const dbName = 'mydatabase';

MongoClient.connect(url, { useNewUrlParser: true }, function(err, client) {
  if (err) throw err;
  console.log("Connected successfully to server");

  const db = client.db(dbName);

  const collection = db.collection('documents');
  collection.insertOne(aMajor, function(err, result) {
    console.log("Inserted object into the collection");
    client.close();
  });
});

*/