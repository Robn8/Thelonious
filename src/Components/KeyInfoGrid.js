import React from 'react';
import { View, StyleSheet } from 'react-native';
import InfoCard from './InfoCard';

const KeyInfoGrid = ({ sharps, flats, title, relative, dom, triad }) => {
  const accidentalsValue =
    title === 'C'
      ? 'None'
      : sharps !== 'None'
      ? `${sharps} Sharps`
      : `${flats} Flats`;

  return (
    <View style={styles.grid}>
      <InfoCard
        label="Accidentals"
        value={accidentalsValue}
        icon="music-note"
        backgroundColor="#EEF2FF"
        labelColor="#4338CA"
        valueColor="#1F2937"
      />
      <InfoCard
        label="Relative Minor"
        value={relative}
        icon="music-clef-alto"
        backgroundColor="#F3F4F6"
        labelColor="#4B5563"
        valueColor="#111827"
      />
      <InfoCard
        label="Dominant"
        value={dom}
        icon="star-four-points"
        backgroundColor="#E0E7FF"
        labelColor="#3730A3"
        valueColor="#111827"
      />
      <InfoCard
        label="Major Triad"
        value={triad}
        icon="triangle-outline"
        backgroundColor="#F5F3FF"
        labelColor="#6D28D9"
        valueColor="#111827"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});

export default KeyInfoGrid;