import React from "react";
import { Tabs } from "expo-router";
import { Home, Search, Heart, User, AlarmClockIcon, MessageCircleDashedIcon, KeyIcon, BookAIcon, BookCheck, FlagIcon, MessageCircleHeart, MedalIcon } from "lucide-react-native";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#007bff", // Warna biru saat tab aktif
        tabBarInactiveTintColor: "#A0A0A0", // Warna abu-abu saat tab tidak aktif
        tabBarStyle: {
          borderTopColor: "#E0E0E0", // Warna border atas
          backgroundColor: "#FFFFFF", // Warna background tab bar
        },
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => <Home size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="medis"
        options={{
          title: "Medis",
          tabBarIcon: ({ color }) => <MedalIcon size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="konseling"
        options={{
          title: "Konseling",
          tabBarIcon: ({ color }) => <MessageCircleHeart size={24} color={color} />,
        }}
      />
       <Tabs.Screen
        name="jurnal"
        options={{
          title: "Jurnal",
          tabBarIcon: ({ color }) => <BookAIcon size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="home"
        options={{
          title: "Discover",
          tabBarIcon: ({ color }) => <Home size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          tabBarIcon: ({ color }) => <Search size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="favorites"
        options={{
          title: "Favorites",
          tabBarIcon: ({ color }) => <Heart size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => <User size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="journey"
        options={{
          title: "Journey",
          tabBarIcon: ({ color }) => <FlagIcon size={24} color={color} />,
        }}
      />
     

    </Tabs>
  );
}
