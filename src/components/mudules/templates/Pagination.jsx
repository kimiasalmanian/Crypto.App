import { useState } from "react"


function Pagination() {
    const[page,setpage]=useState(1)

    const prvioshandler=() => {
        if (page<=1)return;
        setpage(page =>page - 1)
        
    }
    const nexthandler=() => {
        if (page>=10)return;
        setpage(page =>page + 1
    )}
  return (

    <div>
<button onClick={prvioshandler}>Pervios</button>
<p style={{color:page==1? "red":"inherit"}}>{1}</p>
<p style={{color:page==2?"red":"inherit"}}>{2}</p>
{page>2&&page<9&&(<>
     <span>...</span>
     <p style={{color:page==page?"red":"inherit"}}>{page}</p>
     </>) }
<p>...</p>
<p style={{color:page==9?"red":"inherit"}}>{9}</p>
<p style={{color:page==10?"red":"inherit"}}>{10}</p>
<button onClick={nexthandler}>Next</button>
    </div>
  )
}

export default Pagination