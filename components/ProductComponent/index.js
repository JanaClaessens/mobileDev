export default function ProductComponent({titel, prijs}) {
    return (
        <div>
            <b>{ titel }</b>
            <br/>
            <span>€ { prijs }</span>
        </div>
    );
}