'use client'
import { Button } from '@/components/ui/shared/button'
import MessageComp from '@/components/ui/shared/MessageComp'
import { messages } from '@/constants'
import { Link } from '@/i18n/routing'
import { ArrowRight } from 'lucide-react'

 const Page = () => {
    return (
        <>
            <div className='px-5 md:px-10 py-2 h-12 bg-gray-20 border border-b-gray-200 bg-gray-100'>
                <div className="flex justify-between ">
                </div>
            </div>
            <section className='container max-margin py-0' >
                <div className='grid grid-cols-1 lg:grid-cols-6 gap-5 lg:gap-10 xl:gap-16 py-4 lg:py-12 xl:pb-20'>
                    <div className='col-span-full lg:col-span-4 pb-10 lg:pb-0 md:pr-10 lg:pr-20 border-b lg:border-r lg:border-[#E5E5E5]'>
                        <div className='flex flex-col space-y-3'>
                            <h1 className='heading-2 font-bold'>Décret de suppression de la paroisse Saint-Timothée de Shemogue</h1>
                            <p className='body-2 text-[#575757]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <p className='body-2 text-[#575757]'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <p className='body-2 text-[#575757]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                            <p className='body-2 text-[#575757]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                            <p className='body-2 text-[#575757]'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <p className='body-2 text-[#575757]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                    </div>
                    <div className='col-span-full lg:col-span-2 flex flex-col space-y-4 mb-10 pt-4 md:pt-0'>
                        <h1 className='heading-3 font-extrabold'>Autres message</h1>
                        <div className="hidden md:flex flex-col gap-4 lg:gap-6">
                            {
                                messages.slice(0, 5).map((item, index) => (
                                    <Link key={index} href="/messages/1">
                                        <MessageComp data={item} />
                                    </Link>
                                ))
                            }
                        </div>
                        <div className="md:hidden flex flex-col gap-4">
                            {
                                messages.slice(0, 3).map((item, index) => (
                                    <Link key={index} href="/messages/1" className=''>
                                        <MessageComp data={item} />
                                    </Link>
                                ))
                            }
                        </div>
                        <Link href='/messages' className="block md:hidden mt-5" >
                            <Button onClick={() => { }} className="w-full md:py-6 text-sm md:text-base lg:text-xl">
                                Voir toutes les messages
                                <ArrowRight className="ml-2 h-4 w-6 hover:ml-4 hover:transition-all hover:duration-300 " />
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Page