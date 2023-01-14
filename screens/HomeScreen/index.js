import { useEffect, useState } from 'react';
import { ScrollView, View } from 'react-native';
import ProductCard from '../../components/ProductCard';
import WordpressService from '../../services/WordpressService';

export default function HomeScreen({navigation}) {
    const [products, setProducts] = useState([]);

    async function fetchProducts(){
        await WordpressService.login()
        let products = await WordpressService.getAllProducts()
        setProducts(products)
    }
    
    useEffect(() => {
        // Word in begin wanneer component geladen word aangeroepen
        fetchProducts();
    }, []);

    return (
        <View style={{ margin: 40 }}>
            <ScrollView>
                {products.map(product => {
                    return <ProductCard 
                                key={product.id}
                                id={product.id}
                                navigation={navigation}
                                title={product.title}
                                prijs={product.prijs}
                                image={product.image}
                            ></ProductCard>
                })}
            </ScrollView>
        </View>
    );
}