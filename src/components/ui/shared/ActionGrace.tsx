import Image from 'next/image'
import React from 'react'
import { Button } from './button'
import { Link } from '@/i18n/routing'
import Text from '@/components/Text'

const ActionGrace = () => {
    return (
        <section className=' py-10 md:py-20 w-full bg-white'>
            <div className="container max-margin py-0">
                <div className='grid grid-cols-1 md:grid-cols-2 rounded-2xl overflow-hidden gap-4 md:gap-6 xl:gap-12 bg-yellow100'>
                    <div className='h-72 xl:h-80 bg-gray-200 relative'>
                        <Image
                            alt="Faire un don maintenant"
                            src="/assets/img/make-gift.png"
                            fill
                            style={{objectFit: 'cover'}}
                        />
                    </div>
                    <div className='px-4 md:px-8 py-10 flex flex-col justify-center items-start text-black space-y-8'>
                        <div>
                            <h1 className='heading-3 mb-2'>
                                <Text className='text-inherit' keyString="don_titre" />
                            </h1>
                            <p className="body-2 text-[#575757]">Contribuez à la vie de notre communauté en faisant un don en ligne. Chaque geste compte!</p>
                        </div>
                        <div className='w-full md:w-auto flex'>
                            <Link href="/faire-un-don">
                                <Button className="md:py-2 body-2 min-w-full">
                                    <Text className='text-inherit' keyString="don_titre" />
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div></div>
        </section>
    )
}
export default ActionGrace