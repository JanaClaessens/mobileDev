import { View } from 'react-native';
import { DataTable, Text } from 'react-native-paper';
import CartService from '../../services/CartService';

export default function CartScreen() {
    let totaal = 0

    return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <DataTable>
            <DataTable.Header>
                <DataTable.Title>Naam</DataTable.Title>
                <DataTable.Title>Aantal</DataTable.Title>
                <DataTable.Title>Prijs</DataTable.Title>
            </DataTable.Header>
            {CartService.getItems().map(item => {
                let totaalItem = item.aantal * item.prijs
                totaal += totaalItem

                return (
                    <DataTable.Row key={item.naam}>
                        <DataTable.Cell>{item.naam}</DataTable.Cell>
                        <DataTable.Cell>{item.aantal}</DataTable.Cell>
                        <DataTable.Cell>€ {totaalItem.toFixed(2)}</DataTable.Cell>
                    </DataTable.Row>
                );
            })}
        </DataTable>
        <Text>Totaal: € {totaal.toFixed(2)}</Text>
    </View>
    );
}