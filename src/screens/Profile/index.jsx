import { Text, View, Image } from "react-native";

import styles from "./styles";
import Title from "../../components/Title";
import TouchButton from "../../components/TouchButton";

export default function Profile({ route }) {
  const { data } = route.params;
  const foto = data.foto;

  return (
    <View style={styles.container}>
      <Title title="Profile" />

      <TouchButton route="Home" title="Go to Home" />

      <TouchButton route="Category" title="Go to Category" />

      <View style={styles.user}>
        <Title title={data.name} />
        <Text style={styles.text}>{data.email}</Text>
      </View>
    </View>
  );
}
