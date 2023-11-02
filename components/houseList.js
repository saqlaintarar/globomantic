import { useState } from "react";
import HouseRow from "./houseRow";

const houseArray = [
{
    id:1,
    address:"Eden city Sector A ,islamabad",
    country:"Pakistan",
    price:"500000",
},
{
    id:2,
    address: "DHA Sector B ,Lahore",
    country: "Pakistan",
    price: "24000000",

},
];

const HouseList = () => {

    const[houses, setHouses]=useState(houseArray);

        const addHouse = () => {
            setHouses ([
             ...houses, 
             {
                id:3,
                address:"Model Town ,Lahore",
                country:"Pakistan",
                price:"1000",
             },         
            ]);
    }
   
    
    return (
        <>
        
<div className="container">

    <div className="row mb-1">
        <h5 className="themeFontColor text-center">
            Houses currently on the Market
        </h5>
    </div>
    <table className="table table-hover">
        <thead>
            <tr>
                <th>Address</th>
                <th>Country</th>
                <th>Asking Price</th>
            </tr>
        </thead>
        <tbody>
{houses.map(h => <HouseRow key={h.id} house={h} />)}
        </tbody>
    </table>
    <div>
    <button className="btn btn-primary" onClick={addHouse}>
        Add
        </button>
        
    </div>

</div>

</>
    );
}
export default HouseList;