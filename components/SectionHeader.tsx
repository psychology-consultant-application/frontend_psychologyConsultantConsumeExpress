import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { ChevronRight } from "lucide-react-native";
import { Link } from "expo-router";
import colors from "@/constants/Colors";
import layout from "@/constants/layout";

interface SectionHeaderProps {
  title: string;
  linkTo?: string;
}

export default function SectionHeader({ title, linkTo }: SectionHeaderProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {linkTo && (
        <Link href={linkTo as any} asChild>
          <TouchableOpacity style={styles.viewAll}>
            <Text style={styles.viewAllText}>View all</Text>
            <ChevronRight size={16} color={colors.text.light} />
          </TouchableOpacity>
        </Link>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: layout.spacing.md,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    color: colors.text.primary,
  },
  viewAll: {
    flexDirection: "row",
    alignItems: "center",
  },
  viewAllText: {
    fontSize: 14,
    color: colors.text.light,
    marginRight: 4,
  },
});
