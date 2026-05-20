import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const MENU_ITEMS = [
  { icon: 'person-outline', label: 'Edit Profile' },
  { icon: 'document-text-outline', label: 'My Documents' },
  { icon: 'card-outline', label: 'Payment Methods' },
  { icon: 'location-outline', label: 'Saved Addresses' },
  { icon: 'shield-checkmark-outline', label: 'Verification Status' },
  { icon: 'headset-outline', label: 'Help & Support' },
  { icon: 'information-circle-outline', label: 'About Us' },
  { icon: 'log-out-outline', label: 'Logout', color: '#EF476F' },
];

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Profile</Text>
        <TouchableOpacity>
          <Ionicons name="settings-outline" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.profileCard}>
          <View style={styles.avatarLarge}>
            <Ionicons name="person" size={40} color="#FF6B35" />
          </View>
          <Text style={styles.userName}>Rahul Sharma</Text>
          <Text style={styles.userPhone}>+91 98765 43210</Text>
          <View style={styles.verifiedBadge}>
            <Ionicons name="checkmark-circle" size={16} color="#06D6A0" />
            <Text style={styles.verifiedText}>Verified User</Text>
          </View>
        </View>

        <View style={styles.walletCard}>
          <View>
            <Text style={styles.walletLabel}>Wallet Balance</Text>
            <Text style={styles.walletAmount}>₹2,450</Text>
          </View>
          <TouchableOpacity style={styles.addMoneyButton}>
            <Text style={styles.addMoneyText}>+ Add Money</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.menuContainer}>
          {MENU_ITEMS.map((item, index) => (
            <TouchableOpacity key={index} style={styles.menuItem}>
              <View style={styles.menuLeft}>
                <View style={[styles.menuIcon, item.color && { backgroundColor: item.color + '15' }]}>
                  <Ionicons name={item.icon} size={22} color={item.color || '#FF6B35'} />
                </View>
                <Text style={[styles.menuLabel, item.color && { color: item.color }]}>
                  {item.label}
                </Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#999" />
            </TouchableOpacity>
          ))}
        </View>

        <Text style={styles.versionText}>KaamWala v1.0.0</Text>
        <View style={{ height: 40 }} />
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
  headerTitle: { fontSize: 24, fontWeight: 'bold', color: '#fff' },
  content: { flex: 1, padding: 16 },
  profileCard: {
    backgroundColor: '#fff', borderRadius: 16, padding: 24, alignItems: 'center',
    marginTop: -30, shadowColor: '#000', shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1, shadowRadius: 12, elevation: 5,
  },
  avatarLarge: {
    width: 80, height: 80, borderRadius: 40,
    backgroundColor: '#FFF0E6', justifyContent: 'center', alignItems: 'center',
    marginBottom: 12,
  },
  userName: { fontSize: 20, fontWeight: 'bold', color: '#333' },
  userPhone: { fontSize: 14, color: '#666', marginTop: 4 },
  verifiedBadge: {
    flexDirection: 'row', alignItems: 'center', gap: 4, marginTop: 8,
    backgroundColor: '#06D6A015', paddingHorizontal: 12, paddingVertical: 4,
    borderRadius: 12,
  },
  verifiedText: { fontSize: 12, color: '#06D6A0', fontWeight: '600' },
  walletCard: {
    backgroundColor: '#073B4C', borderRadius: 12, padding: 16,
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
    marginTop: 16,
  },
  walletLabel: { color: '#fff', fontSize: 13, opacity: 0.8 },
  walletAmount: { color: '#fff', fontSize: 28, fontWeight: 'bold', marginTop: 4 },
  addMoneyButton: {
    backgroundColor: '#FF6B35', paddingHorizontal: 16, paddingVertical: 10,
    borderRadius: 8,
  },
  addMoneyText: { color: '#fff', fontWeight: 'bold' },
  menuContainer: {
    backgroundColor: '#fff', borderRadius: 12, marginTop: 16, overflow: 'hidden',
  },
  menuItem: {
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
    padding: 16, borderBottomWidth: 1, borderBottomColor: '#F0F0F0',
  },
  menuLeft: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  menuIcon: {
    width: 40, height: 40, borderRadius: 20,
    backgroundColor: '#FFF0E6', justifyContent: 'center', alignItems: 'center',
  },
  menuLabel: { fontSize: 15, color: '#333', fontWeight: '500' },
  versionText: {
    textAlign: 'center', color: '#999', fontSize: 12, marginTop: 24,
  },
});
