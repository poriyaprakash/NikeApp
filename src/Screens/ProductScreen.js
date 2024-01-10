import { View, Text, StyleSheet, FlatList, Image, Pressable } from 'react-native';
// import products from '../data/products';
import { useNavigation } from '@react-navigation/native';
import {useSelector,useDispatch} from 'react-redux';
import { productSlice } from '../store/productSlice';

const ProductScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products)
    return (
        <FlatList
        data={products}
        renderItem={({ item }) =>(
          <Pressable onPress={()=>{
            dispatch(productSlice.actions.setSelectedProduct(item.id));
            navigation.navigate('ProductDetails')
            }} 
            style={styles.itemContainer}>
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
