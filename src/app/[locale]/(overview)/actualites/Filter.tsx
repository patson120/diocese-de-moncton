"use client"

import { fetchCategories } from '@/_lib/data'
import { usePathname, useRouter } from '@/i18n/routing'
import { Category } from '@/types'
import { SlidersHorizontalIcon } from 'lucide-react'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function Filter({ categories, categorie_id }: { categories: Category[], categorie_id: number }) {

    const searchParams = useSearchParams()
    const pathname = usePathname()
    const { replace } = useRouter()

    categories = [
        {
            id: 0,
            parent_id: 0,
            intitule_fr: "Tous",
            intitule_en: "All",
            menu: "",
            created_at: "",
            updated_at: "",
        },
        ...categories
    ]
    const [seletedCategory, setSeletedCategory] = useState<Category>(categories[0])

    const handleChangedCategory = (cat: Category) => {
        setSeletedCategory(cat)
        handleFilter(cat)
    }

    useEffect(() => {
        if (categorie_id) { setSeletedCategory(categories.find((cat) => cat.id === categorie_id)!) }
    }, [categorie_id])

    const handleFilter = (cat: Category) => {
        const params = new URLSearchParams(searchParams)
        params.set('page', '1');
        if (cat.id) {
            params.set('categorie_id', `${cat.id}`)
        }
        else {
            params.delete('categorie_id')
        }

        replace(`${pathname}?${params.toString()}#actualite-une`)
    }

    return (
        <div className='flex flex-col md:flex-row justify-center items-center gap-4'>
            <div className='flex items-center space-x-2'>
                <SlidersHorizontalIcon className="h-4 w-5 text-gray-600" />
                <label className='text-sm font-bold whitespace-nowrap' htmlFor="filter">Filtrer les résultats</label>
            </div>
            <div className='flex items-center flex-wrap gap-2'>
                {
                    categories.map((category, index) => (
                        <label key={`${category.id}-${index}`} onClick={() => handleChangedCategory(category)} className={`text-sm p-[10px] rounded-xl cursor-pointer ${category.id === seletedCategory?.id ? "font-bold bg-[#1D0104] text-white" : "border border-gray-100"} `}>{category.intitule_fr}</label>
                    ))
                }
            </div>
        </div>
    )
}

// 