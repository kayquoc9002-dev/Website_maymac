import { useState } from "react"
function PrePay( {background, image}) {
 let [active, setActive] = useState(false);

  
  return (
    <div>
      <div
          id="wayPay"
          className= {"w-12 h-12 rounded flex items-center justify-center text-[8px] font-bold b-r " + background + (active ? "border border-2 hover:border-none" : " hover:border hover:border-2")}
          onClick={() => {setActive(!active)}}>
          <img src= {image} alt="" class="p-1"/>
        </div>
    </div>
  )
}

export default PrePay
