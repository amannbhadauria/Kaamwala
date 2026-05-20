import React, { useState } from 'react';
import {
  View, Text, StyleSheet, ScrollView, TouchableOpacity, FlatList, Switch
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const JOB_REQUESTS = [
  { id: 1, customer: 'Amit Sharma', work: 'Pipe leakage fix',
    location: 'Andheri West', distance: '1.5 km', price: 500,
    urgency: 'urgent', time: '5 min ago' },
  { id: 2, customer: 'Priya Patel', work: 'Wiring for new AC',
    location: 'Bandra East', distance: '2.8 km', price: 1200,
    urgency: 'normal', time: '15 min ago' },
  { id: 3, customer: 'Rahul Mehta', work: 'Bathroom tiling',
    location: 'Juhu', distance: '3.2 km', price: 2500,
    urgency: 'normal', time: '30 min ago' },
];

export default function LabourHome() {
  const [isAvailable, setIsAvailable] = useState(true);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Welcome back, Rajesh! 👷</Text>
          <Text style={styles.subtitle}>Plumber • ⭐ 4.8</Text>
        </View>
        <View style={styles.availabilityToggle}>
          <Text style={styles.availabilityLabel}>Available</Text>
          <Switch
            value={isAvailable}
            onValueChange={setIsAvailable}
            trackColor={{ false: '#ddd', true: '#06D6A0' }}
            thumbColor="#fff"
          />
        </View>
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.earningsCard}>
          <View style={styles.earningItem}>
            <Ionicons name="cash" size={24} color="#06D6A0" />
            <Text style={styles.earningAmount}>₹1,500</Text>
            <Text style={styles.earningLabel}>Today</Text>
          </View>
          <View style={styles.earningDivider} />
          <View style={styles.earningItem}>
            <Ionicons name="checkmark-circle" size={24} color="#FF6B35" />
            <Text style={styles.earningAmount}>3</Text>
            <Text style={styles.earningLabel}>Jobs</Text>
          </View>
          <View style={styles.earningDivider} />
          <View style={styles.earningItem}>
            <Ionicons name="star" size={24} color="#FFD23F" />
            <Text style={styles.earningAmount}>4.8</Text>
            <Text style={styles.earningLabel}>Rating</Text>
          </View>
        </View>

        <View style={styles.subscriptionCard}>
          <Ionicons name="diamond" size={24} color="#FFD23F" />
          <View style={styles.subInfo}>
            <Text style={styles.subTitle}>Premium Member</Text>
            <Text style={styles.subSubtitle}>Priority jobs • 25 days left</Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>New Job Requests</Text>
        {JOB_REQUESTS.map((job) => (
          <View key={job.id} style={styles.jobCard}>
            <View style={styles.jobHeader}>
              <View style={[styles.urgencyBadge, {
                backgroundColor: job.urgency === 'urgent' ? '#EF476F20' : '#06D6A020'
              }]}>
                <Text style={{ color: job.urgency === 'urgent' ? '#EF476F' : '#06D6A0',
                  fontSize: 10, fontWeight: 'bold' }}>
                  {job.urgency.toUpperCase()}
                </Text>
              </View>
              <Text style={styles.jobTime}>{job.time}</Text>
            </View>

            <Text style={styles.workTitle}>{job.work}</Text>

            <View style={styles.jobDetails}>
              <View style={styles.detailRow}>
                <Ionicons name="person" size={16} color="#666" />
                <Text style={styles.detailText}>{job.customer}</Text>
              </View>
              <View style={styles.detailRow}>
                <Ionicons name="location" size={16} color="#666" />
                <Text style={styles.detailText}>{job.location} • {job.distance}</Text>
              </View>
              <View style={styles.detailRow}>
                <Ionicons name="pricetag" size={16} color="#666" />
                <Text style={styles.priceText}>₹{job.price}</Text>
              </View>
            </View>

            <View style={styles.jobActions}>
              <TouchableOpacity style={styles.declineButton}>
                <Text style={styles.declineText}>Decline</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.acceptButton}>
                <Text style={styles.acceptText}>Accept Job</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
        <View style={{ height: 40 }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F7FA' },
  header: {
    backgroundColor: '#073B4C', padding: 20, paddingTop: 60,
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
    borderBottomLeftRadius: 20, borderBottomRightRadius: 20,
  },
  greeting: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
  subtitle: { color: '#FFD23F', fontSize: 13, marginTop: 4 },
  availabilityToggle: {
    alignItems: 'center', backgroundColor: '#ffffff20', padding: 10, borderRadius: 15,
  },
  availabilityLabel: { color: '#fff', fontSize: 11, marginBottom: 4 },
  content: { flex: 1, padding: 16 },
  earningsCard: {
    backgroundColor: '#fff', borderRadius: 12, padding: 20,
    flexDirection: 'row', justifyContent: 'space-around',
    marginTop: -20, shadowColor: '#000', shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1, shadowRadius: 8, elevation: 5,
  },
  earningItem: { alignItems: 'center' },
  earningAmount: { fontSize: 20, fontWeight: 'bold', color: '#333', marginTop: 5 },
  earningLabel: { fontSize: 11, color: '#666', marginTop: 2 },
  earningDivider: { width: 1, backgroundColor: '#eee' },
  subscriptionCard: {
    backgroundColor: '#FFD23F20', borderRadius: 12, padding: 15,
    flexDirection: 'row', alignItems: 'center', marginTop: 15,
    borderWidth: 1, borderColor: '#FFD23F',
  },
  subInfo: { flex: 1, marginLeft: 12 },
  subTitle: { fontSize: 16, fontWeight: 'bold', color: '#333' },
  subSubtitle: { fontSize: 12, color: '#666', marginTop: 2 },
  sectionTitle: {
    fontSize: 18, fontWeight: 'bold', color: '#333', marginTop: 20, marginBottom: 12,
  },
  jobCard: {
    backgroundColor: '#fff', borderRadius: 12, padding: 16, marginBottom: 12,
    shadowColor: '#000', shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08, shadowRadius: 8, elevation: 3,
  },
  jobHeader: {
    flexDirection: 'row', justifyContent: 'space-between',
    alignItems: 'center', marginBottom: 10,
  },
  urgencyBadge: { paddingHorizontal: 10, paddingVertical: 4, borderRadius: 12 },
  jobTime: { fontSize: 11, color: '#999' },
  workTitle: { fontSize: 17, fontWeight: 'bold', color: '#333', marginBottom: 8 },
  jobDetails: { gap: 6, marginBottom: 12 },
  detailRow: { flexDirection: 'row', alignItems: 'center', gap: 6 },
  detailText: { fontSize: 13, color: '#666' },
  priceText: { fontSize: 16, fontWeight: 'bold', color: '#06D6A0' },
  jobActions: { flexDirection: 'row', gap: 10, marginTop: 5 },
  declineButton: {
    flex: 1, padding: 12, borderRadius: 8,
    borderWidth: 1, borderColor: '#EF476F', alignItems: 'center',
  },
  declineText: { color: '#EF476F', fontWeight: 'bold' },
  acceptButton: {
    flex: 1, padding: 12, borderRadius: 8,
    backgroundColor: '#06D6A0', alignItems: 'center',
  },
  acceptText: { color: '#fff', fontWeight: 'bold' },
});
