import { View, Text, StyleSheet, FlatList, Image, Pressable } from 'react-native';
import products from '../data/products';
import { useNavigation } from '@react-navigation/native';

const ProductScreen = () => {
  const navigation = useNavigation();
    return (
        <FlatList
        data={products}
        renderItem={({ item }) =>(
          <Pressable onPress={()=>(navigation.navigate('ProductDetails'))} style={styles.itemContainer}>
            <Image source={{ uri: item.image }} style={styles.image} /> 
          </Pressable>
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
