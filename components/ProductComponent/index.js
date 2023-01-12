import { Avatar, Button, Card, Text } from 'react-native-paper';


export default function ProductComponent({titel, prijs, image}) {
    return (
        <Card onPress={() => console.log('pressed')} style={{marginBottom: "40px"}}>
            <Card.Title title={titel}/>
            <Card.Cover source={{ uri: image }} />
            <Card.Content style={{marginTop: "10px"}}>
                <span>€ { prijs }</span>
            </Card.Content>
        </Card>
    )
}