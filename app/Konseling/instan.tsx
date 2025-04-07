import React from "react";
import {
  FlatList,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import { Stack, useRouter } from "expo-router";
import { ChevronLeft } from "lucide-react-native";

const data = [
  {
    id: "1",
    name: "Setya Nareta Dhamayanti, S.Psi",
    status: "Online",
    statusColor: "bg-green-500",
    session: false,
    expertise: "Pekerjaan, Kendali Emosi, +4 lainnya",
    image: "https://via.placeholder.com/60x60.png?text=SN", // Ganti dengan gambar asli jika ada
  },
  {
    id: "2",
    name: "Aurora Louisa, S.Psi",
    status: "On Session",
    statusColor: "bg-yellow-500",
    session: true,
    expertise: "Pekerjaan, Kendali Emosi, +5 lainnya",
    image: "https://via.placeholder.com/60x60.png?text=AL",
  },
  {
    id: "3",
    name: "Yuna Anisa Putri, S.Psi",
    status: "On Session",
    statusColor: "bg-yellow-500",
    session: true,
    expertise: "Pekerjaan, Kendali Emosi, +6 lainnya",
    image: "https://via.placeholder.com/60x60.png?text=YA",
  },
];

export default function InstanScreen() {
  const router = useRouter();

  return (
    <View className="flex-1 bg-white">
      <Stack.Screen options={{ headerShown: false }} />

      {/* Header */}
      <View className="flex-row items-center justify-between p-4">
        <TouchableOpacity
          className="w-10 h-10 rounded-full bg-gray-100 items-center justify-center"
          onPress={() => router.back()}
        >
          <ChevronLeft size={24} color="#000" />
        </TouchableOpacity>
        <Text className="text-base font-semibold text-black">
          Konseling Instan
        </Text>
        <View className="w-10" />
      </View>

      {/* Info Box */}
      <View className="bg-[#E7F5FF] px-4 py-3 mx-4 rounded-xl">
        <Text className="text-sm text-black">
          Dapatkan kualitas terbaik untuk layanan konseling instan hanya dengan membayar{" "}
          <Text className="text-blue-600 font-semibold">Rp50.000</Text>
        </Text>
      </View>

      {/* List */}
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        className="mt-4 px-4"
        renderItem={({ item }) => (
          <View className="flex-row items-center mb-4">
            <Image
              source={{ uri: item.image }}
              className="w-14 h-14 rounded-full"
            />
            <View className="flex-1 ml-3">
              <Text className="font-semibold text-black">{item.name}</Text>
              <View className="flex-row items-center mt-1">
                <View className={`w-2 h-2 rounded-full ${item.statusColor} mr-2`} />
                <Text className="text-xs text-gray-600">{item.status}</Text>
              </View>
              <Text className="text-xs text-gray-500 mt-1">
                Expertise: {item.expertise}
              </Text>
            </View>
            <TouchableOpacity
              disabled={item.session}
              className={`px-4 py-1.5 rounded-full ${
                item.session
                  ? "bg-gray-200"
                  : "bg-orange-500"
              }`} onPress={() => router.push('/Konseling/payment')}
            >
              <Text
                className={`text-sm font-medium ${
                  item.session ? "text-gray-400" : "text-white"
                }`}
              >
                Pilih
              </Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}
