
'use client'
import Button from "@/ui/shared/button";


export default function Page() {
    return (
        <main>
            {/* Hero section */}
            <section className='h-[25vh] md:h-[50vh] w-full relative bg-gray-200'>
                {/* Hero image */}
                {/* <Image
                    alt="Image de la l'actualité"
                    src="/assets/img/campost.jpg"
                    fill
                    style={{
                    objectFit: 'cover',
                    height: '100%',
                    width: '100%'
                    }}
                /> */}
                <div className='absolute top-0 left-0 right-0 bottom-0 flex items-start pt-10 bg-black bg-opacity-40'>

                    <div className="flex items-end gap-10 px-5 md:px-10">
                        <div className="">
                            <Button
                                title="Retour"
                                handleClick={() => console.log("Retour")}
                                containerStyle="text-white text-sm bg-gray-100 rounded-full px-3 py-1"
                            />
                            <div className="relative h-60 w-80 translate-y-14 bg-gray-100">
                                {/* <Image
                                    alt="Image de la l'actualité"
                                    src="/assets/img/campost.jpg"
                                    fill
                                    style={{
                                        objectFit: 'cover',
                                        height: '100%',
                                        width: '100%'
                                    }}
                                /> */}
                            </div>
                        </div>
                        <div>
                            <span className="text-white uppercase text-[10px]">Unité pastorale</span>
                            <h1 className='text-white font-extrabold text-xl mb-8'>Paroisse Immaculé-Conception / Acadieville</h1>
                            <Button
                                title="Visiter le site internet"
                                handleClick={() => console.log("Visiter le site internet")}
                                containerStyle="font-semibold text-sm bg-gray-100 rounded-lg px-3 py-2 mb-3"
                            />
                        </div>
                    </div>
                </div>
            </section>
            <div className="h-20" />

            <section className='px-5 md:px-10 my-8'>
                <div className="grid grid-cols-5 gap-10 relative">
                    <div className="col-span-3">
                        <h1 className="text-2xl font-extrabold text-black mb-4">Histoire</h1>
                        <p className="text-gray-500 text-sm mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, arcu sed aliquet condimentum, velit nisi faucibus velit, at lobortis neque velit at velit. Nulla facilisi. Sed euismod orci id turpis molestie, at tempor est posuere. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere...</p>
                        <div className="flex gap-4">
                            <div className="flex">
                                <span className="text-gray-500 text-sm mr-2">Etabli en</span>
                                <span className="text-sm font-extrabold">1871</span>
                            </div>
                            <div className="flex">
                                <span className="text-gray-500 text-sm mr-2">Ordonné en</span>
                                <span className="text-sm font-extrabold">1871</span>
                            </div>
                            <div className="flex">
                                <span className="text-gray-500 text-sm mr-2">Premier curé</span>
                                <span className="text-sm font-extrabold">1897</span>
                            </div>
                        </div>
                        <h1 className="text-2xl font-extrabold text-black mt-10 mb-2">Sur la carte</h1>
                        {/* Map */}
                        <div className="h-80 w-full bg-gray-100 rounded-xl"></div>
                        <h1 className="text-2xl font-extrabold text-black mt-10 mb-2">La paroisse en vidéo</h1>
                        {/* Video */}
                        <div className="h-80 w-full bg-gray-100 rounded-xl overflow-hidden">
                            {/* show video with controls panel */}
                            <VideoPlayer />
                        </div>

                        <h1 className="text-2xl font-extrabold text-black mt-10 mb-2">Autres pariosses</h1>
                        <div>
                            <div className="flex flex-wrap gap-4">
                                {
                                    [1, 2, 3].map(item => (
                                        <div key={item}>
                                            <div className="h-32 w-48 rounded-md bg-gray-100">
                                                {/* <Image
                                                     alt="Image de la paroisse"
                                                     src={`/assets/img/paroisse${item}.jpg`}
                                                     fill
                                                     style={{
                                                     objectFit: 'cover',
                                                     height: '80px',
                                                     width: '80px',
                                                     borderRadius: '50%',
                                                     }}
                                                 /> */}
                                            </div>
                                            <h3 className="font-extrabold text-xs mt-3 mb-1">Saint-François-de-Sales</h3>
                                            <p className="text-xs text-gray-500">Rogersville</p>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                    <div className="col-span-2 pt-4">
                        <div className="bg-gray-100 rounded-lg sticky top-5 p-5">
                            <Button
                                title="Contacter la paroisse"
                                handleClick={() => console.log("Contacter la paroisse")}
                                containerStyle="w-full py-2 text-white bg-primary rounded-lg"
                            />
                        </div>
                    </div>
                </div>
            </section>

        </main>
    )
}

const VideoPlayer = () => {
    // Video player component using third-party library (e.g., react-player)
    return (
        <div className="relative h-full w-full">
            <video controls className="absolute top-0 left-0 w-full h-full" />
            {/* Controls panel */}
            {/* <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-40">
                <button className="text-white font-semibold text-sm px-3 py-1">Pause</button>
                <button className="text-white font-semibold text-sm px-3 py-1 ml-4">Stop</button>
            </div> */}
        </div>
    )
}