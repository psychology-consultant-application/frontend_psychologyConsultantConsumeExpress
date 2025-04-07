import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import colors from "@/constants/Colors";
import layout from "@/constants/layout";

interface Tab {
  key: string;
  title: string;
  content: React.ReactNode;
}

interface PropertyDetailTabsProps {
  tabs: Tab[];
}

export default function PropertyDetailTabs({ tabs }: PropertyDetailTabsProps) {
  const [activeTab, setActiveTab] = useState(tabs[0].key);

  return (
    <View style={styles.container}>
      <View style={styles.tabsContainer}>
        {tabs.map((tab) => (
          <TouchableOpacity
            key={tab.key}
            style={[
              styles.tabButton,
              activeTab === tab.key && styles.activeTabButton,
            ]}
            onPress={() => setActiveTab(tab.key)}
          >
            <Text
              style={[
                styles.tabButtonText,
                activeTab === tab.key && styles.activeTabButtonText,
              ]}
            >
              {tab.title}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.contentContainer}>
        {tabs.find((tab) => tab.key === activeTab)?.content}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabsContainer: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  tabButton: {
    flex: 1,
    paddingVertical: layout.spacing.md,
    alignItems: "center",
  },
  activeTabButton: {
    borderBottomWidth: 2,
    borderBottomColor: colors.primary,
  },
  tabButtonText: {
    fontSize: 14,
    fontWeight: "500",
    color: colors.text.light,
  },
  activeTabButtonText: {
    color: colors.text.primary,
  },
  contentContainer: {
    paddingVertical: layout.spacing.md,
  },
});
