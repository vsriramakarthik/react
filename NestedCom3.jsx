import React from 'react'

const Mango=()=>{
    return(<h2>praveen likes eating mangoes</h2>)
}
function Jackfruit(){
    return(
        <div>
            <h3>jackfruits are being liked by 652</h3>
        </div>
    )
}
export default function NestedCom3() {
  return (
    <div>
        <Mango></Mango>
        <Jackfruit/>
    </div>
  )
}
