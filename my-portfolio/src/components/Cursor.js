import React from 'react'

function Cursor({position}) {
    let style ={
        top: position.y,
        left:position.x
    }
  return (
    <>
        <div style={style} className="w-2 h-2 z-50 rounded-full bg-orange-500 fixed translate-x-2 translate-y-2"></div>
        <div style={style} className="w-4 h-4 z-50 border-4 border-orange-500 opacity-60 rounded-full fixed translate-x-1 translate-y-1 duration-100"></div>
        <div style={style} className="w-6 h-6 z-50 border-4 border-orange-500 opacity-30 rounded-full fixed duration-200"></div>
    </>
  )
}

export default Cursor
