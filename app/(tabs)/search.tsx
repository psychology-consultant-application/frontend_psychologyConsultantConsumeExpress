// import React from "react";
// import { StyleSheet, Text, View, SafeAreaView } from "react-native";
// import { Stack } from "expo-router";
// import SearchBar from "@/components/SearchBar";
// import colors from "@/constants/Colors";
// import layout from "@/constants/layout";

// export default function SearchScreen() {
//   return (
//     <SafeAreaView style={styles.container}>
//       <Stack.Screen
//         options={{
//           headerShown: false,
//         }}
//       />
//       <View style={styles.content}>
//         <Text style={styles.title}>Search</Text>
//         <SearchBar placeholder="Search destinations, properties..." />
//         <View style={styles.emptyState}>
//           <Text style={styles.emptyStateText}>
//             Search for your next destination
//           </Text>
//         </View>
//       </View>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: colors.background.main,
//   },
//   content: {
//     flex: 1,
//     paddingHorizontal: layout.spacing.lg,
//     paddingTop: layout.spacing.lg,
//   },
//   title: {
//     fontSize: 28,
//     fontWeight: "700",
//     color: colors.text.primary,
//     marginBottom: layout.spacing.lg,
//   },
//   emptyState: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   emptyStateText: {
//     fontSize: 16,
//     color: colors.text.light,
//     textAlign: "center",
//   },
// });
