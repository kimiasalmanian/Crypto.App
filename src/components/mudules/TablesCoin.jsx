
import Table from "./Table";


function TablesCoin({ coins,isloding,currency ,setchart}) {
  return (

<div>
 
 <Table coin={coins} isloding={isloding} currency={currency}  setchart={setchart}/>

</div>
  )}

export default TablesCoin