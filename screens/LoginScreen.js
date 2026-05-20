import React, { useState } from 'react';
import {
  View, Text, StyleSheet, TextInput, TouchableOpacity,
  KeyboardAvoidingView, Platform
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function LoginScreen({ onLogin }) {
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [showOtp, setShowOtp] = useState(false);
  const [selectedRole, setSelectedRole] = useState('customer');

  const handleSendOtp = () => {
    if (phone.length === 10) {
      setShowOtp(true);
      alert('OTP sent to +91 ' + phone + '\n\nUse OTP: 1234 (Demo)');
    } else {
      alert('Please enter valid 10-digit mobile number');
    }
  };

  const handleLogin = () => {
    if (otp === '1234' || otp.length === 4) {
      onLogin(selectedRole);
    } else {
      alert('Invalid OTP. Try 1234');
    }
  };

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
      style={styles.container}
    >
      <View style={styles.logoContainer}>
        <View style={styles.logoCircle}>
          <Ionicons name="construct" size={50} color="#FF6B35" />
        </View>
        <Text style={styles.appName}>KaamWala</Text>
        <Text style={styles.tagline}>Labour at your doorstep 🏗️</Text>
      </View>

      <View style={styles.roleSelector}>
        <TouchableOpacity
          style={[styles.roleButton, selectedRole === 'customer' && styles.roleButtonActive]}
          onPress={() => setSelectedRole('customer')}
        >
          <Ionicons name="search" size={20} color={selectedRole === 'customer' ? '#fff' : '#666'} />
          <Text style={[styles.roleText, selectedRole === 'customer' && styles.roleTextActive]}>
            Hire Labour
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={[styles.roleButton, selectedRole === 'labour' && styles.roleButtonActiveLabour]}
          onPress={() => setSelectedRole('labour')}
        >
          <Ionicons name="briefcase" size={20} color={selectedRole === 'labour' ? '#fff' : '#666'} />
          <Text style={[styles.roleText, selectedRole === 'labour' && styles.roleTextActive]}>
            Find Work
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.inputContainer}>
        <View style={styles.phoneInputRow}>
          <View style={styles.countryCode}>
            <Text style={styles.flagEmoji}>🇮🇳</Text>
            <Text style={styles.codeText}>+91</Text>
          </View>
          <TextInput
            style={styles.phoneInput}
            placeholder="Enter mobile number"
            keyboardType="phone-pad"
            maxLength={10}
            value={phone}
            onChangeText={setPhone}
            placeholderTextColor="#999"
          />
        </View>

        {!showOtp ? (
          <TouchableOpacity style={styles.sendOtpButton} onPress={handleSendOtp}>
            <Ionicons name="send" size={20} color="#fff" />
            <Text style={styles.sendOtpText}>  Send OTP</Text>
          </TouchableOpacity>
        ) : (
          <>
            <TextInput
              style={styles.otpInput}
              placeholder="Enter 4-digit OTP"
              keyboardType="number-pad"
              maxLength={4}
              value={otp}
              onChangeText={setOtp}
              placeholderTextColor="#999"
            />
            <Text style={styles.otpHint}>Demo OTP: 1234</Text>
            <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
              <Text style={styles.loginButtonText}>Login & Start</Text>
            </TouchableOpacity>
          </>
        )}
      </View>

      <Text style={styles.termsText}>
        By continuing, you agree to our{' '}
        <Text style={styles.linkText}>Terms</Text> and{' '}
        <Text style={styles.linkText}>Privacy Policy</Text>
      </Text>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding: 24,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  logoCircle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#FFF0E6',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  appName: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#333',
  },
  tagline: {
    fontSize: 16,
    color: '#666',
    marginTop: 4,
  },
  roleSelector: {
    flexDirection: 'row',
    backgroundColor: '#F5F7FA',
    borderRadius: 12,
    padding: 4,
    marginBottom: 24,
  },
  roleButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 14,
    borderRadius: 10,
    gap: 8,
  },
  roleButtonActive: {
    backgroundColor: '#FF6B35',
  },
  roleButtonActiveLabour: {
    backgroundColor: '#06D6A0',
  },
  roleText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#666',
  },
  roleTextActive: {
    color: '#fff',
  },
  inputContainer: {
    gap: 16,
  },
  phoneInputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: '#E0E0E0',
    borderRadius: 12,
    overflow: 'hidden',
  },
  countryCode: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 14,
    borderRightWidth: 1,
    borderRightColor: '#E0E0E0',
    gap: 6,
    backgroundColor: '#F5F7FA',
  },
  flagEmoji: {
    fontSize: 20,
  },
  codeText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  phoneInput: {
    flex: 1,
    padding: 14,
    fontSize: 16,
    color: '#333',
  },
  sendOtpButton: {
    backgroundColor: '#FF6B35',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  sendOtpText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  otpInput: {
    borderWidth: 1.5,
    borderColor: '#E0E0E0',
    borderRadius: 12,
    padding: 14,
    fontSize: 24,
    textAlign: 'center',
    letterSpacing: 8,
    color: '#333',
  },
  otpHint: {
    textAlign: 'center',
    color: '#FF6B35',
    fontSize: 12,
    marginTop: -8,
  },
  loginButton: {
    backgroundColor: '#06D6A0',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#06D6A0',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  termsText: {
    textAlign: 'center',
    color: '#999',
    fontSize: 12,
    marginTop: 24,
    lineHeight: 18,
  },
  linkText: {
    color: '#FF6B35',
    fontWeight: '600',
  },
});
