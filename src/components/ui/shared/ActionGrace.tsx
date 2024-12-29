'use client'
import Image from 'next/image'
import React from 'react'
import { Button } from './button'

 const ActionGrace = () => {
    return (
        <section className=' py-10 md:py-20 w-full bg-white'>
            <div className="container max-margin py-0">
                <div className='grid grid-cols-1 md:grid-cols-2 rounded-2xl overflow-hidden'>
                    <div className='h-72 bg-gray-200 relative'>
                        <Image
                            alt="Faire un don maintenant"
                            src="/assets/img/make-gift.png"
                            fill
                            style={{
                                objectFit: 'cover'
                            }}
                        />
                    </div>
                    <div className='bg-yellow100 px-4 md:px-8 py-10 flex flex-col justify-center items-start text-black space-y-8'>
                        <div>
                            <h1 className='heading-3 mb-2'>Soutenez notre mission</h1>
                            <p className="body-2">Contribuez à la vie de notre communauté en faisant un don en ligne. Chaque geste compte!</p>
                        </div>
                        <div className='w-full md:w-auto flex'>
                            <Button onClick={() => { }} className="md:py-2 body-2 min-w-full">
                                Faire un don maintenant
                            </Button>
                        </div>
                    </div>
                </div></div>
        </section>
    )
}
export default ActionGrace