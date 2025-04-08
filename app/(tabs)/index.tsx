import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, Image, TouchableOpacity, ActivityIndicator, RefreshControl } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { Link } from "expo-router";

// Import API dan tipe data
import { getArticles, Article } from "../services/api"; // Sesuaikan path import

// Import konstanta dan styling
import colors from "@/constants/Colors";
import layout from "@/constants/layout";
import "../../global.css";

export default function HomeScreen() {
  // State untuk artikel, loading, dan refresh
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Fungsi untuk fetch artikel
  const fetchArticles = async () => {
    try {
      setLoading(true);
      const fetchedArticles = await getArticles();
      setArticles(fetchedArticles);
      setError(null);
    } catch (err: any) {
      setError('Gagal memuat artikel: ' + err.message);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  // Efek untuk fetch artikel pertama kali
  useEffect(() => {
    fetchArticles();
  }, []);

  // Fungsi untuk refresh
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    fetchArticles();
  }, []);

  // Render loading
  if (loading) {
    return (
      <View className="flex-1 justify-center items-center bg-blue-400">
        <ActivityIndicator size="large" color="#ffffff" />
        <Text className="text-white mt-4">Memuat artikel...</Text>
      </View>
    );
  }

  // Render error
  if (error) {
    return (
      <View className="flex-1 justify-center items-center bg-blue-400 p-4">
        <Text className="text-white text-center mb-4">{error}</Text>
        <TouchableOpacity 
          onPress={fetchArticles} 
          className="bg-white px-4 py-2 rounded-lg"
        >
          <Text className="text-blue-500">Coba Lagi</Text>
        </TouchableOpacity>
      </View>
    );
  }

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
      <ScrollView 
        className="bg-white flex-1 px-4 pt-6 pb-6"
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            colors={[colors.primary]}
            tintColor={colors.primary}
          />
        }
      >
        {/* Artikel Section */}
        <View>
          <View className="flex-row justify-between items-center mb-4">
            <Text className="text-lg font-bold">Baca Artikel Riliv Story di Sini!</Text>
            <TouchableOpacity>
              <Text className="text-blue-500">Lihat Semua</Text>
            </TouchableOpacity>
          </View>

          {articles.length === 0 ? (
            <View className="items-center justify-center p-4">
              <Text className="text-gray-500">Tidak ada artikel tersedia</Text>
            </View>
          ) : (
            <View className="flex-row flex-wrap justify-between">
              {articles.map((item) => (
                <Link key={item.id} href={`/article/${item.id}`} asChild>
                  <TouchableOpacity className="w-[48%] bg-gray-100 rounded-lg overflow-hidden mb-4">
                    <Image 
                      source={{ uri: item.image }} 
                      className="w-full h-24" 
                      resizeMode="cover"
                      // Tambahkan placeholder atau error image jika diperlukan
                      // defaultSource={require('@/assets/placeholder.png')}
                    />
                    <Text className="p-2 text-sm font-semibold" numberOfLines={2}>
                      {item.title}
                    </Text>
                  </TouchableOpacity>
                </Link>
              ))}
            </View>
          )}
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

      {/* Status Bar */}
      <StatusBar style="light" />
    </View>
  );
}
