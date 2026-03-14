import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { GModesChart } from '../Data/GModesChart';

const { width } = Dimensions.get('window');
const cardWidth = width - 32;

const ModesChartScreen = ({ navigation }) => {
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
        <Text style={styles.header}>Modes Charts</Text>
        <Text style={styles.subHeader}>Browse modal shapes and patterns</Text>
      </View>

      <FlatList
        data={GModesChart}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image
              source={item.source}
              style={styles.modeImage}
              resizeMode="contain"
            />
          </View>
        )}
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
  },
  listContent: {
    paddingHorizontal: 16,
    paddingBottom: 32,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 22,
    padding: 12,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 3,
    alignItems: 'center',
  },
  modeImage: {
    width: cardWidth - 24,
    height: 320,
    borderRadius: 16,
  },
});

export default ModesChartScreen;