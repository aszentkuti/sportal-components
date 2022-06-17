import React, { useState } from 'react'
import DropDown from './DropDown'

function MenuItem({item}) {
  const [isHovering, setIsHovering] = useState(false);
  const dropdown = item.children ? <DropDown items={item.children} show={isHovering}/> : false;
  return (
    <div onMouseEnter={()=>setIsHovering(true)} onMouseLeave={()=>setIsHovering(false)} className="self-center relative flex">
      <a className="text-white font-bold text-sm px-3 py-4 hover:bg-brand-red transition-colors duration-300 uppercase tracking-[1px]" href={item.url}>
        {item.text}
        </a>
       {dropdown && dropdown}
    </div>
  )
}

export default MenuItem