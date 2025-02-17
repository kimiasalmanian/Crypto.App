import { useEffect, useState } from "react"
import TablesCoin from "../TablesCoin"
import { getcoinlist } from "../../../services/Crypto Api";
import Pagination from "./Pagination";


function Homepage() {
 
const[page,setpage]=useState(1)
const[coins,setcoins]=useState([]);
const[isloding,setisloding]=useState(true)
useEffect (() => {
  setisloding(true);
  fetch(getcoinlist(page))
.then((res)=>res.json())
.then((json=>setcoins(json)))
.finally(()=>{setisloding(false)})}
,[page]);


  return (

    <>
    
    <TablesCoin coins={coins} isloding={isloding}/>
    <Pagination page={page} setpage={setpage}/>
    </>
  )
}

export default Homepage