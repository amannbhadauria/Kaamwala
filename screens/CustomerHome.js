import React, { useState } from 'react';
import {
  View, Text, StyleSheet, ScrollView, TouchableOpacity,
  TextInput, FlatList, Image, Modal
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const CATEGORIES = [
  { id: 1, name: 'Plumber', icon: 'construct', rate: '₹500/day' },
  { id: 2, name: 'Electrician', icon: 'flash', rate: '₹600/day' },
  { id: 3, name: 'Mason', icon: 'hammer', rate: '₹700/day' },
  { id: 4, name: 'Painter', icon: 'brush', rate: '₹550/day' },
  { id: 5, name: 'Carpenter', icon: 'cut', rate: '₹650/day' },
  { id: 6, name: 'Helper', icon: 'people', rate: '₹400/day' },
];

const NEARBY_LABOUR = [
  { id: 1, name: 'Rajesh Kumar', skill: 'Plumber', rating: 4.8, 
    distance: '0.5 km', verified: true, experience: '5 years', 
    price: 500, available: true },
  { id: 2, name: 'Suresh Yadav', skill: 'Electrician', rating: 4.6,
    distance: '1.2 km', verified: true, experience: '8 years',
    price: 600, available: true },
  { id: 3, name: 'Mohammed Ali', skill: 'Mason', rating: 4.9,
    distance: '0.8 km', verified: true, experience: '12 years',
    price: 700, available: false },
];

export default function CustomerHome() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Good Morning 👋</Text>
          <Text style={styles.headerTitle}>Find Labour Nearby</Text>
        </View>
        <TouchableOpacity style={styles.sosButton}>
          <Ionicons name="warning" size={24} color="#fff" />
          <Text style={styles.sosText}>SOS</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.searchContainer}>
          <Ionicons name="search" size={24} color="#999" />
          <TextInput
            style={styles.searchInput}
            placeholder="Search plumber, electrician..."
            value={searchQuery}
            onChangeText={setSearchQuery}
            placeholderTextColor="#999"
          />
        </View>

        <Text style={styles.sectionTitle}>Categories</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} 
          style={styles.categoriesScroll}>
          {CATEGORIES.map((cat) => (
            <TouchableOpacity
              key={cat.id}
              style={[styles.categoryCard, 
                selectedCategory === cat.id && styles.categoryCardActive]}
              onPress={() => setSelectedCategory(cat.id)}
            >
              <View style={styles.categoryIcon}>
                <Ionicons name={cat.icon} size={30} color="#FF6B35" />
              </View>
              <Text style={styles.categoryName}>{cat.name}</Text>
              <Text style={styles.categoryRate}>{cat.rate}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <Text style={styles.sectionTitle}>Nearby Labourers</Text>
        {NEARBY_LABOUR.map((item) => (
          <View key={item.id} style={styles.labourCard}>
            <View style={styles.labourInfo}>
              <View style={styles.nameRow}>
                <Text style={styles.labourName}>{item.name}</Text>
                {item.verified && (
                  <Ionicons name="checkmark-circle" size={18} color="#06D6A0" />
                )}
              </View>
              <Text style={styles.labourSkill}>{item.skill}</Text>
              <View style={styles.ratingRow}>
                <Ionicons name="star" size={16} color="#FFD23F" />
                <Text style={styles.ratingText}>{item.rating}</Text>
                <Text style={styles.distanceText}> • {item.distance}</Text>
              </View>
              <View style={styles.priceRow}>
                <Text style={styles.priceText}>₹{item.price}/day</Text>
                <View style={[styles.statusBadge, 
                  { backgroundColor: item.available ? '#06D6A020' : '#EF476F20' }]}>
                  <Text style={{ color: item.available ? '#06D6A0' : '#EF476F', 
                    fontSize: 12, fontWeight: '600' }}>
                    {item.available ? 'Available' : 'Busy'}
                  </Text>
                </View>
              </View>
              <TouchableOpacity 
                style={[styles.bookButton, !item.available && styles.bookButtonDisabled]}
                disabled={!item.available}
              >
                <Text style={styles.bookButtonText}>Book Now</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F7FA' },
  header: {
    backgroundColor: '#FF6B35', padding: 20, paddingTop: 60,
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
    borderBottomLeftRadius: 20, borderBottomRightRadius: 20,
  },
  greeting: { color: '#fff', fontSize: 14, opacity: 0.9 },
  headerTitle: { color: '#fff', fontSize: 22, fontWeight: 'bold' },
  sosButton: {
    backgroundColor: '#EF476F', padding: 10, borderRadius: 25,
    flexDirection: 'row', alignItems: 'center', gap: 5,
  },
  sosText: { color: '#fff', fontWeight: 'bold' },
  content: { flex: 1, padding: 16 },
  searchContainer: {
    flexDirection: 'row', backgroundColor: '#fff', borderRadius: 12,
    padding: 12, alignItems: 'center', marginTop: -20,
    shadowColor: '#000', shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1, shadowRadius: 8, elevation: 5,
  },
  searchInput: { flex: 1, marginLeft: 10, fontSize: 16, color: '#333' },
  sectionTitle: {
    fontSize: 18, fontWeight: 'bold', color: '#333',
    marginTop: 20, marginBottom: 12,
  },
  categoriesScroll: { marginBottom: 10 },
  categoryCard: { alignItems: 'center', marginRight: 16, width: 80 },
  categoryCardActive: { transform: [{ scale: 1.05 }] },
  categoryIcon: {
    width: 55, height: 55, borderRadius: 27, backgroundColor: '#FFF0E6',
    justifyContent: 'center', alignItems: 'center', marginBottom: 8,
  },
  categoryName: { fontSize: 12, fontWeight: '600', color: '#333' },
  categoryRate: { fontSize: 10, color: '#666', marginTop: 2 },
  labourCard: {
    backgroundColor: '#fff', borderRadius: 12, padding: 15,
    marginBottom: 12, flexDirection: 'row',
    shadowColor: '#000', shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08, shadowRadius: 8, elevation: 3,
  },
  labourInfo: { flex: 1 },
  nameRow: { flexDirection: 'row', alignItems: 'center', gap: 5 },
  labourName: { fontSize: 16, fontWeight: 'bold', color: '#333' },
  labourSkill: { fontSize: 13, color: '#FF6B35', fontWeight: '500', marginTop: 2 },
  ratingRow: { flexDirection: 'row', alignItems: 'center', marginTop: 4 },
  ratingText: { fontSize: 13, color: '#666', marginLeft: 4 },
  distanceText: { fontSize: 12, color: '#999' },
  priceRow: {
    flexDirection: 'row', justifyContent: 'space-between',
    alignItems: 'center', marginTop: 8,
  },
  priceText: { fontSize: 18, fontWeight: 'bold', color: '#333' },
  statusBadge: { paddingHorizontal: 10, paddingVertical: 4, borderRadius: 12 },
  bookButton: {
    backgroundColor: '#FF6B35', padding: 12, borderRadius: 8,
    alignItems: 'center', marginTop: 10,
  },
  bookButtonDisabled: { backgroundColor: '#ccc' },
  bookButtonText: { color: '#fff', fontWeight: 'bold', fontSize: 14 },
});
