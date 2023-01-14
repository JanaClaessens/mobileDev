import { View } from 'react-native';
import { DataTable, Button } from 'react-native-paper';
import SavedItemsService from '../../services/SavedItemsService';

export default function SavedItemsScreen({navigation}) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <DataTable>
                <DataTable.Header>
                    <DataTable.Title>Naam</DataTable.Title>
                    <DataTable.Title>Prijs</DataTable.Title>
                    <DataTable.Title></DataTable.Title>
                </DataTable.Header>
                {SavedItemsService.getItems().map(item => {
                    return (
                        <DataTable.Row key={item.naam}>
                            <DataTable.Cell>{item.naam}</DataTable.Cell>
                            <DataTable.Cell>€ {item.prijs}</DataTable.Cell>
                            <DataTable.Cell>
                                <Button onPress={_ => {
                                    navigation.push('Product', {
                                        productId: item.id,
                                    })
                                }}>Ga naar product</Button>
                            </DataTable.Cell>
                        </DataTable.Row>
                    );
                })}
            </DataTable>
        </View>
    );
}