// import React from "react";
// import {
//   StyleSheet,
//   Text,
//   View,
//   ScrollView,
//   FlatList,
//   SafeAreaView,
//   TouchableOpacity,
// } from "react-native";
// import { StatusBar } from "expo-status-bar";
// import { MoreHorizontal } from "lucide-react-native";
// import { Stack } from "expo-router";

// import SearchBar from "@/components/SearchBar";
// import CategoryCard from "@/components/CategoryCard";
// import SectionHeader from "@/components/SectionHeader";
// import FeaturedPropertyCard from "@/components/FeaturedPropertyCard";

// import { categories, featuredProperties } from "@/mocks/properties";
// import colors from "@/constants/Colors";
// import layout from "@/constants/layout";
// import "../../global.css";

// export default function DiscoverScreen() {
//   return (
//     <SafeAreaView style={styles.container}>
//       <StatusBar style="dark" />
//       <Stack.Screen
//         options={{
//           headerShown: false,
//         }}
//       />

//       <ScrollView
//         style={styles.scrollView}
//         showsVerticalScrollIndicator={false}
//       >
//         <View style={styles.header}>
//           <Text style={styles.title}>Discover</Text>
//           <TouchableOpacity>
//             <MoreHorizontal size={24} color={colors.text.primary} />
//           </TouchableOpacity>
//         </View>

//         <SearchBar />

//         <View style={styles.categoriesContainer}>
//           <FlatList
//             data={categories}
//             renderItem={({ item }) => <CategoryCard category={item} />}
//             keyExtractor={(item) => item.id}
//             numColumns={2}
//             columnWrapperStyle={styles.categoryRow}
//             scrollEnabled={false}
//           />
//         </View>

//         <View style={styles.featuredSection}>
//           <SectionHeader title="Featured" linkTo="/featured" />

//           {featuredProperties.map((property) => (
//             <FeaturedPropertyCard key={property.id} property={property} />
//           ))}
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: colors.background.main,
//   },
//   scrollView: {
//     flex: 1,
//     paddingHorizontal: layout.spacing.lg,
//   },
//   header: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     marginTop: layout.spacing.lg,
//     marginBottom: layout.spacing.lg,
//   },
//   title: {
//     fontSize: 28,
//     fontWeight: "700",
//     color: colors.text.primary,
//   },
//   categoriesContainer: {
//     marginBottom: layout.spacing.xl,
//   },
//   categoryRow: {
//     justifyContent: "space-between",
//   },
//   featuredSection: {
//     marginBottom: layout.spacing.xl,
//   },
// });