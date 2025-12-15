import { useState } from "react";
function MenuItem({content}) {
    let [active, setActive] = useState(false);
  return (
    <>
      <a
        href="#"
        className= {"text-orange-500 font-bold px-1 pt-1 text-sm hover:text-orange-600 hover:border-b-2 border-orange-500 " + (active ? " text-orange-600 border-b-2" : "")}
        onClick={() => {setActive(!active)}}
      >
        {content}
      </a>
    </>
  );
}
export default MenuItem;
