import React, { useState } from "react";
import {
Text,
TouchableOpacity,
View,
Image,
ScrollView,
Modal,
Linking,
Clipboard
} from "react-native";
import { Stack, useRouter } from "expo-router";
import { ChevronLeft, CheckCircle, Circle, Link } from "lucide-react-native";

export default function PaymentScreen() {
const router = useRouter();
const [selectedTab, setSelectedTab] = useState("E-wallet");
const [selectedOption, setSelectedOption] = useState("");
const [checked, setChecked] = useState(false);
const [showGopayPopup, setShowGopayPopup] = useState(false);
const [showTerms, setShowTerms] = useState(false);
const [showPaymentSuccessModal, setShowPaymentSuccessModal] = useState(false);

const paymentOptions = {
  "E-wallet": ["Gopay", "ShopeePay"],
  "Bank Transfer": ["BCA", "BNI", "BRI", "Mandiri"],
  "Kartu Kredit": ["Visa / MasterCard"],
};

const googleMeetLink = "https://meet.google.com/wjt-riig-mtf";

const handleOpenMeetLink = () => {
  Linking.openURL(googleMeetLink).catch((err) => {
    console.error("Failed to open link: ", err);
    alert("Tidak dapat membuka link. Silakan salin link berikut: " + googleMeetLink);
  });
};

return (
  <View className="flex-1 bg-white">
    <Stack.Screen options={{ headerShown: false }} />

    {/* Header */}
    <View className="flex-row items-center justify-between px-4 py-3">
      <TouchableOpacity
        className="w-10 h-10 rounded-full bg-gray-100 items-center justify-center"
        onPress={() => router.back()}
      >
        <ChevronLeft size={24} color="#000" />
      </TouchableOpacity>
      <Text className="text-base font-semibold text-black">Konseling Instan</Text>
      <View className="w-10" />
    </View>

    <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
      {/* Timer */}
      <View className="bg-[#E7F5FF] mx-4 p-3 rounded-xl flex-row items-center justify-between mb-3">
        <Text className="text-gray-700">Selesaikan pembayaran dalam waktu</Text>
        <Text className="text-blue-600 font-semibold">00:05:00</Text>
      </View>

      {/* Konseling Card */}
      <View className="bg-gray-50 mx-4 p-4 rounded-xl shadow-sm border border-gray-200">
        <Text className="font-semibold text-black mb-2">Konseling Instan</Text>

        <View className="flex-row items-center mb-3">
          <Image
            source={{ uri: "https://via.placeholder.com/60x60.png?text=SN" }}
            className="w-12 h-12 rounded-full"
          />
          <View className="ml-3">
            <Text className="text-black font-medium">
              Setya Nareta Dhamayanti, S.Psi.
            </Text>
            <Text className="text-xs text-gray-500">Konselor</Text>
          </View>
        </View>

        <View className="space-y-1">
          <Text className="text-sm text-gray-600">
            Metode Konseling : <Text className="text-black">Chat</Text>
          </Text>
          <Text className="text-sm text-gray-600">
            Durasi Konseling : <Text className="text-black">40 Menit</Text>
          </Text>
          <Text className="text-sm text-gray-600">
            Jumlah Sesi : <Text className="text-black">1 kali sesi</Text>
          </Text>
        </View>

        <View className="mt-3 border-t pt-2 border-dashed border-gray-300 flex-row justify-between">
          <Text className="text-sm text-gray-600">Harga Konsultasi</Text>
          <Text className="text-orange-500 font-semibold">Rp50.000</Text>
        </View>
      </View>

      {/* Tab Pembayaran */}
      <View className="mx-4 mt-5">
        <View className="flex-row justify-between bg-gray-100 rounded-xl p-1">
          {Object.keys(paymentOptions).map((tab) => (
            <TouchableOpacity
              key={tab}
              className={`flex-1 py-2 rounded-xl ${
                selectedTab === tab ? "bg-white" : ""
              } items-center`}
              onPress={() => setSelectedTab(tab)}
            >
              <Text
                className={`text-sm font-medium ${
                  selectedTab === tab ? "text-blue-600" : "text-gray-500"
                }`}
              >
                {tab}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Opsi Pembayaran */}
      <View className="mx-4 mt-4 space-y-4">
        {paymentOptions[selectedTab].map((method) => (
          <TouchableOpacity
            key={method}
            className="flex-row items-center justify-between p-3 border rounded-lg border-gray-300"
            onPress={() => setSelectedOption(method)}
          >
            <Text className="text-black">{method}</Text>
            {selectedOption === method ? (
              <CheckCircle color="#007AFF" size={20} />
            ) : (
              <Circle color="#ccc" size={20} />
            )}
          </TouchableOpacity>
        ))}
      </View>

      {/* Checkbox */}
      <TouchableOpacity
        className="flex-row items-start mx-4 mt-5"
        onPress={() => setChecked(!checked)}
      >
        <View className="mt-1">
          {checked ? (
            <CheckCircle color="#007AFF" size={20} />
          ) : (
            <Circle color="#ccc" size={20} />
          )}
        </View>
        <Text className="ml-2 text-sm text-gray-700">
          Saya telah membaca dan menyetujui{" "}
          <Text className="text-blue-600 underline">syarat dan ketentuan</Text>
        </Text>
      </TouchableOpacity>

      {/* Total & Bayar */}
      <View className="mx-4 mt-6 border-t pt-4 border-gray-200">
        <View className="flex-row justify-between mb-3">
          <Text className="text-gray-600">Total Biaya</Text>
          <Text className="text-black font-semibold">Rp50.000</Text>
        </View>

        <TouchableOpacity
          disabled={!checked || selectedOption === ""}
          className={`w-full py-3 rounded-xl items-center ${
            !checked || selectedOption === "" ? "bg-gray-300" : "bg-blue-600"
          }`}
          onPress={() => {
            if (selectedOption === "Gopay") {
              setShowGopayPopup(true);
            } else {
              setShowPaymentSuccessModal(true);
            }
          }}
        >
          <Text
            className={`font-semibold ${
              !checked || selectedOption === "" ? "text-gray-400" : "text-white"
            }`}
          >
            Bayar Sekarang
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>

    {/* Modal Pop-up Gopay */}
    <Modal transparent visible={showGopayPopup} animationType="fade">
      <View className="flex-1 justify-center items-center bg-black/40 px-6">
        <View className="bg-white rounded-xl p-5 w-full">
          <Text className="text-center text-gray-700 mb-4">
            Akun Gopay mu belum terhubung nih.{"\n"}
            Untuk memudahkan pembayaran ke depan, silakan hubungkan terlebih dahulu akun Gopaymu dengan akun Riiliv ya.
          </Text>
          <View className="flex-row justify-between mt-2">
            <TouchableOpacity
              className="flex-1 bg-gray-100 py-2 rounded-xl mr-2"
              onPress={() => setShowGopayPopup(false)}
            >
              <Text className="text-center text-gray-600">Lewati</Text>
            </TouchableOpacity>
            <TouchableOpacity
              className="flex-1 bg-orange-400 py-2 rounded-xl ml-2"
              onPress={() => {
                setShowGopayPopup(false);
                setShowTerms(true);
              }}
            >
              <Text className="text-center text-white font-semibold">Hubungkan</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>

    {/* Modal Pembayaran Berhasil */}
    <Modal transparent visible={showPaymentSuccessModal} animationType="fade">
      <View className="flex-1 justify-center items-center bg-black/40 px-6">
        <View className="bg-white rounded-xl p-5 w-full items-center">
          <Text className="text-2xl font-bold text-green-600 mb-4">Pembayaran Berhasil!</Text>
          <Text className="text-center text-gray-700 mb-4">
            Pembayaran konseling instan Anda telah berhasil diproses. 
            Silakan bergabung ke sesi konseling melalui link di bawah ini.
          </Text>
          
          {/* Tombol Link Google Meet */}
          <TouchableOpacity 
            className="bg-blue-100 py-3 px-4 rounded-xl w-full flex-row items-center justify-center mb-4"
            onPress={handleOpenMeetLink}
          >
            <Link color="#007AFF" size={20} className="mr-2" />
            <Text className="text-blue-600 font-semibold">
              Bergabung ke Sesi Konseling
            </Text>
          </TouchableOpacity>

          {/* Tombol Salin Link */}
          <TouchableOpacity
            className="bg-gray-100 py-3 rounded-xl w-full items-center mb-4"
            onPress={() => {
              Clipboard.setString(googleMeetLink);
              alert("Link Google Meet berhasil disalin!");
            }}
          >
            <Text className="text-gray-700 font-semibold">Salin Link</Text>
          </TouchableOpacity>

          {/* Tombol Kembali */}
          <TouchableOpacity
            className="bg-blue-600 py-3 rounded-xl w-full items-center"
            onPress={() => {
              setShowPaymentSuccessModal(false);
              router.push('/konseling'); // Sesuaikan dengan rute yang benar
            }}
          >
            <Text className="text-white font-semibold">Kembali ke Beranda</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>

    {/* Modal Syarat dan Ketentuan */}
    <Modal transparent visible={showTerms} animationType="slide">
      <View className="flex-1 bg-white px-4 py-6">
        <ScrollView>
          <Text className="text-lg font-semibold text-center mb-4">Syarat Konseling</Text>
          <Text className="text-sm text-gray-700 mb-2">1. Sesi dimulai setelah konselor menyapa klien.</Text>
          <Text className="text-sm text-gray-700 mb-2">2. Saya tidak dalam kondisi krisis dan membutuhkan bantuan segera.</Text>
          <Text className="text-sm text-gray-700 mb-2">3. Saya akan menghargai dan menghormati konselor.</Text>
          <Text className="text-sm text-gray-700 mb-2">4. Saya bersedia menunggu konselor dalam waktu 10 menit sebelum menyatakan batal.</Text>
          <Text className="text-sm text-gray-700 mb-2">5. Sesi akan berakhir otomatis setelah 40 menit.</Text>
          <Text className="text-sm text-gray-700 mb-2">6. Saya setuju untuk tidak merekam jalannya sesi tanpa izin.</Text>
          <Text className="text-sm text-gray-700 mb-2">7. Saya memahami bahwa Riiliv tidak menyediakan diagnosa medis.</Text>

          <Text className="text-lg font-semibold text-center my-4">Ketentuan Konseling Instan</Text>
          <Text className="text-sm text-gray-700 mb-2">• Durasi sesi 40 menit.</Text>
          <Text className="text-sm text-gray-700 mb-2">• Batas waktu menunggu 10 menit.</Text>
          <Text className="text-sm text-gray-700 mb-2">• Pembatalan secara sepihak tidak bisa refund.</Text>
          <Text className="text-sm text-gray-700 mb-2">• Refund hanya jika konselor tidak hadir.</Text>
          <Text className="text-sm text-gray-700 mb-2">• Wajib selesaikan sesi sesuai jadwal.</Text>

          <TouchableOpacity
            className="mt-6 bg-blue-600 rounded-xl py-3"
            onPress={() => setShowTerms(false)}
          >
            <Text className="text-center text-white font-semibold">Saya Mengerti</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </Modal>
  </View>
);
}