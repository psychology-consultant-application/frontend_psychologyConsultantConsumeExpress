import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, TouchableOpacity, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { MoreHorizontal, Search } from "lucide-react-native";
import { useRouter } from "expo-router";
import { getJurnals,Jurnal } from '../services/api'; // Sesuaikan path

export default function JurnalScreen() {
  const router = useRouter();
  const [jurnals, setJurnals] = useState<Jurnal[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJurnals = async () => {
      try {
        const fetchedJurnals = await getJurnals();
        setJurnals(fetchedJurnals);
        setLoading(false);
      } catch (error) {
        console.error('Gagal memuat jurnal', error);
        setLoading(false);
      }
    };

    fetchJurnals();
  }, []);

  // ... sisa kode sebelumnya tetap sama

  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar style="dark" />
      
      {/* Header */}
      <View className="p-4 flex-row items-center justify-between border-b border-gray-200">
        <Text className="text-xl font-bold">Riliv Journal</Text>
        <View className="flex-row gap-3">
          <Search size={24} color="black" />
          <MoreHorizontal size={24} color="black" />
        </View>
      </View>

      <ScrollView className="p-4">
        {/* Bagian sebelumnya tetap sama */}

        {/* Daftar Jurnal */}
        <Text className="text-lg font-semibold mb-2">Jurnal Saya</Text>
        {loading ? (
          <Text>Memuat jurnal...</Text>
        ) : jurnals.length === 0 ? (
          <Text>Belum ada jurnal</Text>
        ) : (
          jurnals.map((jurnal, index) => (
            <TouchableOpacity 
              key={jurnal.id} 
              className="bg-blue-100 p-4 rounded-lg mb-2"
              onPress={() => {/* Navigasi ke detail jurnal */}}
            >
              <Text className="font-semibold">{jurnal.topikJurnal}</Text>
              <Text className="text-gray-600">{jurnal.isiJurnal}</Text>
              <Text className="text-xs text-gray-500">
                {new Date(jurnal.tanggalRilisJurnal).toLocaleDateString()}
              </Text>
            </TouchableOpacity>
          ))
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
