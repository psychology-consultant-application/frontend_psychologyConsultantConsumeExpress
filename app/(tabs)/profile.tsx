// import React from "react";
// import { StyleSheet, Text, View, SafeAreaView } from "react-native";
// import { Stack } from "expo-router";
// import colors from "@/constants/Colors";
// import layout from "@/constants/layout";

// export default function ProfileScreen() {
//   return (
//     <SafeAreaView style={styles.container}>
//       <Stack.Screen
//         options={{
//           headerShown: false,
//         }}
//       />
//       <View style={styles.content}>
//         <Text style={styles.title}>Profile</Text>
//         <View style={styles.emptyState}>
//           <Text style={styles.emptyStateText}>
//             Profile information will be displayed here
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
