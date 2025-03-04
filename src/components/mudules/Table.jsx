import {FadeLoader} from "react-spinners"

import chartup from "../../assets/chart-up.svg"
import chartdown from "../../assets/chart-down.svg"
import {marketchart} from "../../services/Crypto Api"

import styles from "./Table.module.css"

function Table({coin,isloding ,currency , setchart}) {

  const showhandler= async() =>{
  try {
    const res= await fetch(marketchart(coin.id))
    const json= await res.json()
  
    setchart({...json,coin:coin})
    
  } catch (error) {
    setchart(null)
    
  }
  
}

  return (
    <div className={styles.conteiner}> 
        {isloding ?(<FadeLoader
  color="#2f3ab6"
  width={3}
/>):
       ( <table className={styles.table}>
    <thead>
      <tr>
  <th>Coin</th>
  <th>Name</th>
  <th>Price</th>
  <th>24h</th>
  <th>Total valume</th>
  <th></th>
  </tr>
  
    </thead>
    <tbody>
   {coin.map(coin =><tr key={coin.id}>
    <td>
     <div className={styles.symbol} onClick={showhandler}>
      <img src={coin.image} alt=""/>
      <span>{coin.symbol.toUpperCase()}</span>
     </div>
    </td>
      <td>{coin.name}</td>
      <td>{currency ==="usd" ?"$" :currency ==="eur" ?"€" :currency ==="jpy" ?"¥":"?"}
         {coin.current_price}</td>
      <td className={coin.price_change_percentage_24h>0?styles.success :styles.error}>
      {coin.price_change_percentage_24h.toFixed(2)}%</td>
      <td>{coin.total_volume.toLocaleString()}</td>
      <td><img src={coin.price_change_percentage_24h
        <0?chartdown:chartup} alt={coin.name}/></td>
     </tr>)}
   </tbody>
  </table>)}
  </div>
  )
}

export default Table