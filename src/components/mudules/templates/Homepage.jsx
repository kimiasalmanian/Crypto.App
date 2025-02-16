import { useEffect, useState } from "react"
import TablesCoin from "../TablesCoin"
import { getcoinlist } from "../../../services/Crypto Api";


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
    <TablesCoin coins={coins} isloding={isloding}/>
  )
}

export default Homepage