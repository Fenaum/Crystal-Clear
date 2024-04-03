import { Image, TouchableOpacity } from "react-native";
import styles from "./screenheader.style";

const ScreenHeaderBtn = ({ iconURL, dimension, handlePress }) => {
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
      <Image
        source={iconURL}
        resizeMode="cover"
        style={styles.btnImg(dimension)}
      />
    </TouchableOpacity>
  );
};

export default ScreenHeaderBtn;
