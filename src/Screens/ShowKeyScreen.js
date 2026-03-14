import React from 'react';
import { Text, StyleSheet, ScrollView, View, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { KeyData } from '../Data/KeyData.js';
import { SharpData } from '../Data/SharpData';
import { FlatData } from '../Data/FlatData';
import KeyInfoGrid from '../Components/KeyInfoGrid';

const allKeys = [...KeyData, ...SharpData, ...FlatData];

const ShowKeyScreen = ({ route }) => {
  const { id } = route.params;
  const navigation = useNavigation();
  const item = allKeys.find((entry) => entry.id === id);

  if (!item) {
    return (
      <SafeAreaView edges={['left', 'right']} style={styles.container}>
        <Text style={styles.errorText}>Item not found</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.topBar}>
        <TouchableOpacity
            style={styles.backIconButton}
            onPress={() => navigation.goBack()}
        >
            <MaterialCommunityIcons name="chevron-left" size={28} color="#1F2937" />
        </TouchableOpacity>
        </View>
        <View style={styles.heroCard}>
          <View style={styles.badge}>
            <MaterialCommunityIcons
              name="music-clef-treble"
              size={18}
              color="#4F46E5"
            />
            <Text style={styles.badgeText}>Major Key</Text>
          </View>

          <Text style={styles.keyStyle}>{item.title}</Text>

          <Text style={styles.body}>Diatonic Chords</Text>
          <Text style={styles.subBody}>of {item.title} Major</Text>

          <View style={styles.chordPill}>
            <Text style={styles.chordStyle}>{item.chords}</Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Key Details</Text>

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
    backgroundColor: '#F6F7FB',
  },
  content: {
    padding: 20,
    paddingBottom: 36,
  },
  heroCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 28,
    paddingVertical: 28,
    paddingHorizontal: 22,
    alignItems: 'center',
    marginBottom: 22,
    borderWidth: 1,
    borderColor: '#ECEFF5',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 4,
  },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EEF2FF',
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 999,
    marginBottom: 18,
  },
  badgeText: {
    marginLeft: 6,
    color: '#4F46E5',
    fontSize: 14,
    fontWeight: '700',
  },
  keyStyle: {
    fontSize: 58,
    fontWeight: '800',
    color: '#111827',
  },
  body: {
    marginTop: 10,
    fontSize: 24,
    fontWeight: '700',
    color: '#1F2937',
  },
  subBody: {
    marginTop: 4,
    fontSize: 18,
    color: '#6B7280',
  },
  chordPill: {
    marginTop: 20,
    width: '100%',
    backgroundColor: '#F8FAFC',
    borderRadius: 18,
    paddingVertical: 16,
    paddingHorizontal: 14,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  chordStyle: {
    fontSize: 24,
    color: '#4F46E5',
    fontWeight: '800',
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '800',
    color: '#1F2937',
    marginBottom: 14,
    marginLeft: 2,
  },
  errorText: {
    fontSize: 22,
    textAlign: 'center',
    marginTop: 40,
    color: '#111827',
  },
  topBar: {
    marginBottom: 14,
  },
  backButton: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  backIconButton: {
  width: 44,
  height: 44,
  borderRadius: 22,
  backgroundColor: '#FFFFFF',
  justifyContent: 'center',
  alignItems: 'center',
  borderWidth: 1,
  borderColor: '#E5E7EB',
},
  backText: {
    marginLeft: 6,
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
  },
});

export default ShowKeyScreen;