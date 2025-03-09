import { fetchActualites } from '@/_lib/data'
import Actualite from '@/components/ui/shared/actualite'
import { Link } from '@/i18n/routing'
import { TypeActualite } from '@/types'

export default async function RelativesActualite({ categorie_id }: { categorie_id: number }) {
    // Fetch actualite data from API 
    const response = await fetchActualites(`?paginate=4&page=1&categorie_id=${categorie_id}`)
    const actualites = response.data
    return (
        <div className='container max-margin py-0 md:px-0 md:mx-0 col-span-full lg:col-span-2 flex flex-col space-y-4 mb-10'>
            <h1 className='heading-3 font-extrabold'>Articles relatifs</h1>
            <div className="flex md:flex-col gap-4 overflow-x-scroll md:overflow-x-hidden pb-6 md:pb-0">
                {
                    actualites.map((item: TypeActualite, index:number) => (
                        <Link key={index} href={`/actualites/${item.id}`} className='min-w-[280px] md:min-w-[308px] lg:w-auto'>
                            <Actualite data={item} />
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}
