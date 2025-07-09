'use client'

import { usePathname, useRouter } from "@/i18n/routing"
import { Search } from "lucide-react"
import { useTranslations } from "next-intl"
import { useSearchParams } from "next/navigation"
import { ChangeEvent } from "react"
import { useDebouncedCallback } from "use-debounce"


export default function SearchBar({ placeholder }: { placeholder: string }) {
    const searchParams = useSearchParams()
    const pathname = usePathname()
    const { replace } = useRouter()

    const t = useTranslations("app")

    const handleSearch = useDebouncedCallback((event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value
        const params = new URLSearchParams(searchParams)
        params.set('page', '1');

        if (value) {
            params.set('query', value)
        }
        else {
            params.delete('query')
        }
        replace(`${pathname}?${params.toString()}`)
    }, 800)

    return (
        <div className='flex justify-center items-center gap-2'>
            <div className='w-full md:w-3/4 lg:w-1/2 relative'>
                <input type="text" 
                    placeholder={t(placeholder)}
                    onChange={handleSearch}
                    defaultValue={searchParams.get('query')?.toString()}
                    className="w-full block flex-1 border border-gray-100 rounded-lg pl-3 pr-14 py-3
                    text-gray-900 ring-1 ring-inset ring-gray-50 placeholder:text-gray-400
                    placeholder:text-sm sm:text-sm sm:leading-6 outline-none"/>
                <Search className="h-7 w-7 text-gray-300 absolute top-3 right-4 cursor-pointer" />
            </div>
        </div>
    )
}

