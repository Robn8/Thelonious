import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const InfoCard = ({
  label,
  value,
  icon,
  backgroundColor,
  labelColor,
  valueColor,
  iconBackgroundColor,
}) => {
  return (
    <View style={[styles.card, { backgroundColor }]}>
      <View
        style={[
          styles.iconWrap,
          iconBackgroundColor && { backgroundColor: iconBackgroundColor },
        ]}
      >
        <MaterialCommunityIcons name={icon} size={24} color={labelColor} />
      </View>

      <Text style={[styles.label, { color: labelColor }]}>{label}</Text>
      <Text style={[styles.value, { color: valueColor }]}>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '48%',
    minHeight: 155,
    borderRadius: 22,
    padding: 16,
    marginBottom: 14,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 3,
  },
  iconWrap: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#F3F4F6',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  label: {
    fontSize: 15,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 8,
  },
  value: {
    fontSize: 22,
    fontWeight: '800',
    textAlign: 'center',
  },
});

export default InfoCard;