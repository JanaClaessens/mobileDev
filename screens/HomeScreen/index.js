import { View } from 'react-native';
import WordpressService from '../../services/WordpressService';
WordpressService.login()

export default function HomeScreen() {
    return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <b>Home Scherm</b>
    </View>
    );
}