import { useEffect, useState } from "react"
import TablesCoin from "../TablesCoin"
import { getcoinlist } from "../../../services/Crypto Api";
import Pagination from "./Pagination";
import Search from "./Search";


function Homepage() {
 
const[page,setpage]=useState(1);
const[coins,setcoins]=useState([]);
const[isloding,setisloding]=useState(true);
const[currency,setcurrency]=useState("usd")


useEffect (() => {
  setisloding(true);

  fetch(getcoinlist(page , currency))
.then((res)=>res.json())
.then((json=>setcoins(json)))
.finally(()=>{setisloding(false)})}
,[page , currency]);


  return (

    <>
    <Search currency={currency} setcurrency={setcurrency}/>
    <TablesCoin coins={coins} isloding={isloding}/>
    <Pagination page={page} setpage={setpage}/>
    </>
  )
}

export default Homepage