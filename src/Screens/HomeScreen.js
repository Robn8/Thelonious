import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  ImageBackground,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const HomeScreen = ({ navigation }) => {
  const menuItems = [
    {
      title: 'Key Selector',
      subtitle: 'Explore major keys and chord relationships',
      icon: 'music-clef-treble',
      screen: 'Keys',
      accent: '#4F46E5',
      accentSoft: '#EEF2FF',
    },
    {
      title: 'Modes Charts',
      subtitle: 'Browse scales and modal patterns',
      icon: 'guitar-electric',
      screen: 'Guitar Modes',
      accent: '#0F766E',
      accentSoft: '#CCFBF1',
    },
    {
      title: 'Caged Chords',
      subtitle: 'Study chords & shapes',
      icon: 'music-box-multiple',
      screen: 'Caged Chords',
      accent: '#DC2626',
      accentSoft: '#FEE2E2',
    },
    {
      title: 'Chord Progressions',
      subtitle: 'Practice progressions and harmonic movement',
      icon: 'piano',
      screen: 'ProgScreen',
      accent: '#7C3AED',
      accentSoft: '#F3E8FF',
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <ImageBackground
          source={require('../../assets/p5.jpg')}
          style={styles.heroCard}
          imageStyle={styles.heroImage}
          resizeMode="cover"
        >
          <View style={styles.heroOverlay}>
            <View style={styles.heroBadge}>
              <MaterialCommunityIcons
                name="music-note-eighth"
                size={18}
                color="#FFFFFF"
              />
              <Text style={styles.heroBadgeText}>Music Theory</Text>
            </View>

            <Text style={styles.title}>Thelonious</Text>
            <Text style={styles.subTitle}>
              Learn keys, chords, modes, and harmony
            </Text>
          </View>
        </ImageBackground>

        <Text style={styles.sectionTitle}>Start Exploring</Text>

        {menuItems.map((item) => (
          <TouchableOpacity
            key={item.title}
            style={styles.card}
            activeOpacity={0.85}
            onPress={() => navigation.navigate(item.screen)}
          >
            <View
              style={[
                styles.iconWrap,
                { backgroundColor: item.accentSoft },
              ]}
            >
              <MaterialCommunityIcons
                name={item.icon}
                size={28}
                color={item.accent}
              />
            </View>

            <View style={styles.textWrap}>
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text style={styles.cardSubtitle}>{item.subtitle}</Text>
            </View>

            <MaterialCommunityIcons
              name="chevron-right"
              size={28}
              color="#9CA3AF"
            />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F7FB',
  },
  content: {
    padding: 20,
    paddingBottom: 36,
  },
  heroCard: {
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 4,
  },
  heroImage: {
    borderRadius: 28,
  },
  heroOverlay: {
    borderRadius: 28,
    paddingVertical: 28,
    paddingHorizontal: 22,
    borderWidth: 1,
    borderColor: '#ECEFF5',
    backgroundColor: 'rgba(0,0,0,0.30)',
  },
  heroBadge: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.2)',
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 999,
    marginBottom: 18,
  },
  heroBadgeText: {
    marginLeft: 6,
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '700',
  },
  title: {
    fontSize: 40,
    fontWeight: '800',
    color: '#FFFFFF',
  },
  subTitle: {
    marginTop: 10,
    fontSize: 17,
    lineHeight: 24,
    color: '#F3F4F6',
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '800',
    color: '#1F2937',
    marginBottom: 14,
    marginLeft: 2,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 22,
    padding: 18,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 3,
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconWrap: {
    width: 54,
    height: 54,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
  },
  textWrap: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 19,
    fontWeight: '800',
    color: '#111827',
  },
  cardSubtitle: {
    marginTop: 4,
    fontSize: 14,
    lineHeight: 20,
    color: '#6B7280',
  },
});

export default HomeScreen;