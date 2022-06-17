import React from 'react'

function DropDown({items, show}) {
  return (
    show &&
    <div className="animate-fade-in absolute grid grid-cols-2 w-[300px] bg-white shadow-md shadow-slate-300 bottom-0 left-0 translate-y-full">
        {items.map(item=> <a className="flex font-bold text-sm px-3 py-3 self-center hover:text-brand-red hover:bg-[#ebe3e7] transition-colors duration-300 uppercase" href={item.url}>{item.text}</a>)}
    </div>
  )
}

export default DropDown