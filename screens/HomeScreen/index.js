import { useEffect, useState } from 'react';
import { ScrollView, View, Text } from 'react-native';
import { TextInput } from 'react-native-paper';
import DropDownPicker from 'react-native-dropdown-picker';
import ProductCard from '../../components/ProductCard';
import WordpressService from '../../services/WordpressService';

export default function HomeScreen({navigation}) {
    const [products, setProducts] = useState([]);
    const [zoekterm, setZoekterm] = useState("");
    const [dropDownOpen, setDropDownOpen] = useState(false);
    const [dropDownValue, setDropDownValue] = useState('az-up');
    const [dropDownItems, setDropDownItems] = useState([
        {label: 'Prijs ⬆', value: 'prijs-up'},
        {label: 'Prijs ⬇', value: 'prijs-down'},
        {label: 'A-Z ⬆', value: 'az-up'},
        {label: 'A-Z ⬇', value: 'az-down'},
    ]);

    async function fetchProducts(){
        await WordpressService.login()
        let products = await WordpressService.getAllProducts()
        setProducts(products)
    }
    
    useEffect(() => {
        // Word in begin wanneer component geladen word aangeroepen
        fetchProducts();
    }, []);

    function filterProducts(product){
        let lowerCase = product.title.toLowerCase()
        if(lowerCase.includes(zoekterm.toLowerCase())){
            return true
        }else{
            return false
        }
    }

    function sortProducts(product1, product2){
        if(dropDownValue == "prijs-down"){
            return product2.prijs - product1.prijs
        }else if(dropDownValue == "prijs-up"){
            return product1.prijs - product2.prijs
        }

        if(dropDownValue == "az-up"){
            return product2.title.localeCompare(product1.title)
        }else if(dropDownValue == "az-down"){
            return product1.title.localeCompare(product2.title)
        }
    }

    return (
        <View style={{ margin: 40 }}>
            <ScrollView>
                <TextInput
                    value={zoekterm}
                    onChangeText={text => setZoekterm(text)}
                    left={<TextInput.Icon icon="magnify" />}
                />
                <Text>Sorteren</Text>
                <DropDownPicker
                    open={dropDownOpen}
                    value={dropDownValue}
                    items={dropDownItems}
                    setOpen={setDropDownOpen}
                    setValue={setDropDownValue}
                    setItems={setDropDownItems}
                />
                {products.sort(sortProducts).filter(filterProducts).map(product => {
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