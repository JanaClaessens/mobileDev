import { useState, useEffect } from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import { useWindowDimensions } from 'react-native';
import RenderHtml from 'react-native-render-html';
import WordpressService from '../../services/WordpressService';

export default function ProductScreen({route}) {
    let productId = route.params.productId;
    const [product, setProduct] = useState({content: ""});
    const { width } = useWindowDimensions();

    async function fetchProducts(){
        await WordpressService.login()
        let products = await WordpressService.getProductById(productId)
        setProduct(products)
    }

    useEffect(() => {
        // Word in begin wanneer component geladen word aangeroepen
        fetchProducts();
    }, []);

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <RenderHtml
                    contentWidth={width}
                    source={{html: product.content}}
                />
        </View>
    );
}