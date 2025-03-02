import { fetchMessages } from '@/_lib/data'
import { Button } from '@/components/ui/shared/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default async function MessageDetail() {
    // Fetch data from API
    const data = await fetchMessages()
    console.log({ data })
    return (
        <div className='col-span-full lg:col-span-4 pb-10 lg:pb-0 md:pr-10 lg:pr-20 border-b lg:border-r lg:border-r-[#E5E5E5] lg:border-b-transparent'>
            <div className='flex flex-col space-y-3'>
                <h1 className='heading-2 font-bold'>Décret de suppression de la paroisse Saint-Timothée de Shemogue</h1>
                <p className='body-2 text-[#575757]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <p className='body-2 text-[#575757]'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <p className='body-2 text-[#575757]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                <p className='body-2 text-[#575757]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                <p className='body-2 text-[#575757]'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <p className='body-2 text-[#575757]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
            <div className='flex justify-end space-x-2 pt-20'>
                <Button
                    size={'sm'}
                    variant="outline"
                    className='w-min bg-transparent hover:bg-transparent border-gray-300 text-gray-500'
                >
                    <ChevronLeft className="mr-1 h-4 w-4 xl:h-5 xl:w-5 text-gray-500" />
                    Message précédent
                </Button>
                <Button
                    size={'sm'}
                    variant="outline"
                    className='w-min bg-transparent hover:bg-transparent border-gray-300 text-gray-500'
                >Message suivant
                <ChevronRight className="ml-1 h-4 w-4 xl:h-5 xl:w-5 text-gray-500" />
                </Button>
            </div>
        </div>
    )
}
