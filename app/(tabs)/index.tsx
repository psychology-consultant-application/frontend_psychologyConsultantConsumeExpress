import React from "react";
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { MoreHorizontal } from "lucide-react-native";
import { Stack, Link } from "expo-router";

import SearchBar from "@/components/SearchBar";
import CategoryCard from "@/components/CategoryCard";
import SectionHeader from "@/components/SectionHeader";
import FeaturedPropertyCard from "@/components/FeaturedPropertyCard";

import { categories, featuredProperties } from "@/mocks/properties";
import colors from "@/constants/Colors";
import layout from "@/constants/layout";
import "../../global.css";

export default function HomeScreen() {
  const articles = [
    {
      id: "1",
      title: "Manfaat Konseling Karyawan, Tingkatkan Produktivitas Kerja",
      image: "https://source.unsplash.com/random/200x200?work",
      linkTo: "/featured",
    },
    {
      id: "2",
      title: "Manfaat Konseling Online serta Kekurangannya",
      image: "https://source.unsplash.com/random/200x200?online",
      linkTo: "/online",
    },
    {
      id: "3",
      title: "5 Persiapan Curhat ke Psikolog yang Perlu Diperhatikan",
      image: "https://source.unsplash.com/random/200x200?psychology",
      linkTo: "/curhat",
    },
    {
      id: "4",
      title: "Ragu dengan Konseling Online? Cek Dulu Ulasan Pakar Ini!",
      image: "https://source.unsplash.com/random/200x200?mentalhealth",
      linkTo: "/review",
    },
  ];

  return (
    <View className="flex-1 bg-blue-400">
      {/* Header */}
      <View className="flex-row items-center justify-between mb-4 mt-10 p-5 bg-blue-400">
        <Text className="text-2xl font-bold text-white">riliv</Text>
        <View className="flex-row space-x-2">
          <TouchableOpacity className="bg-blue-500 px-4 py-2 rounded-lg">
            <Text className="text-white">Beranda</Text>
          </TouchableOpacity>
          <TouchableOpacity className="bg-gray-200 px-4 py-2 rounded-lg">
            <Text className="text-blue-600">Voucher</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Konten */}
      <ScrollView className="bg-white flex-1 px-4 pt-6 pb-6">
        {/* Artikel Section */}
        <View>
          <View className="flex-row justify-between items-center mb-4">
            <Text className="text-lg font-bold">Baca Artikel Riliv Story di Sini!</Text>
            <TouchableOpacity>
              <Text className="text-blue-500">Lihat Semua</Text>
            </TouchableOpacity>
          </View>

          <View className="flex-row flex-wrap justify-between">
            {articles.map((item) => (
              <Link key={item.id} href={item.linkTo} asChild>
                <TouchableOpacity className="w-[48%] bg-gray-100 rounded-lg overflow-hidden mb-4">
                  <Image source={{ uri: item.image }} className="w-full h-24" />
                  <Text className="p-2 text-sm">{item.title}</Text>
                </TouchableOpacity>
              </Link>
            ))}
          </View>
        </View>

        {/* Paket Meditasi */}
        <View className="bg-blue-100 p-4 rounded-lg mt-6">
          <Text className="text-blue-600 font-bold">Paket Meditasi</Text>
          <Text className="text-gray-500 text-sm">
            Akses tanpa batas ke 500+ konten meditasi eksklusif!
          </Text>
          <TouchableOpacity className="mt-2 bg-orange-500 px-4 py-2 rounded-lg w-32">
            <Text className="text-white text-center">Lihat Paket</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
