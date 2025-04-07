import React from "react";
import {
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Stack, useRouter } from "expo-router";
import { ChevronLeft } from "lucide-react-native";
import { featuredProperties } from "@/mocks/properties";
import FeaturedPropertyCard from "@/components/FeaturedPropertyCard";

export default function AlurScreen() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1">
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />

      <View className="flex-row items-center justify-between p-4 bg-blue-200">
        <TouchableOpacity className="w-10 h-10 rounded-full bg-white flex items-center justify-center" onPress={() => router.back()}>
          <ChevronLeft size={24} color="#000" />
        </TouchableOpacity>
        <Text className="text-lg font-semibold text-black">Alur Konseling Instan</Text>
        <View className="w-10" />
      </View>

      {/* <FlatList
        data={featuredProperties}
        renderItem={({ item }) => <FeaturedPropertyCard property={item} />}
        keyExtractor={(item) => item.id}
        contentContainerStyle="p-4"
      /> */}
      
      <View className="p-4">
        <Text className="text-black">1. Cek e-mail invoice pembayaran dari Midtrans sebagai tanda pembayaran diterima.</Text>
        <Text className="text-black">2. Buka aplikasi, pastikan bahwa chat room konseling sudah muncul dan bisa diakses.</Text>
        <Text className="text-black">3. Masuk ke dalam chat room konseling untuk memulai tahap konseling.</Text>
        <Text className="text-black">4. Pastikan kamu mengisi asesmen awal. Setelah itu, konselor akan menyampaikan untuk memulai konseling.</Text>
        <Text className="text-black">5. Pesan hanya dibatasi 1500 karakter. Apabila melebihi 1500 karakter, pesan tersebut tidak dapat terkirim sehingga perlu mempersingkat atau dipotong-potong.</Text>
        <Text className="text-black">6. Sesi konseling akan berlangsung selama 40 menit. Selama konseling, aktifkan notifikasi dan buka aplikasi Riiv secara berkala untuk mendapatkan notifikasi, jika tidak sempat smartphone memiliki-warning.</Text>
        <Text className="text-black">7. Apabila terdapat chat yang terlewat masuk atau notifikasi yang tidak muncul, lakukan refresh Riiv kemudian kembali.</Text>
      </View>
    </SafeAreaView>
  );
}