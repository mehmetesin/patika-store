import { StyleSheet } from "react-native";

export default StyleSheet.create({
  items: {
    flex: 1,
    margin: 5,
    padding: 10,
    backgroundColor: "#eceff1",
    borderRadius: 10,
  },
  image: {
    borderRadius: 8,
    resizeMode: "contain",
    width: "100%",
    aspectRatio: 0.8,
  },
  info: {
    flex: 1,
    justifyContent: "space-between",
  },
  stock: {
    color: "red",
    fontSize: 16,
    fontWeight: "700",
  },
  title: {
    color: "#000",
    fontSize: 16,
    fontWeight: "700",
    marginVertical: 5,
  },
  price: {
    color: "#808080",
    fontSize: 16,
    fontWeight: "700",
  },
});
