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
