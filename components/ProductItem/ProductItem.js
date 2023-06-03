import { View, Text, Image } from "react-native";
import styles from "./ProductItem.style";

const ProductItem = ({ item }) => {
  return (
    <View style={styles.items}>
      <Image source={{ uri: item.imgURL }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.price}>{item.price}</Text>
        {!item.inStock && <Text style={styles.stock}>STOKTA YOK</Text>}
      </View>
    </View>
  );
};

export default ProductItem;
