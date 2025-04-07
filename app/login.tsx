import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from "react-native";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { login } from "../app/services/api";

export default function LoginScreen() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    // Validasi input
    if (!username || !password) {
      Alert.alert("Error", "Username dan password harus diisi.");
      return;
    }

    try {
      setLoading(true);
      const response = await login(username, password);

      // Log response untuk debugging
      console.log('Login Response:', response);

      // Periksa keberadaan token
      if (response?.token) {
        // Navigasi ke halaman utama
        router.replace("/(tabs)");
      } else {
        Alert.alert("Login Gagal", "Periksa kembali username dan password Anda.");
      }
    } catch (error: any) {
      // Tangani error login
      Alert.alert(
        "Error Login", 
        error.response?.data?.message || 
        error.message || 
        "Terjadi kesalahan saat login. Silakan coba lagi."
      );
      console.error('Login Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white", justifyContent: "center", padding: 30 }}>
      <StatusBar style="dark" />
      
      {/* Tampilan login tetap sama */}
      <View className="mb-10">
        <Text className="text-3xl font-bold text-blue-600 mb-2">Selamat Datang 👋</Text>
        <Text className="text-gray-500">Masuk untuk melanjutkan ke aplikasi</Text>
      </View>

      <View className="mb-4">
        <Text className="text-sm text-gray-600 mb-1">Username</Text>
        <TextInput
          className="border border-gray-300 rounded-xl p-3 bg-white"
          placeholder="Masukkan username"
          value={username}
          onChangeText={setUsername}
        />
      </View>

      <View className="mb-6">
        <Text className="text-sm text-gray-600 mb-1">Password</Text>
        <TextInput
          className="border border-gray-300 rounded-xl p-3 bg-white"
          placeholder="Masukkan password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
      </View>

      <TouchableOpacity
        onPress={handleLogin}
        className="bg-blue-600 p-4 rounded-xl items-center"
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text className="text-white font-semibold">Login</Text>
        )}
      </TouchableOpacity>

      <View className="mt-4 items-center">
        <Text className="text-gray-400 text-sm">Belum punya akun? Hubungi admin</Text>
      </View>
    </SafeAreaView>
  );
}
