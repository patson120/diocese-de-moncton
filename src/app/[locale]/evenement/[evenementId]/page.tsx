import React from 'react'

export default function Page() {
    return (
        <>
            <div className='px-5 md:px-10 py-2 h-12 bg-gray-20 border border-b-gray-200 bg-gray-100'>
                <div className="flex justify-between ">
                </div>
            </div>
            <section className="px-4 md:px-10">
                <div className='grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-12 py-4 lg:py-8'>
                    <div className='col-span-full lg:col-span-2'>
                        <div className='h-96 rounded-lg bg-gray-100'></div>
                    </div>
                    <div className='col-span-full lg:col-span-3'>
                        <div>
                            <small className='text-gray-600'>Titre évènement</small>
                            <h1 className='text-xl font-extrabold mb-4'>Soupé au homard</h1>
                            <p className='text-sm text-gray-600'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe maiores sit ex harum. Reprehenderit labore aspernatur iste voluptatem. Qui reprehenderit doloribus est, odio quisquam impedit mollitia aut excepturi officia. Optio id ex excepturi eum, accusamus voluptatum eveniet iste, sed beatae tempora unde deleniti molestiae suscipit numquam autem facere rerum et perspiciatis animi illo quo facilis qui asperiores magnam! Ratione impedit laborum eum nisi accusamus autem dolor, sit incidunt quia sed.</p>
                        </div>
                        <div className='flex flex-wrap space-x-3 items-center font-light text-sm my-4'>
                            <label htmlFor="type_evenement">Type évènement</label>
                            <p className='px-4 py-1 text-gray-500 rounded-full border border-gray-100'>Formation</p>
                            <p className='px-4 py-1 text-gray-500 rounded-full border border-gray-100'>Célébration</p>
                            <p className='px-4 py-1 text-gray-500 rounded-full border border-gray-100'>Communautaire</p>
                        </div>
                        <hr className='my-2'/>
                        <div className='flex space-x-8 mt-4'>
                            <div>
                                <div className='flex space-x-2'>
                                    <div className='h-4 w-4 bg-gray-100 rounded-md'></div>
                                    <label htmlFor="date" className='text-sm text-gray-500'>Date</label>
                                </div>
                                <h1 className='text-sm font-extrabold'>Dimanche 29 Septembre</h1>
                            </div>
                            <div>
                                <div className='flex space-x-2'>
                                    <div className='h-4 w-4 bg-gray-100 rounded-md'></div>
                                    <label htmlFor="heure" className='text-sm text-gray-500'>Heure</label>
                                </div>
                                <h1 className='text-sm font-extrabold'>16h00 à 18h00</h1>
                            </div>
                        </div>
                        
                        <h1 className="text-lg font-extrabold text-black mt-10 mb-2">Lieu: <span className='text-base font-normal text-gray-600'>Pointe Sapin</span></h1>
                        {/* Map */}
                        <div className="h-80 w-full bg-gray-100 rounded-xl"></div>
                    </div>
                </div>
            </section>
        </>
    )
}
