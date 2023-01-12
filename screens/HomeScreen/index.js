import { useEffect, useState } from 'react';
import { View } from 'react-native';
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
        console.log("HomeScreen is aangemaakt")
        fetchProducts();
    }, []);

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <b>Home Scherm</b>

            <div>
                {products.map(product => {
                    return <ProductComponent key={product.id} titel={product.title} prijs={product.prijs}></ProductComponent>
                })}
            </div>
        </View>
    );
}