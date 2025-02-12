import React from 'react'

export default function Wrapper({children}:any) {
  return (
    <div className='max-w-screen-xl mx-auto' >
        {children}
    </div>
  )
}
