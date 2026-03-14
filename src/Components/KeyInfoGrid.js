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
        backgroundColor="#7C2D12"
        textColor="#FFFFFF"
      />
      <InfoCard
        label="Relative Minor"
        value={relative}
        backgroundColor="#FCD34D"
        textColor="#7C2D12"
      />
      <InfoCard
        label="Dominant"
        value={dom}
        backgroundColor="#4F46E5"
        textColor="#FFFFFF"
      />
      <InfoCard
        label="Major Triad"
        value={triad}
        backgroundColor="#312E81"
        textColor="#FFFFFF"
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