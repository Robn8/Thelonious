import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, LayoutAnimation, Platform, UIManager } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const romanNumerals = ['I', 'ii', 'iii', 'IV', 'V', 'vi', 'vii'];

const getChordQuality = (chord) => {
  if (!chord) return 'major';
  if (chord.includes('dim') || chord.includes('~')) return 'diminished';
  if (chord.includes('m')) return 'minor';
  return 'major';
};

const DiatonicChordsSection = ({ chords, theme }) => {
  const [expanded, setExpanded] = useState(false);
  const chordList = chords.split('|').map((chord) => chord.trim());

  const handleToggle = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpanded((prev) => !prev);
  };

  return (
    <View style={styles.section}>
      <TouchableOpacity
        activeOpacity={0.85}
        style={[
          styles.headerRow,
          { borderColor: theme.accentSoft },
        ]}
        onPress={handleToggle}
      >
        <View style={styles.headerTextWrap}>
          <Text style={[styles.sectionTitle, { color: theme.accentText }]}>
            Diatonic Chords
          </Text>
          <Text style={styles.sectionSubtitle}>
            Chords built from this major key
          </Text>
        </View>

        <View style={[styles.iconWrap, { backgroundColor: theme.accentSoft }]}>
          <MaterialCommunityIcons
            name={expanded ? 'chevron-up' : 'chevron-down'}
            size={24}
            color={theme.accent}
          />
        </View>
      </TouchableOpacity>

      {expanded && (
        <View style={styles.grid}>
          {chordList.map((chord, index) => {
            const quality = getChordQuality(chord);
            const displayChord = chord.replace('~dim', '°').replace('dim', '°');

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

                <Text
                  numberOfLines={1}
                  adjustsFontSizeToFit
                  minimumFontScale={0.75}
                  style={[styles.chordText, { color: chordColor }]}
                >
                  {displayChord}
                </Text>
              </View>
            );
          })}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    marginBottom: 18,
    backgroundColor: '#FFFFFF',
    borderRadius: 22,
    paddingVertical: 18,
    paddingHorizontal: 18,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderRadius: 18,
    paddingVertical: 14,
    paddingHorizontal: 14,
  },
  headerTextWrap: {
    flex: 1,
    paddingRight: 12,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '800',
    marginBottom: 4,
  },
  sectionSubtitle: {
    fontSize: 14,
    color: '#6B7280',
  },
  iconWrap: {
    width: 42,
    height: 42,
    borderRadius: 21,
    justifyContent: 'center',
    alignItems: 'center',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 18,
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
    includeFontPadding: false,
  },
});

export default DiatonicChordsSection;