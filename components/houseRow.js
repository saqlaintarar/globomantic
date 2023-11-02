import CurrencyFormatter from "./helpers/currencyFormatter";
const HouseRow = ({ house }) =>{
    let priceTd;

    return (
<tr>
        <td>{house.address}</td>
        <td>{house.country}</td>
        <td className={`${house.price >= 1000 ? "text-primary" :""}`}>{CurrencyFormatter.format(house.price)}</td>
    </tr>

    );
}
export default HouseRow; 