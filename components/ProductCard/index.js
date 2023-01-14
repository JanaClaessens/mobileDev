import { useState } from 'react';
import { Button, Card, Snackbar, Text } from 'react-native-paper';
import CartService from '../../services/CartService';
import SavedItemsService from '../../services/SavedItemsService';

export default function ProductCard({navigation, id, title, prijs, image}) {
    const [snackbarVisible, setSnackbarVisible] = useState(false)

    function navigateToProduct() {
        navigation.push('Product', {
            productId: id,
        })
    }

    function addToCart(){
        CartService.addProduct(title, prijs)
        setSnackbarVisible(true)
        setTimeout(_ => {
            setSnackbarVisible(false)
        }, 1000)
    }

    function addToSavedItems(){
        SavedItemsService.addProduct(id, title, prijs)
        setSnackbarVisible(true)
        setTimeout(_ => {
            setSnackbarVisible(false)
        }, 1000)
    }

    return (
        <Card onPress={navigateToProduct} style={{margin: 10}}>
            <Card.Title title={title}/>
            <Card.Cover source={{ uri: image }} resizeMode={'contain'} />
            <Card.Actions>
                <Text variant="labelLarge" style={{marginTop: 80}}>€ { prijs }</Text>
                <Button onPress={addToCart}>🛒</Button>
                <Button onPress={addToSavedItems}>⭐</Button>
            </Card.Actions>
            <Snackbar
                visible={snackbarVisible}
            >
                    Toegevoegd!
            </Snackbar>
        </Card>
    )
}