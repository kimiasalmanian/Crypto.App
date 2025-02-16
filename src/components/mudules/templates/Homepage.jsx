import { useEffect, useState } from "react"
import TablesCoin from "../TablesCoin"
import { getcoinlist } from "../../../services/Crypto Api";


function Homepage() {
const[coins,setcoins]=useState([]);
useEffect (() => {
  fetch(getcoinlist())
.then((res)=>res.json())
.then((json=>setcoins(json)))},[]);

  return (
    <TablesCoin coins={coins}/>
  )
}

export default Homepage