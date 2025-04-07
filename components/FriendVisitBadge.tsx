import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import colors from "@/constants/Colors";
import layout from "@/constants/layout";

interface FriendVisitBadgeProps {
  count: number;
}

export default function FriendVisitBadge({ count }: FriendVisitBadgeProps) {
  // Mock friend avatars
  const avatars = [
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
  ];

  return (
    <View style={styles.container}>
      <View style={styles.avatarsContainer}>
        {avatars.slice(0, Math.min(3, count)).map((avatar, index) => (
          <Image
            key={index}
            source={{ uri: avatar }}
            style={[styles.avatar, { marginLeft: index > 0 ? -10 : 0 }]}
          />
        ))}
      </View>
      <Text style={styles.text}>{count} Friends Were Here</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.primary,
    borderRadius: layout.borderRadius.medium,
    paddingVertical: layout.spacing.sm,
    paddingHorizontal: layout.spacing.md,
  },
  avatarsContainer: {
    flexDirection: "row",
    marginRight: layout.spacing.sm,
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: colors.primary,
  },
  text: {
    color: colors.text.white,
    fontWeight: "500",
    fontSize: 14,
  },
});
