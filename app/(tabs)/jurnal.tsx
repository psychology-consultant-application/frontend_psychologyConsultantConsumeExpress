import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { MoreHorizontal, Search } from "lucide-react-native";
import { useRouter } from "expo-router";

export default function JurnalScreen() {
  const router = useRouter();

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
        {/* Lihat Riwayat Journal */}
        <TouchableOpacity className="bg-blue-100 p-4 rounded-lg mb-4" onPress={() => router.push('/JournalHistory')}>
          <Text className="text-blue-600 font-semibold">Lihat Riwayat Journal</Text>
          <Text className="text-gray-600">Daftar journal yang telah selesai kamu tulis</Text>
        </TouchableOpacity>

        {/* My Daily Journal */}
        <View className="bg-blue-200 p-6 rounded-lg mb-4 flex-row items-center justify-between">
          <Text className="text-xl font-semibold">My Daily Journal</Text>
          <View className="w-16 h-16 bg-white rounded-full" />
        </View>

        {/* Topik Journal */}
        <Text className="text-lg font-semibold mb-2">Topik Journal dari Riliv</Text>
        <Text className="text-gray-600 mb-4">Pilih salah satu topik dan mulai menulis Journalmu</Text>

        {[
          { title: "Kenali Diri Lebih Baik", desc: "Curahkan segala perasaan yang kamu rasakan dalam diri", bg: "bg-blue-100" },
          { title: "Menjalin Relasi", desc: "Ceritakan setiap pengalaman bersamamu dengan orang lain di sini", bg: "bg-green-100" },
          { title: "Cerita Keseharian", desc: "Apa kabar? Bagikan kisah menarik yang terjadi dalam hidupmu hari ini", bg: "bg-yellow-100" },
          { title: "Tingkatkan Potensi Diri", desc: "Akan semakin ada ruang dan jalan untuk kembangkan potensimu", bg: "bg-purple-100" },
          { title: "Membangun Keberanian", desc: "Terus melangkah dan percaya diri hadapi setiap tantangan", bg: "bg-red-100" },
        ].map((item, index) => (
          <TouchableOpacity key={index} className={`${item.bg} p-4 rounded-lg mb-2`}>
            <Text className="font-semibold">{item.title}</Text>
            <Text className="text-gray-600">{item.desc}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

// import React, { useEffect, useState } from "react";
// import { View, Text, ScrollView, TouchableOpacity, ActivityIndicator } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";
// import { StatusBar } from "expo-status-bar";
// import { MoreHorizontal, Search } from "lucide-react-native";
// import { useRouter } from "expo-router";
// import { getJurnal } from "../../app/services/api"; // sesuaikan path jika beda folder

// export default function JurnalScreen() {
//   const router = useRouter();
//   const [jurnals, setJurnals] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const token = "ISI_TOKEN_DI_SINI"; // bisa pakai SecureStore / AsyncStorage untuk token sesungguhnya

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const data = await getJurnal(token);
//         setJurnals(data.jurnals || []);
//       } catch (error) {
//         console.error("Gagal fetch jurnal", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <SafeAreaView className="flex-1 bg-white">
//       <StatusBar style="dark" />
//       {/* UI seperti sebelumnya */}
//     </SafeAreaView>
//   );
// }
