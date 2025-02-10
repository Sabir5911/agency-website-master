import React from 'react'

export default function Wrapper({children}:any) {
  return (
    <div className='mx-auto ' >
        {children}
    </div>
  )
}
