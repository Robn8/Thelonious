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

const getKeyTheme = (item) => {
  if (item.id >= 1 && item.id <= 7) {
    return {
      accent: '#4F46E5',
      accentSoft: '#EEF2FF',
      accentText: '#4338CA',
    };
  }

  if (item.id >= 8 && item.id <= 14) {
    return {
      accent: '#DC2626',
      accentSoft: '#FEE2E2',
      accentText: '#B91C1C',
    };
  }

  return {
    accent: '#0F766E',
    accentSoft: '#CCFBF1',
    accentText: '#115E59',
  };
};

const ShowKeyScreen = ({ route }) => {
  const { id } = route.params;
  const navigation = useNavigation();
  const item = allKeys.find((entry) => entry.id === id);

  if (!item) {
    return (
      <SafeAreaView edges={['top', 'left', 'right']} style={styles.container}>
        <Text style={styles.errorText}>Item not found</Text>
      </SafeAreaView>
    );
  }

  const theme = getKeyTheme(item);

  return (
    <SafeAreaView edges={['top', 'left', 'right']} style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.topBar}>
          <TouchableOpacity
            style={styles.backIconButton}
            onPress={() => navigation.goBack()}
            activeOpacity={0.8}
          >
            <MaterialCommunityIcons name="chevron-left" size={28} color="#1F2937" />
          </TouchableOpacity>
        </View>

        <View style={styles.heroCard}>
          <View style={[styles.badge, { backgroundColor: theme.accentSoft }]}>
            <MaterialCommunityIcons
              name="music-clef-treble"
              size={18}
              color={theme.accent}
            />
            <Text style={[styles.badgeText, { color: theme.accentText }]}>
              Major Key
            </Text>
          </View>

          <Text style={styles.keyStyle}>{item.title}</Text>

          <Text style={styles.body}>Diatonic Chords</Text>
          <Text style={styles.subBody}>of {item.title} Major</Text>

          <View
            style={[
              styles.chordPill,
              { backgroundColor: theme.accentSoft, borderColor: theme.accentSoft },
            ]}
          >
            <Text style={[styles.chordStyle, { color: theme.accent }]}>
              {item.chords}
            </Text>
          </View>
        </View>

        <Text style={[styles.sectionTitle, { color: theme.accentText }]}>
          Key Details
        </Text>

        <KeyInfoGrid
          sharps={item.sharps}
          flats={item.flats}
          title={item.title}
          relative={item.relativeMinor}
          dom={item.dominant}
          triad={item.majorTriad}
          theme={theme}
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
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 36,
  },
  topBar: {
    marginBottom: 14,
  },
  backIconButton: {
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,
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
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 999,
    marginBottom: 18,
  },
  badgeText: {
    marginLeft: 6,
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
    borderRadius: 18,
    paddingVertical: 16,
    paddingHorizontal: 14,
    borderWidth: 1,
  },
  chordStyle: {
    fontSize: 22,
    fontWeight: '800',
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '800',
    marginBottom: 14,
    marginLeft: 2,
  },
  errorText: {
    fontSize: 22,
    textAlign: 'center',
    marginTop: 40,
    color: '#111827',
  },
});

export default ShowKeyScreen;