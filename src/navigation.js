import { NavigationContainer, useNavigation } from '@react-navigation/native';
import ProductDetailsScreen from './Screens/ProductDetailsScreen';
import ProductScreen from './Screens/ProductScreen';
import ShoppingCart from './Screens/ShoppingCart';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Pressable, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5'

const Stack = createNativeStackNavigator();
const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{contentStyle:{backgroundColor:'white'}}}>
                <Stack.Screen name="Products" component={ProductScreen}
                    options={({navigation}) => ({
                        headerRight: () =>
                        (<Pressable onPress={() => navigation.navigate("Cart")} style={{ flexDirection: 'row' }}>
                            <Icon name='shopping-cart' size={18} color='gray' />
                            <Text style={{ color: 'gray', marginLeft: 5, fontWeight: '500', fontSize: 15 }}>1</Text>
                        </Pressable>)
                    })}
                />
                <Stack.Screen name="ProductDetails" component={ProductDetailsScreen} options={{presentation: 'modal'}}/>
                <Stack.Screen name="Cart" component={ShoppingCart} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
export default Navigation;
