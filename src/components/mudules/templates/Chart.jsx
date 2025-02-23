import { useState } from "react"
import styles from "./Chart.module.css"
import { converstdata } from "../../../helpers/Converstdata"
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

function Chart({chart,setchart}) {
  console.log(chart)

  const [type,settype]=useState("prices")

  const typehandler=(event) =>{
    if (event.target.tagName ==="BUTTON"){
      const type = event.target.innerText.toLowerCase().replace(" ","_");
      settype(type)
    };
  };

  
  const unshowhandler = () => {
   setchart(null)
  

  }
  return (
    <div className={styles.container}>
  <button  onClick={unshowhandler} className={styles.cbutton}>X</button>
  <div className={styles.chart}>
  <div className={styles.graph}>
    <ChartComponent data={converstdata(chart,type)} type={type}/>
  </div>
  <div className={styles.type} onClick={typehandler}>
    <button className={type==="prices"? styles.selected:null}>Prices</button>
    <button className={type==="market_caps"? styles.selected:null} >Market Cops</button>
    <button className={type==="total_volumes"? styles.selected:null}>Total Volumes</button>
  </div>

  </div>

    </div>
  )
}

export default Chart

const ChartComponent =({data , type}) =>{
  return(
<ResponsiveContainer width="100%" height="100%">
<LineChart width={400} height={400} data={data}>
<Line 
type="monotone"
dataKey={type}
stroke="#3874ff"
strokeWidth="2px"
/>
<CartesianGrid stroke="#bbbbbd" />
<YAxis dataKey={type} domain={["auto","auto"]}/>
<XAxis dataKey="data" hide/>
<Legend/>
<Tooltip/>
</LineChart>
</ResponsiveContainer>

  );
};