import React from 'react'

export default function Wrapper({children}:any) {
  return (
    <div className='max-w-screen-xl mx-auto px-5' >
        {children}
    </div>
  )
}
