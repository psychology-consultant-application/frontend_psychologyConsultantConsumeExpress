import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { Search } from "lucide-react-native";
import colors from "@/constants/Colors";
import layout from "@/constants/layout";

interface SearchBarProps {
  placeholder?: string;
  onSearch?: (text: string) => void;
}

export default function SearchBar({
  placeholder = "Search your location",
  onSearch,
}: SearchBarProps) {
  const [searchText, setSearchText] = React.useState("");

  const handleChangeText = (text: string) => {
    setSearchText(text);
    if (onSearch) {
      onSearch(text);
    }
  };

  return (
    <View style={styles.container}>
      <Search size={18} color={colors.text.light} style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={colors.text.light}
        value={searchText}
        onChangeText={handleChangeText}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.background.secondary,
    borderRadius: layout.borderRadius.medium,
    paddingHorizontal: layout.spacing.md,
    paddingVertical: layout.spacing.sm,
    marginBottom: layout.spacing.lg,
  },
  icon: {
    marginRight: layout.spacing.sm,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: colors.text.primary,
  },
});
