
'use client'

import Text from "@/components/Text";
import { usePathname, useRouter } from "@/i18n/routing";
import { Category } from "@/types"
import { useSearchParams } from "next/navigation";
import { ChangeEvent } from "react";

export const Filter = ({ categories }: { categories: Category[] }) => {

    const searchParams = useSearchParams()
    const pathname = usePathname()
    const { replace } = useRouter()

    const handleUpdateCategory = (e: ChangeEvent<HTMLSelectElement>) => {
        const cat_id = e.target.value
        const params = new URLSearchParams(searchParams)
        params.set('page', '1');
        if (cat_id) {
            params.set('categorie_id', `${cat_id}`)
        }
        else {
            params.delete('categorie_id')
        }
        replace(`${pathname}?${params.toString()}`)
    }

    const handleUpdateDate = (e: ChangeEvent<HTMLInputElement>) => {
        const month = Number(e.target.value.split('-')[1]);
        const params = new URLSearchParams(searchParams)
        params.set('page', '1');
        if (month) {
            params.set('month', `${month}`)
        }
        else {
            params.delete('month')
        }
        replace(`${pathname}?${params.toString()}`)
    }

    return (
        <div className='flex justify-center items-center gap-2'>
            <div className='flex items-center space-x-2 lg:w-[90%]'>
                <h5 className='text-sm font-bold whitespace-nowrap'>
                    <Text className="text-inherit" keyString="filtrer_par" />
                </h5>
                <div className="border border-gray-100 rounded-lg w-full">
                    <input
                        onChange={handleUpdateDate} type="month" 
                        name="month" id="month"
                        className="px-3 h-9 w-full rounded-lg" 
                        defaultValue={searchParams.get('month')?.toString()}
                        />
                </div>
                {/* <select id="mois" name="mois" className="border border-gray-100 outline-primary outline-offset-1 px-3 py-2 rounded-lg w-full">
                    <option value="" disabled>Par mois</option>
                    <option value="janvier">Janvier</option>
                    <option value="fevrier">Février</option>
                    <option value="mars">Mars</option>
                    <option value="avril">Avril</option>
                    <option value="mai">Mai</option>
                    <option value="juin">Juin</option>
                    <option value="juillet">Juillet</option>
                    <option value="aout">Août</option>
                    <option value="septembre">Septembre</option>
                    <option value="actobre">Octobre</option>
                    <option value="novembre">Novembre</option>
                    <option value="decembre">Décembre</option>

                </select> */}
                <select onChange={handleUpdateCategory} id="categorie" name="categorie" className="border border-gray-100 outline-primary outline-offset-1 px-3 py-2 rounded-lg w-full">
                    <option value="" disabled>Par catégorie
                        <Text className="text-inherit" keyString="par_categorie" />
                    </option>
                    {
                        categories.map((category, index) => (
                            <option key={index} value={category.id}>{category.intitule_fr}</option>
                        ))
                    }
                </select>

            </div>

        </div>
    )
}