import React from 'react';
import { Text, StyleSheet, ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { KeyData } from '../Data/KeyData.js';
import { SharpData } from '../Data/SharpData';
import { FlatData } from '../Data/FlatData';
import KeyInfoGrid from '../Components/KeyInfoGrid';

const allKeys = [...KeyData, ...SharpData, ...FlatData];

const ShowKeyScreen = ({ route }) => {
  const { id } = route.params;
  const item = allKeys.find((entry) => entry.id === id);

  if (!item) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.errorText}>Item not found</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.heroCard}>
          <Text style={styles.keyStyle}>{item.title}</Text>
          <Text style={styles.body}>Diatonic Chords</Text>
          <Text style={styles.subBody}>of {item.title} Major</Text>
          <Text style={styles.chordStyle}>{item.chords}</Text>
        </View>

        <KeyInfoGrid
          sharps={item.sharps}
          flats={item.flats}
          title={item.title}
          relative={item.relativeMinor}
          dom={item.dominant}
          triad={item.majorTriad}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F8FC',
  },
  content: {
    padding: 20,
    paddingBottom: 32,
  },
  heroCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    paddingVertical: 28,
    paddingHorizontal: 20,
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 4,
  },
  keyStyle: {
    fontSize: 56,
    fontWeight: '800',
    color: '#1B1F2A',
  },
  body: {
    marginTop: 10,
    fontSize: 24,
    fontWeight: '700',
    color: '#374151',
  },
  subBody: {
    marginTop: 2,
    fontSize: 20,
    color: '#6B7280',
  },
  chordStyle: {
    marginTop: 18,
    fontSize: 24,
    color: '#4F46E5',
    fontWeight: '700',
    textAlign: 'center',
  },
  errorText: {
    fontSize: 22,
    textAlign: 'center',
    marginTop: 40,
    color: '#111827',
  },
});

export default ShowKeyScreen;