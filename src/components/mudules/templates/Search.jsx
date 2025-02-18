import { useEffect, useState } from "react"
import { searchcoin } from "../../../services/Crypto Api"


function Search( {currency , setcurrency}) {

const[text,settext]=useState("")
const[coins,setcoins]=useState([])

useEffect (()=>{
    const controller= new AbortController();
    if (!text)return;
    const search = async () => {
        try { 
        
         const res = await fetch(searchcoin(text),{signal:controller.signal})
        const json = await res.json();
        console.log(json);
        if (json.coins) setcoins(json.coins)
            else{alert(json.status.error_message)}
           
        } catch (error) {
            if (error.name !== "AbortError")
         {alert(error.message);
            
         }

            
        }
   
   
};
search();
return () => controller.abort();

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