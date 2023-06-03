import { View, Text, TextInput } from "react-native";
import styles from "./Header.style";

const Header = () => {
  return (
    <View>
      <Text style={styles.logo}>PATIKASTORE</Text>
      <TextInput placeholder="Ara..." style={styles.search} />
    </View>
  );
};

export default Header;
