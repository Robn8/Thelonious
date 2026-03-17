import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ProgData } from '../Data/ProgData';

const { width } = Dimensions.get('window');
const cardWidth = width - 32;

const ProgScreen = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.title}>{item.title}</Text>
      <View style={styles.divider} />

      <Text style={styles.intro}>{item.intro}</Text>

      {item.sections.map((section, index) => (
        <View key={index} style={styles.sectionBlock}>
          <View style={styles.progressionPill}>
            <Text style={styles.progressionText}>{section.progression}</Text>
          </View>
          <Text style={styles.description}>{section.explanation}</Text>
        </View>
      ))}
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topBar}>
        <TouchableOpacity
          style={styles.homeIconButton}
          onPress={() => navigation.navigate('Home')}
          activeOpacity={0.8}
        >
          <MaterialCommunityIcons name="home-outline" size={24} color="#1F2937" />
        </TouchableOpacity>
      </View>

      <View style={styles.headerBlock}>
        <Text style={styles.header}>Chord Progressions</Text>
        <Text style={styles.subHeader}>
          Explore common harmonic movement and songwriting ideas
        </Text>
      </View>

      <FlatList
        data={ProgData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.flatlistContainer}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F7FB',
  },
  topBar: {
    paddingHorizontal: 16,
    paddingTop: 12,
    marginBottom: 8,
  },
  homeIconButton: {
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
  headerBlock: {
    paddingHorizontal: 20,
    paddingBottom: 14,
  },
  header: {
    fontSize: 34,
    fontWeight: '800',
    color: '#111827',
    textAlign: 'center',
  },
  subHeader: {
    marginTop: 6,
    fontSize: 15,
    color: '#6B7280',
    textAlign: 'center',
    lineHeight: 22,
  },
  flatlistContainer: {
    paddingHorizontal: 16,
    paddingBottom: 32,
  },
  itemContainer: {
    width: cardWidth,
    minHeight: 260,
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    paddingVertical: 22,
    paddingHorizontal: 20,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 3,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  title: {
    fontSize: 22,
    fontWeight: '800',
    color: '#111827',
    textAlign: 'left',
    marginBottom: 12,
  },
  divider: {
    height: 1,
    backgroundColor: '#E5E7EB',
    marginBottom: 14,
  },
  intro: {
    fontSize: 16,
    lineHeight: 26,
    color: '#374151',
    marginBottom: 18,
    textAlign: 'left',
  },
  sectionBlock: {
    marginBottom: 18,
  },
  progressionPill: {
    alignSelf: 'flex-start',
    backgroundColor: '#EEF2FF',
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 999,
    marginBottom: 10,
  },
  progressionText: {
    fontSize: 15,
    fontWeight: '800',
    color: '#4338CA',
  },
  description: {
    fontSize: 16,
    lineHeight: 26,
    color: '#4B5563',
    textAlign: 'left',
  },
});

export default ProgScreen;