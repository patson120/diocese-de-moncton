import { Button } from '@/components/ui/shared/button'
import { Link } from '@/i18n/routing'
import { ChevronRight } from 'lucide-react'
import React from 'react'

export default function Mouvement({ mouvement }: { mouvement: any }) {
    return (
        <div key={mouvement.id} className='flex flex-col justify-between space-y-3 border rounded-xl p-3 md:p-6'>
            <div className='space-y-2'>
                <h1 className='heading-4 text-[#1D0104] font-bold'>{mouvement.title}</h1>
                <p className='body-2 text-gray line-clamp-3'>{mouvement.description}</p>
            </div>
            <div className='pt-4'>
                <Link href="#" className="">
                    <Button
                        variant="ghost"
                        className='font-medium border-[#1D0104] rounded-[8px] p-0'
                    >
                        <div className='flex justify-center items-center'>
                            <span className='font-bold'>En savoir plus</span>
                            <ChevronRight className="ml-1 h-5 w-5" />
                        </div>
                    </Button>
                </Link>
            </div>
        </div>
    )
}
