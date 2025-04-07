import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { MoreHorizontal } from "lucide-react-native";
import { useRouter } from "expo-router";

export default function KonselingScreen() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar style="dark" />
      
      {/* Header */}
      <View className="p-4 flex-row items-center justify-between border-b border-gray-200">
        <Text className="text-xl font-bold">Konseling</Text>
        <MoreHorizontal size={24} color="black" />
      </View>

      <ScrollView className="p-4">
        {/* Tes Kesehatan Mental */}
        <TouchableOpacity className="flex-row items-center bg-blue-100 p-4 rounded-lg mb-4" onPress={() => router.push('/Konseling/alur')}>
          <Text className="text-blue-600 font-semibold">Ikuti Tes Kesehatan Mental</Text>
        </TouchableOpacity>

        {/* Konseling Instan */}
        <View className="bg-gray-100 p-4 rounded-lg mb-4">
          <View className="flex-row justify-between mb-2">
            <TouchableOpacity className="bg-blue-500 px-4 py-2 rounded-md" onPress={() => router.push('/Konseling/instan')}>
              <Text className="text-white">Instan</Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-gray-300 px-4 py-2 rounded-md">
              <Text className="text-gray-800">Plus</Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-gray-300 px-4 py-2 rounded-md">
              <Text className="text-gray-800">Pasangan</Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-gray-300 px-4 py-2 rounded-md">
              <Text className="text-gray-800">Offline</Text>
            </TouchableOpacity>
          </View>
          <Text className="text-gray-700 mb-2">Konselor selalu siap mendengarmu kapanpun</Text>
          <TouchableOpacity className="bg-orange-500 px-6 py-2 rounded-full">
            <Text className="text-white font-semibold text-center">Chat Sekarang</Text>
          </TouchableOpacity>
        </View>

        {/* Alur Konseling */}
        <View className="mb-6">
          <View className="flex-row justify-between items-center mb-2">
            <Text className="text-lg font-semibold">Alur Konseling</Text>
            <Text className="text-blue-500">Baca Selengkapnya</Text>
          </View>
          <View className="bg-gray-100 p-4 rounded-lg mb-2">
            <Text className="font-semibold">Pilih Konselor yang Online</Text>
            <Text className="text-gray-600">Temukan dan pilih konselor yang sesuai dengan kebutuhanmu.</Text>
          </View>
          <View className="bg-gray-100 p-4 rounded-lg mb-2">
            <Text className="font-semibold">Pilih Metode Pembayaran</Text>
            <Text className="text-gray-600">Tentukan metode pembayaran, baca syarat & ketentuan, lalu lakukan pembayaran.</Text>
          </View>
          <View className="bg-gray-100 p-4 rounded-lg">
            <Text className="font-semibold">Konfirmasi Pembayaran</Text>
            <Text className="text-gray-600">Setelah membayar, konseling bisa langsung kamu mulai melalui aplikasi.</Text>
          </View>
        </View>

        {/* Kontak Darurat */}
        <Text className="text-red-600 text-center font-semibold">
          Jika kamu atau orang terdekat sedang dalam situasi krisis yang mengancam jiwa, lihat kontak darurat
          <Text className="text-blue-500"> di sini</Text>.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}
