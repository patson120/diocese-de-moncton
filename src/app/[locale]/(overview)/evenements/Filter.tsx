'use client'

import Text from "@/components/Text";
import { Button } from "@/components/ui/shared/button";
import { usePathname, useRouter } from "@/i18n/routing";
import { Category } from "@/types"
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { ChangeEvent, useEffect, useState } from "react";

export const Filter = ({ categories }: { categories: Category[] }) => {
    const searchParams = useSearchParams()
    const pathname = usePathname()
    const { replace } = useRouter()

    const [currentMonth, setCurrentMonth] = useState(0)

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
        setCurrentMonth(month)
        replace(`${pathname}?${params.toString()}`)
    }

    useEffect(() => {
        setCurrentMonth(Number(searchParams.get('month')))
    }, [])
    
    const handleChangeMonth = (val: number) => {
        const params = new URLSearchParams(searchParams)
        params.set('page', '1');
        if (val > 0 && currentMonth < 12){
            params.set('month', `${currentMonth+val}`)
            setCurrentMonth(currentMonth+val)
        }
        else if (val > 0 && currentMonth === 12){
            params.set('month', `1`)
            setCurrentMonth(1)
        }
        
        if (val < 0 && currentMonth > 1) {
            params.set('month', `${currentMonth+val}`)
            setCurrentMonth(currentMonth+val)     
        }
        else if (val < 0 && currentMonth === 1){
            params.set('month', `12`)
            setCurrentMonth(12)
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
                <div className='flex space-x-2'>
                    <Button
                        onClick={() => handleChangeMonth(-1)}
                        size={'sm'}
                        variant="outline"
                        className={`${currentMonth > 1 ? 'border-gray-300 text-gray-500' : 'border-gray-100 text-gray-300'} w-min bg-transparent hover:bg-transparent`}>
                        {/* <Text className='hidden md:inline-block' keyString='prev_msg' /> */}
                        <ChevronLeft className="h-5 w-5" />
                    </Button>
                    <Button
                        onClick={() => handleChangeMonth(+1)}
                        size={'sm'}
                        variant="outline"
                        className={`${ currentMonth < 12 ? 'border-gray-300 text-gray-500' : 'border-gray-100 text-gray-300'} w-min bg-transparent hover:bg-transparent`}>
                            {/* <Text className='hidden md:inline-block' keyString='next_msg' /> */}
                            <ChevronRight className="h-5 w-5" />
                    </Button>
                </div>
                <select onChange={handleUpdateCategory} id="categorie" name="categorie" className="border border-gray-100 outline-primary outline-offset-1 px-3 py-2 rounded-lg w-full">
                    <option value="" disabled>
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