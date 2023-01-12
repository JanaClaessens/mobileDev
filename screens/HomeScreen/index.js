import { useEffect, useState } from 'react';
import { ScrollView, View } from 'react-native';
import ProductComponent from '../../components/ProductComponent';
import WordpressService from '../../services/WordpressService';

export default function HomeScreen() {
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
                    return <ProductComponent 
                                key={product.id}
                                titel={product.title}
                                prijs={product.prijs}
                                image={product.image}
                            ></ProductComponent>
                })}
            </ScrollView>
        </View>
    );
}