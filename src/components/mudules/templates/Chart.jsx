import styles from "./Chart.module.css"

function Chart({setchart}) {

  const unshowhandler = () => {
 
    setchart(null)

  }
  return (
    <div className={styles.chart}>
  <button  onClick={unshowhandler}>X</button>

    </div>
  )
}

export default Chart