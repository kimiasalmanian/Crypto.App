import { useEffect, useState } from "react"
import { searchcoin } from "../../../services/Crypto Api"


function Search( {currency , setcurrency}) {

const[text,settext]=useState("")
const[coins,setcoins]=useState([])

useEffect (()=>{
    if (!text)return;
    const search = async () => {
    const res = await fetch(searchcoin(text))
    const json = await res.json();
    console.log(json)
    if (json.coins) setcoins(json.coins)
   
};
search();

},[text]);
  return (
    <div>
<input type="text" placeholder="Search"  value={text} onChange={(e)=>settext(e.target.value)} ></input>
<select value={currency} onChange={(e) => setcurrency(e.target.value)}>
    <option value="usd">USD</option>
    <option value="eur">EUR</option>
    <option value="jpy">JPY</option>
</select>

    </div>
)
}

export default Search