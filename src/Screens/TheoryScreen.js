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
import { TheoryData } from '../Data/TheoryData';

const { width } = Dimensions.get('window');
const cardWidth = width - 32;

const TheoryScreen = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
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
        <Text style={styles.header}>Theory Notes</Text>
        <Text style={styles.subHeader}>
          Review core music theory concepts and explanations
        </Text>
      </View>

      <FlatList
        data={TheoryData}
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
    minHeight: 320,
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: 20,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: '800',
    color: '#111827',
    textAlign: 'center',
    marginBottom: 14,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: '#4B5563',
    textAlign: 'center',
  },
});

export default TheoryScreen;