import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Platform,
} from "react-native";
import { useLocalSearchParams, Stack, useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { ChevronLeft, Heart, Search, Star } from "lucide-react-native";
import { useFavoritesStore } from "@/store/favorites";
import { getPropertyById } from "@/mocks/properties";
import FriendVisitBadge from "@/components/FriendVisitBadge";
import PropertyDetailTabs from "@/components/PropertyDetailTabs";
import colors from "@/constants/Colors";
import layout from "@/constants/layout";

export default function PropertyDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const { isFavorite, addFavorite, removeFavorite } = useFavoritesStore();

  const property = getPropertyById(id);

  if (!property) {
    return (
      <View style={styles.notFound}>
        <Text>Property not found</Text>
      </View>
    );
  }

  const toggleFavorite = () => {
    if (isFavorite(property.id)) {
      removeFavorite(property.id);
    } else {
      addFavorite(property.id);
    }
  };

  const tabs = [
    {
      key: "overview",
      title: "Overview",
      content: <Text style={styles.description}>{property.description}</Text>,
    },
    {
      key: "gallery",
      title: "Gallery",
      content: (
        <View>
          <Text style={styles.galleryText}>
            Photo gallery will be displayed here
          </Text>
        </View>
      ),
    },
    {
      key: "reviews",
      title: "Reviews",
      content: (
        <View>
          <Text style={styles.reviewsText}>Reviews will be displayed here</Text>
        </View>
      ),
    },
  ];

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />

      <View style={styles.imageContainer}>
        <Image source={{ uri: property.image }} style={styles.image} />
        <View style={styles.overlay} />

        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => router.back()}
          >
            <ChevronLeft size={24} color={colors.text.white} />
          </TouchableOpacity>

          <View style={styles.headerActions}>
            <TouchableOpacity
              style={styles.iconButton}
              onPress={toggleFavorite}
            >
              <Heart
                size={20}
                color={colors.text.white}
                fill={isFavorite(property.id) ? colors.primary : "transparent"}
              />
            </TouchableOpacity>

            <TouchableOpacity style={styles.iconButton}>
              <Search size={20} color={colors.text.white} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.propertyInfo}>
          <Text style={styles.propertyName}>{property.name}</Text>
          <Text style={styles.propertyLocation}>{property.location}</Text>

          <View style={styles.ratingContainer}>
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={16}
                fill={i < property.rating ? colors.rating : "transparent"}
                color={i < property.rating ? colors.rating : colors.text.light}
              />
            ))}
          </View>
        </View>
      </View>

      <View style={styles.content}>
        {property.friendsVisited && property.friendsVisited > 0 && (
          <View style={styles.friendsSection}>
            <FriendVisitBadge count={property.friendsVisited} />
          </View>
        )}

        <PropertyDetailTabs tabs={tabs} />
      </View>
    </View>
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
  imageContainer: {
    height: 350,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
  },
  header: {
    position: "absolute",
    top: Platform.OS === "ios" ? 50 : 30,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: layout.spacing.lg,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    justifyContent: "center",
    alignItems: "center",
  },
  headerActions: {
    flexDirection: "row",
  },
  iconButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: layout.spacing.sm,
  },
  propertyInfo: {
    position: "absolute",
    bottom: layout.spacing.lg,
    left: 0,
    right: 0,
    paddingHorizontal: layout.spacing.lg,
  },
  propertyName: {
    fontSize: 24,
    fontWeight: "700",
    color: colors.text.white,
    marginBottom: 4,
  },
  propertyLocation: {
    fontSize: 16,
    color: colors.text.white,
    opacity: 0.8,
    marginBottom: 8,
  },
  ratingContainer: {
    flexDirection: "row",
  },
  content: {
    flex: 1,
    backgroundColor: colors.background.main,
    borderTopLeftRadius: layout.borderRadius.large,
    borderTopRightRadius: layout.borderRadius.large,
    marginTop: -20,
    paddingHorizontal: layout.spacing.lg,
  },
  friendsSection: {
    marginTop: layout.spacing.lg,
    marginBottom: layout.spacing.md,
  },
  description: {
    fontSize: 14,
    lineHeight: 22,
    color: colors.text.secondary,
  },
  galleryText: {
    fontSize: 14,
    color: colors.text.secondary,
  },
  reviewsText: {
    fontSize: 14,
    color: colors.text.secondary,
  },
});
