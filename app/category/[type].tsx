import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { useLocalSearchParams, Stack, useRouter } from "expo-router";
import { ChevronLeft } from "lucide-react-native";
import { getPropertiesByType, categories } from "@/mocks/properties";
import FeaturedPropertyCard from "@/components/FeaturedPropertyCard";
import colors from "@/constants/Colors";
import layout from "@/constants/layout";

export default function CategoryScreen() {
  const { type } = useLocalSearchParams<{ type: string }>();
  const router = useRouter();

  const properties = getPropertiesByType(type as any);
  const category = categories.find((c) => c.type === type);

  if (!category) {
    return (
      <View style={styles.notFound}>
        <Text>Category not found</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />

      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <ChevronLeft size={24} color={colors.text.primary} />
        </TouchableOpacity>
        <Text style={styles.title}>{category.name}</Text>
        <View style={{ width: 40 }} />
      </View>

      {properties.length > 0 ? (
        <FlatList
          data={properties}
          renderItem={({ item }) => <FeaturedPropertyCard property={item} />}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.listContent}
        />
      ) : (
        <View style={styles.emptyState}>
          <Text style={styles.emptyStateText}>
            No properties found in this category
          </Text>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.main,
  },
  notFound: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: layout.spacing.lg,
    paddingVertical: layout.spacing.md,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.background.secondary,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    color: colors.text.primary,
  },
  listContent: {
    padding: layout.spacing.lg,
  },
  emptyState: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: layout.spacing.lg,
  },
  emptyStateText: {
    fontSize: 16,
    color: colors.text.light,
    textAlign: "center",
  },
});
