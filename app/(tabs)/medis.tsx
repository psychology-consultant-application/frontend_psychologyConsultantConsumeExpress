import React, { useState } from "react";
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

const categories = [
  { title: "Belajar Meditasi, Yuk!", color: "bg-blue-400" },
  { title: "Meditasi Tidur", color: "bg-purple-400" },
  { title: "Stres & Kecemasan", color: "bg-teal-400" },
  { title: "Produktivitas & Pekerjaan", color: "bg-orange-400" },
  { title: "Diri yang Lebih Baik", color: "bg-fuchsia-400" },
  { title: "Kesehatan Fisik", color: "bg-green-500" },
  { title: "Meditasi Darurat", color: "bg-red-400" },
  { title: "Meditasi & Hidup Islami", color: "bg-cyan-400" },
  { title: "Tenang di Rumah", color: "bg-gray-400" },
  { title: "Meditasi Spesial", color: "bg-pink-400" },
];

const router = useRouter();

export default function MedisScreen() {
  const [activeTab, setActiveTab] = useState("Meditasi");

  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar style="dark" />

      {/* Header */}
      <View className="p-4 flex-row items-center justify-between">
        <Text className="text-xl font-bold">Mindful</Text>
        <MoreHorizontal size={24} color="black" />
      </View>

      {/* Search */}
      <View className="px-4">
        <View className="flex-row items-center bg-gray-200 rounded-full px-3 py-2">
          <Search size={20} color="gray" />
          <TextInput
            placeholder="Cari meditasi..."
            className="ml-2 flex-1 text-gray-700"
          />
        </View>
      </View>

      {/* Tabs Meditasi / Lelap */}
      <View className="px-4 mt-4 flex-row space-x-3">
        <TouchableOpacity
          onPress={() => {
            setActiveTab("Meditasi");
            router.push("/Meditasi/reminder");
          }}
          className={`px-4 py-2 rounded-full ${
            activeTab === "Meditasi" ? "bg-orange-400" : "bg-orange-100"
          }`}
        >
          <Text
            className={`font-semibold ${
              activeTab === "Meditasi" ? "text-white" : "text-orange-400"
            }`}
          >
            Meditasi
          </Text>
        </TouchableOpacity>


        <TouchableOpacity
          onPress={() => setActiveTab("Lelap")}
          className={`px-4 py-2 rounded-full ${
            activeTab === "Lelap" ? "bg-orange-400" : "bg-orange-100"
          }`}
        >
          <Text
            className={`font-semibold ${
              activeTab === "Lelap" ? "text-white" : "text-orange-400"
            }`}
          >
            Lelap
          </Text>
        </TouchableOpacity>
      </View>

      {/* Tombol Ingatkan untuk Meditasi */}
      <View className="px-4 mt-4">
        <TouchableOpacity className="flex-row items-center justify-between bg-white rounded-xl shadow p-4 mb-2 border border-gray-200">
          <View className="flex-row items-center space-x-2">
            <Bell size={20} color="#fb923c" />
            <Text className="text-gray-800 font-medium">Ingatkan untuk Meditasi</Text>
          </View>
          <ChevronRight size={20} color="#9ca3af" />
        </TouchableOpacity>
      </View>

      {/* Topik Meditasi */}
      <ScrollView className="mt-2 px-4">
        <Text className="text-base font-semibold text-gray-800 mb-3">
          Topik Meditasi Riliv <Text className="text-blue-500">●</Text>
        </Text>

        {categories.map((item, index) => (
          <TouchableOpacity
            key={index}
            className={`mb-3 p-4 rounded-lg ${item.color}`}
          >
            <Text className="text-white font-semibold">{item.title}</Text>
          </TouchableOpacity>
        ))}

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
