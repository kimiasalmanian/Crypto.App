import styles from "./Pagination.module.css";


function Pagination({page,setpage}) {
    

    const prvioshandler=() => {
        if (page<=1)return;
        setpage(page =>page - 1)
        
    }
    const nexthandler=() => {
        if (page>=10)return;
        setpage(page =>page + 1
    )}
  return (

    <div className={styles.Pagination}>
<button onClick={prvioshandler} className={page==1?styles.disabled:null}>Pervios</button>
<p className={page==1 ? styles.selected : null}>{1}</p>
<p className={page==2 ? styles.selected : null}>{2}</p>
{page>2&&page<9&&(<>
     <span>...</span>
     <p className={page==page ? styles.selected : null}>{page}</p>
     </>) }
<span>...</span>
<p className={page==9 ? styles.selected : null}>{9}</p>
<p className={page==10 ? styles.selected : null}>{10}</p>
<button onClick={nexthandler}>Next</button>
    </div>
  )
}

export default Pagination