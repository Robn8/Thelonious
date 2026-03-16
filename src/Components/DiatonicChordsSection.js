import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const romanNumerals = ['I', 'ii', 'iii', 'IV', 'V', 'vi', 'vii'];

const getChordQuality = (chord) => {
  if (!chord) return 'major';

  if (chord.includes('m')) return 'minor';
  if (chord.includes('dim') || chord.includes('~')) return 'diminished';

  return 'major';
};

const DiatonicChordsSection = ({ chords, theme }) => {
  const chordList = chords.split('|').map((chord) => chord.trim());

  return (
    <View style={styles.section}>
      <Text style={[styles.sectionTitle, { color: theme.accentText }]}>
        Diatonic Chords
      </Text>
      <Text style={styles.sectionSubtitle}>
        Chords built from this major key
      </Text>

      <View style={styles.grid}>
        {chordList.map((chord, index) => {
          const quality = getChordQuality(chord);

          const cardStyle =
            quality === 'major'
              ? {
                  backgroundColor: theme.accentSoft,
                  borderColor: theme.accentSoft,
                }
              : quality === 'minor'
              ? {
                  backgroundColor: '#FFFFFF',
                  borderColor: theme.accentSoft,
                }
              : {
                  backgroundColor: '#F3F4F6',
                  borderColor: '#E5E7EB',
                };

          const numeralColor =
            quality === 'diminished' ? '#6B7280' : theme.accentText;

          const chordColor =
            quality === 'diminished' ? '#374151' : '#111827';

          return (
            <View key={`${chord}-${index}`} style={[styles.card, cardStyle]}>
              <Text style={[styles.numeral, { color: numeralColor }]}>
                {romanNumerals[index]}
              </Text>
              <Text style={[styles.chordText, { color: chordColor }]}>
                {chord}
              </Text>
            </View>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    marginBottom: 18,
    backgroundColor: '#FFFFFF',
    borderRadius: 22,
    paddingVertical: 20,
    paddingHorizontal: 18,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '800',
    marginBottom: 6,
  },
  sectionSubtitle: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 16,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    width: '29%',
    minHeight: 88,
    borderRadius: 18,
    paddingVertical: 14,
    paddingHorizontal: 10,
    marginBottom: 12,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  numeral: {
    fontSize: 13,
    fontWeight: '700',
    marginBottom: 8,
  },
  chordText: {
    fontSize: 18,
    fontWeight: '800',
    textAlign: 'center',
  },
});

export default DiatonicChordsSection;