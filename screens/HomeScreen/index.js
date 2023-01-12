import { View } from 'react-native';
import WordpressService from '../../services/WordpressService';

async function testService(){
    await WordpressService.login()
    let products = await WordpressService.getAllProducts()
    console.log(products)

    let product = await WordpressService.getProductById(75)
    console.log(product)
}

testService()

export default function HomeScreen() {
    return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <b>Home Scherm</b>
        <div>
            <div>Product 1</div>
            <div>Product 2</div>
            <div>Product 3</div>
        </div>
    </View>
    );
}