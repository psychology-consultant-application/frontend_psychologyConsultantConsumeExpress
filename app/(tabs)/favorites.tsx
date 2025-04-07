// import React from "react";
// import { StyleSheet, Text, View, FlatList, SafeAreaView } from "react-native";
// import { Stack } from "expo-router";
// import FeaturedPropertyCard from "@/components/FeaturedPropertyCard";
// import { useFavoritesStore } from "@/store/favorites";
// import { properties } from "@/mocks/properties";
// import colors from "@/constants/Colors";
// import layout from "@/constants/layout";

// export default function FavoritesScreen() {
//   const { favorites } = useFavoritesStore();

//   const favoriteProperties = properties.filter((property) =>
//     favorites.includes(property.id)
//   );

//   return (
//     <SafeAreaView style={styles.container}>
//       <Stack.Screen
//         options={{
//           headerShown: false,
//         }}
//       />
//       <View style={styles.content}>
//         <Text style={styles.title}>Favorites</Text>

//         {favoriteProperties.length > 0 ? (
//           <FlatList
//             data={favoriteProperties}
//             renderItem={({ item }) => <FeaturedPropertyCard property={item} />}
//             keyExtractor={(item) => item.id}
//             contentContainerStyle={styles.listContent}
//           />
//         ) : (
//           <View style={styles.emptyState}>
//             <Text style={styles.emptyStateText}>
//               You haven't saved any properties yet
//             </Text>
//           </View>
//         )}
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
//   listContent: {
//     paddingBottom: layout.spacing.xl,
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
