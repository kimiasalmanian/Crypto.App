import { useEffect, useState } from "react"
import { searchcoin } from "../../../services/Crypto Api"
import {FadeLoader} from "react-spinners"

import styles from "./search.module.css"

function Search( {currency , setcurrency}) {

const[text,settext]=useState("");
const[coins,setcoins]=useState([]);
const[isloding,setisloding]=useState(false);

useEffect (()=>{
    const controller= new AbortController();
    setcoins([]);
    if (!text) {setisloding(false)
        return;}
    const search = async () => {
        try { 
        
        const res = await fetch(searchcoin(text),{signal:controller.signal})
        const json = await res.json();
        
        if (json.coins) 
            {setisloding(false);
            setcoins(json.coins)}
            
            else{alert(json.status.error_message)}
           
        } catch (error) {
            if (error.name !== "AbortError")
         {alert(error.message);

         }

            
        }
   
   
};

setisloding(true);
search();
return () => controller.abort();

},[text]);
  return (
    <div className={styles.searchbox}>
<input type="text" placeholder="Search"  value={text} onChange={(e)=>settext(e.target.value)} ></input>
<select value={currency} onChange={(e) => setcurrency(e.target.value)}>
    <option value="usd">USD</option>
    <option value="eur">EUR</option>
    <option value="jpy">JPY</option>
</select>
{(!!coins.length || isloding ) && (<div
 className={styles.searchresult}>
{isloding && <FadeLoader
  
  color="#2f3ab6"
  width={3}
/>}
<ul>
   {coins.map((coin 
    )=> <li key={coin.id} >
        <img src={coin.thumb} alt={coin.name}/>
        <p>{coin.name}</p>
    </li>) }
</ul>

</div>)}


    </div>
)
}

export default Search