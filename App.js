import React from "react";
import { FlatList, SafeAreaView, StyleSheet } from "react-native";
import Products from "./data/product";
import Header from "./components/Header";
import ProductItem from "./components/ProductItem/ProductItem";

export default function App() {
  const renderProducts = ({ item }) => {
    return <ProductItem item={item} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <FlatList
        data={Products}
        renderItem={renderProducts}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    margin: 10,
  },
});
