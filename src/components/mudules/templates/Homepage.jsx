import { useEffect, useState } from "react"
import TablesCoin from "../TablesCoin"
import { getcoinlist } from "../../../services/Crypto Api";
import Pagination from "./Pagination";
import Search from "./Search";
import Chart from "./Chart";


function Homepage() {
 
const[page,setpage]=useState(1);
const[coins,setcoins]=useState([]);
const[isloding,setisloding]=useState(true);
const[currency,setcurrency]=useState("usd")
const[chart,setchart]=useState(null)

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
    <TablesCoin coins={coins} isloding={isloding} currency={currency}  setchart={setchart}/>
    <Pagination page={page} setpage={setpage}/>
   {!!chart &&<Chart chart={chart} setchart={setchart}/>}
    </>
  )
}

export default Homepage