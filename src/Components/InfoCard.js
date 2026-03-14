import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const InfoCard = ({ label, value, backgroundColor, textColor }) => {
  return (
    <View style={[styles.card, { backgroundColor }]}>
      <Text style={[styles.label, { color: textColor }]}>{label}</Text>
      <Text style={[styles.value, { color: textColor }]}>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '48%',
    minHeight: 140,
    borderRadius: 20,
    padding: 16,
    marginBottom: 14,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 3,
  },
  label: {
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 10,
  },
  value: {
    fontSize: 24,
    fontWeight: '800',
    textAlign: 'center',
  },
});

export default InfoCard;