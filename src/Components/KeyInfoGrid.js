import React from 'react';
import { View, StyleSheet } from 'react-native';
import InfoCard from './InfoCard';

const KeyInfoGrid = ({ sharps, flats, title, relative, dom, triad, theme }) => {
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
        backgroundColor={theme.accentSoft}
        labelColor={theme.accentText}
        valueColor="#111827"
        iconBackgroundColor="#FFFFFF"
      />

      <InfoCard
        label="Relative Minor"
        value={relative}
        icon="music-clef-alto"
        backgroundColor="#FFFFFF"
        labelColor={theme.accentText}
        valueColor="#111827"
        iconBackgroundColor={theme.accentSoft}
      />

      <InfoCard
        label="Dominant"
        value={dom}
        icon="star-four-points"
        backgroundColor="#FFFFFF"
        labelColor={theme.accentText}
        valueColor="#111827"
        iconBackgroundColor={theme.accentSoft}
      />

      <InfoCard
        label="Major Triad"
        value={triad}
        icon="triangle-outline"
        backgroundColor={theme.accentSoft}
        labelColor={theme.accentText}
        valueColor="#111827"
        iconBackgroundColor="#FFFFFF"
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