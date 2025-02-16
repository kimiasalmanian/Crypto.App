import { useEffect, useState } from "react"
import TablesCoin from "../TablesCoin"
import { getcoinlist } from "../../../services/Crypto Api";
import Pagination from "./Pagination";


function Homepage() {
const[coins,setcoins]=useState([]);
const[isloding,setisloding]=useState(true)
useEffect (() => {
  fetch(getcoinlist())
.then((res)=>res.json())
.then((json=>setcoins(json)))
setisloding(false)}
,[]);


  return (

    <>
    <Pagination/>
    <TablesCoin coins={coins} isloding={isloding}/>
    </>
  )
}

export default Homepage