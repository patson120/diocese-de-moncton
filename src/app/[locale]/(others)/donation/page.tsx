import React from 'react'

export default function page() {
  return (
    <div className='relative overflow-x-hidden h-screen w-full'>
      <iframe 
        title='Donation form powered by Zeffy' 
        style={{ position: 'absolute', border: 0, top:0,left:0,bottom:0,right:0,width:'100%',height:'100%' }} 
        src='https://www.zeffy.com/embed/donation-form/archidiocese-de-moncton' allowTransparency={true}>
      </iframe>
    </div>
  )
}
