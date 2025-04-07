import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import {
  Search,
  MoreHorizontal,
  Bell,
  ChevronRight,
} from "lucide-react-native";
import { Stack, useRouter } from "expo-router";
import { getMeditasis, Meditasi } from '../services/api'; // Impor fungsi dan interface



export default function MedisScreen() {
  const [activeTab, setActiveTab] = useState("Meditasi");
  const [meditasis, setMeditasis] = useState<Meditasi[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchMeditasis = async () => {
      try {
        const fetchedMeditasis = await getMeditasis();
        setMeditasis(fetchedMeditasis);
        setLoading(false);
      } catch (error) {
        console.error('Gagal memuat meditasi', error);
        setLoading(false);
      }
    };

    fetchMeditasis();
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* ... kode sebelumnya */}

      {/* Topik Meditasi */}
      <ScrollView className="mt-2 px-4">
        <Text className="text-base font-semibold text-gray-800 mb-3">
          Topik Meditasi Riliv <Text className="text-blue-500">●</Text>
        </Text>

        {loading ? (
          <Text>Memuat meditasi...</Text>
        ) : meditasis.length === 0 ? (
          <Text>Belum ada meditasi</Text>
        ) : (
          meditasis.map((meditasi) => (
            <TouchableOpacity
              key={meditasi.id}
              className="mb-3 p-4 rounded-lg bg-blue-400"
            >
              <Text className="text-white font-semibold">
                {meditasi.topikMeditasi}
              </Text>
              <Text className="text-white text-sm">
                {meditasi.isiContent}
              </Text>
            </TouchableOpacity>
          ))
        )}

        {/* Kategori default */}


        {/* CTA section */}
        <View className="items-center mt-6">
          <Text className="text-gray-600 text-center mt-2">
            Dapatkan akses gratis lebih dari 500+ konten meditasi terbaik!
          </Text>
          <TouchableOpacity className="mt-3 px-6 py-2 bg-orange-500 rounded-full">
            <Text className="text-white font-semibold">Mulai Sekarang</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
