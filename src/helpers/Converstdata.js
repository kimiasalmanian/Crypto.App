const converstdata=(data , type) =>{
const converstdata=data[type].map((item) =>{
return{
    data:item[0],
    [type]: item[1],

};
});
return converstdata;

};
export {converstdata};
