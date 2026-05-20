import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const BOOKINGS = [
  { id: 1, worker: 'Rajesh Kumar', skill: 'Plumber', date: '20 May 2026', 
    status: 'Confirmed', amount: 500, rating: null },
  { id: 2, worker: 'Suresh Yadav', skill: 'Electrician', date: '18 May 2026',
    status: 'Completed', amount: 600, rating: 5 },
  { id: 3, worker: 'Mohammed Ali', skill: 'Mason', date: '15 May 2026',
    status: 'Completed', amount: 1400, rating: 4 },
];

export default function BookingsScreen() {
  const getStatusColor = (status) => {
    switch(status) {
      case 'Confirmed': return '#FF6B35';
      case 'Completed': return '#06D6A0';
      default: return '#999';
    }
  };

  const renderBooking = ({ item }) => (
    <View style={styles.bookingCard}>
      <View style={styles.bookingHeader}>
        <View style={styles.workerInfo}>
          <View style={styles.avatar}>
            <Ionicons name="person" size={24} color="#FF6B35" />
          </View>
          <View>
            <Text style={styles.workerName}>{item.worker}</Text>
            <Text style={styles.skillText}>{item.skill}</Text>
          </View>
        </View>
        <View style={[styles.statusBadge, { backgroundColor: getStatusColor(item.status) + '20' }]}>
          <Text style={[styles.statusText, { color: getStatusColor(item.status) }]}>
            {item.status}
          </Text>
        </View>
      </View>
      
      <View style={styles.bookingDetails}>
        <View style={styles.detailRow}>
          <Ionicons name="calendar" size={16} color="#666" />
          <Text style={styles.detailText}>{item.date}</Text>
        </View>
        <View style={styles.detailRow}>
          <Ionicons name="cash" size={16} color="#666" />
          <Text style={styles.detailText}>₹{item.amount}</Text>
        </View>
      </View>

      {item.rating && (
        <View style={styles.ratingRow}>
          <Text style={styles.ratingLabel}>Your Rating:</Text>
          <View style={styles.stars}>
            {[1,2,3,4,5].map((star) => (
              <Ionicons 
                key={star}
                name="star" 
                size={16} 
                color={star <= item.rating ? '#FFD23F' : '#E0E0E0'} 
              />
            ))}
          </View>
        </View>
      )}

      {item.status === 'Confirmed' && (
        <View style={styles.actionButtons}>
          <TouchableOpacity style={styles.callButton}>
            <Ionicons name="call" size={16} color="#fff" />
            <Text style={styles.buttonText}> Call Worker</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cancelButton}>
            <Text style={styles.cancelText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>My Bookings</Text>
        <Text style={styles.headerSubtitle}>3 bookings</Text>
      </View>
      <FlatList
        data={BOOKINGS}
        renderItem={renderBooking}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F7FA' },
  header: {
    backgroundColor: '#FF6B35', padding: 20, paddingTop: 60,
    borderBottomLeftRadius: 20, borderBottomRightRadius: 20,
  },
  headerTitle: { fontSize: 24, fontWeight: 'bold', color: '#fff' },
  headerSubtitle: { fontSize: 14, color: '#fff', opacity: 0.8, marginTop: 4 },
  listContainer: { padding: 16 },
  bookingCard: {
    backgroundColor: '#fff', borderRadius: 12, padding: 16, marginBottom: 12,
    shadowColor: '#000', shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08, shadowRadius: 8, elevation: 3,
  },
  bookingHeader: {
    flexDirection: 'row', justifyContent: 'space-between',
    alignItems: 'center', marginBottom: 12,
  },
  workerInfo: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  avatar: {
    width: 40, height: 40, borderRadius: 20,
    backgroundColor: '#FFF0E6', justifyContent: 'center', alignItems: 'center',
  },
  workerName: { fontSize: 16, fontWeight: 'bold', color: '#333' },
  skillText: { fontSize: 13, color: '#666' },
  statusBadge: { paddingHorizontal: 12, paddingVertical: 4, borderRadius: 12 },
  statusText: { fontSize: 12, fontWeight: '600' },
  bookingDetails: { gap: 8, marginBottom: 12 },
  detailRow: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  detailText: { fontSize: 14, color: '#666' },
  ratingRow: {
    flexDirection: 'row', alignItems: 'center', gap: 8,
    marginBottom: 12, paddingTop: 12, borderTopWidth: 1, borderTopColor: '#F0F0F0',
  },
  ratingLabel: { fontSize: 13, color: '#666' },
  stars: { flexDirection: 'row', gap: 2 },
  actionButtons: { flexDirection: 'row', gap: 10, marginTop: 8 },
  callButton: {
    flex: 1, backgroundColor: '#06D6A0', padding: 12, borderRadius: 8,
    flexDirection: 'row', justifyContent: 'center', alignItems: 'center',
  },
  buttonText: { color: '#fff', fontWeight: 'bold' },
  cancelButton: {
    padding: 12, borderRadius: 8, borderWidth: 1, borderColor: '#EF476F',
  },
  cancelText: { color: '#EF476F', fontWeight: 'bold' },
});
