import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import products from '../data/products';
const ProductScreen = () => {
    return (
        <FlatList
        data={products}
        renderItem={({ item }) =>(
          <View style={styles.itemContainer}>
            <Image source={{ uri: item.image }} style={styles.image} /> 
          </View>
        )}
        numColumns={2}
      />
    );
};
const styles = StyleSheet.create({
    itemContainer:{
      padding:1,
      width: '50%',
    },
    image: {
      width: "100%",
      aspectRatio: 1,
    }
  });
export default ProductScreen;
