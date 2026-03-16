import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const KeyDetails = ({ result, theme }) => {
  return (
    <View style={styles.row}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{result.title}</Text>
        <Text style={styles.subtitle}>Learn about {result.title} major</Text>
      </View>

      <View style={[styles.iconBadge, { backgroundColor: theme.accentSoft }]}>
        <MaterialCommunityIcons
          name="music-clef-treble"
          size={24}
          color={theme.accent}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#111827',
  },
  subtitle: {
    marginTop: 6,
    fontSize: 14,
    color: '#6B7280',
  },
  iconBadge: {
    marginLeft: 16,
    width: 52,
    height: 52,
    borderRadius: 26,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default KeyDetails;