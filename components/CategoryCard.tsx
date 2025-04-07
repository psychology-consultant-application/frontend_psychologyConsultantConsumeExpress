import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import { Category } from '@/types/property';
import colors from '@/constants/Colors';
import layout from '@/constants/layout';

interface CategoryCardProps {
  category: Category;
}

export default function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link href={`/category/${category.type}`} asChild>
      <TouchableOpacity style={styles.container}>
        <Image source={{ uri: category.image }} style={styles.image} />
        <View style={styles.overlay} />
        <View style={styles.content}>
          <Text style={styles.title}>{category.name}</Text>
          <Text style={styles.count}>{category.count.toLocaleString()} options</Text>
        </View>
      </TouchableOpacity>
    </Link>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 120,
    borderRadius: layout.borderRadius.medium,
    overflow: 'hidden',
    marginBottom: layout.spacing.md,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
  content: {
    position: 'absolute',
    bottom: layout.spacing.sm,
    left: layout.spacing.sm,
  },
  title: {
    color: colors.text.white,
    fontSize: 16,
    fontWeight: '600',
  },
  count: {
    color: colors.text.white,
    fontSize: 12,
    opacity: 0.8,
  },
});