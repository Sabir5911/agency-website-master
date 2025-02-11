
import { Input } from '@/components/ui/input'
import React from 'react'

export default function FormComponent({ text, placeHolder ,full=false}: { text: string, placeHolder: string,full:Boolean }) {
  return (
    <div className='flex flex-col justify-start '>
      <p>{text}</p>
      <Input placeholder={placeHolder} type="text" className={`w-auto   border-b-2` }/> {/* Adjusted width with responsive classes */}
    </div>
  )
}
