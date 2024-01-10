import { StyleSheet,View ,Text, Image, FlatList, useWindowDimensions, ScrollView, Pressable} from "react-native";
import { useSelector } from "react-redux";
// import products from "../data/products";

const ProductDetailsScreen = () => {
    const {height,width} = useWindowDimensions();
    // const product = products[0];
    const product = useSelector((state) => state.products.selectedProduct);

    const addToCart=()=>{
        console.warn("add to cart");
    }
    return (
       <View>
        <ScrollView>
            {/* Image Carousel */}
            <FlatList data={product.images} renderItem={({item})=>(
                <Image source={{uri: item}} style={{width , aspectRatio:1}}/>
            )} 
            horizontal
            // showsHorizontalScrollIndicator={true}
            pagingEnabled
            />
            <View style={{padding:20}}>
                {/* Title */}   
                <Text style={styles.title}>{product.name}</Text>

                {/* Price */}   
                <Text style={styles.price}>$ {product.price}</Text>

                {/* Description */}   
                <Text style={styles.description}>{product.description}</Text>
            </View>
        </ScrollView>

        {/* Add to cart button */}  
        <Pressable onPress={addToCart} style={styles.button}>
            <Text style={styles.buttonText}>Add to cart</Text>
        </Pressable>
        
       </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title:{
        fontSize: 34,
        fontWeight: '500',
        marginVertical: 10,
        color:'black'
    },
    price:{
        fontWeight: '500',
        fontSize: 20,
        letterSpacing: 1.5,
        color:'black'
    },
    description:{
        marginVertical: 10,
        fontSize: 19,
        lineHeight: 30,
        fontWeight: '300',
        color:'black'
    },
    button:{
        position: 'absolute',
        backgroundColor: 'black',
        bottom: 30,
        width: '90%',
        alignSelf: 'center',
        padding: 20,
        alignItems:'center',
        borderRadius: 100
    },
    buttonText:{
        color:'white',
        fontWeight:'500',
        fontSize: 16
    },
});

//make this component available to the app
export default ProductDetailsScreen;
