import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import { Star } from "lucide-react-native";
import { Property } from "@/types/property";
import colors from "@/constants/Colors";
import layout from "@/constants/layout";

interface FeaturedPropertyCardProps {
  property: Property;
}

export default function FeaturedPropertyCard({
  property,
}: FeaturedPropertyCardProps) {
  return (
    <Link href={`/property/${property.id}`} asChild>
      <TouchableOpacity style={styles.container}>
        <Image source={{ uri: property.image }} style={styles.image} />
        <View style={styles.content}>
          <View>
            <Text style={styles.name}>{property.name}</Text>
            <Text style={styles.location}>{property.location}</Text>
            <View style={styles.ratingContainer}>
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={14}
                  fill={i < property.rating ? colors.rating : "transparent"}
                  color={
                    i < property.rating ? colors.rating : colors.text.light
                  }
                />
              ))}
            </View>
          </View>
          {property.price && (
            <View style={styles.priceContainer}>
              <Text style={styles.price}>${property.price}</Text>
            </View>
          )}
        </View>
      </TouchableOpacity>
    </Link>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: colors.background.main,
    borderRadius: layout.borderRadius.medium,
    overflow: "hidden",
    marginBottom: layout.spacing.md,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 2,
  },
  image: {
    width: 100,
    height: 100,
    borderTopLeftRadius: layout.borderRadius.medium,
    borderBottomLeftRadius: layout.borderRadius.medium,
  },
  content: {
    flex: 1,
    padding: layout.spacing.md,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  name: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.text.primary,
    marginBottom: 4,
  },
  location: {
    fontSize: 12,
    color: colors.text.secondary,
    marginBottom: 6,
  },
  ratingContainer: {
    flexDirection: "row",
  },
  priceContainer: {
    backgroundColor: colors.secondary,
    paddingHorizontal: layout.spacing.sm,
    paddingVertical: layout.spacing.xs,
    borderRadius: layout.borderRadius.small,
  },
  price: {
    fontSize: 14,
    fontWeight: "600",
    color: colors.text.primary,
  },
});
