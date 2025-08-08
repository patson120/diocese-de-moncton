"use client"

import { fetchPageById } from '@/_lib/data'
import { HTMLContent } from '@/components/html-content'
import { LoadingSpinner } from '@/components/ui/loading-spinner'
import { Page } from '@/types'
import { useEffect, useState } from 'react'

export default function RenderPage({pageId}: { pageId: string }) {
    const [page, setPage] = useState<Page | null>(null)
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        ( async () =>{
            setIsLoading(true)
            try {
                const response: Page = await fetchPageById(`/${pageId}`)
                setPage(response)
            } catch (error) {
                console.log("Erreur", error)
            }
            finally { setIsLoading(false) }
        })()
    }, [pageId])
    
    return (
        <>
            {
                isLoading ?
                <div className='h-screen w-screen flex justify-center items-center'>
                    <div className='w-min flex flex-col gap-3'>
                        <div className='mx-auto'><LoadingSpinner /></div>
                        <p className='text-center text-gray'>Chargement...</p>
                    </div>
                </div> :
                <HTMLContent html={page?.contenu_html!} className={`w-full`} />
            }
        </>
    )
}
