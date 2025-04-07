import React from "react";
import {
  Switch,
  Text,
  TouchableOpacity,
  View,
  Picker,
} from "react-native";
import { Stack, useRouter } from "expo-router";
import { ChevronLeft } from "lucide-react-native";

export default function ReminderScreen() {
  const router = useRouter();

  return (
    <View className="flex-1 bg-white p-4">
      <Stack.Screen
        options={{
          headerLeft: () => (
            <TouchableOpacity onPress={() => router.back()}>
              <ChevronLeft size={24} />
            </TouchableOpacity>
          ),
          headerTitle: "Reminder Meditasi"
        }}
      />

      <View className="my-4">
        <Text className="text-lg font-semibold">Reminder Notifikasi</Text>
        <Switch value={true} onValueChange={() => {}} />
      </View>

      <View className="my-4">
        <Text className="text-base">Pada kisaran jam...</Text>
        <Picker
          selectedValue="Atur Waktu Reminder"
          onValueChange={(itemValue) => console.log(itemValue)}
          className="border border-gray-300 rounded-md p-2"
        >
          <Picker.Item label="Atur Waktu Reminder" value="Atur Waktu Reminder" />
          {/* Add more Picker.Items as needed */}
        </Picker>
      </View>

      <View className="my-4">
        <Text className="text-base">Dengan Frekuensi...</Text>
        <Picker
          selectedValue="Atur Frekuensi Reminder"
          onValueChange={(itemValue) => console.log(itemValue)}
          className="border border-gray-300 rounded-md p-2"
        >
          <Picker.Item label="Atur Frekuensi Reminder" value="Atur Frekuensi Reminder" />
          {/* Add more Picker.Items as needed */}
        </Picker>
      </View>

      <View className="my-4 flex-row items-center">
        <Switch value={false} onValueChange={() => {}} />
        <Text className="ml-2">Ingkatkan juga di Kalender</Text>
      </View>

      <TouchableOpacity className="bg-blue-500 p-3 rounded-md" onPress={() => console.log('Simpan Perubahan')}>
        <Text className="text-white text-center">Simpan Perubahan</Text>
      </TouchableOpacity>
    </View>
  );
}