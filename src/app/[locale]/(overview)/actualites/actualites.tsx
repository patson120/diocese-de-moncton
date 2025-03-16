import { fetchActualites } from "@/_lib/data"
import { formatDateToLocal } from "@/_lib/utils"
import Actualite from "@/components/ui/shared/actualite"
import Pagination from "@/components/ui/shared/pagination"
import { Link } from "@/i18n/routing"
import { TypeActualite } from "@/types"
import Image from "next/image"


export default async function Actualites({ currentPage, query }: { currentPage: number, query: string }) {

    const response = await fetchActualites(`?paginate=8&page=${currentPage}&titre_fr=${query}`)
    const actualites: TypeActualite[] = response.data
    const totalPages = response.last_page

    if (!actualites) {
        return (
            <div>
                <h1 className="text-center text-gray-400">Pas de données !</h1>
            </div>
        )
    }

    return (
        <>
            {/* Important post  */}
            <div id='actualite-une' className='mt-8 mb-8 md:mb-12 xl:mb-24'>
                <ImportantPost actualite={actualites[0]} />
            </div>
            <div id="actualites" className="grid gap-6 grid-cols-2 lg:grid-cols-4">
                {
                    actualites.map((item, index) => (
                        <Link key={index} href={`/actualites/${item.id}`} className=''>
                            <Actualite data={item} />
                        </Link>
                    ))
                }
            </div>

            {/* Pagination */}
            <div className="mt-20 flex w-full justify-end">
                <Pagination totalPages={totalPages} target={"#actualite-une"} />
            </div>
        </>
    )
}

const ImportantPost = ({actualite}: {actualite: TypeActualite}) => {
    return (
      <div className='w-full text-black  grid grid-cols-1 md:grid-cols-2 gap-5'>
        <div className='relative h-72 xl:h-96 w-full rounded-2xl overflow-hidden bg-gray-100'>
          <Image
            alt={actualite.titre_fr}
            src="/assets/img/new-4.png"
            fill
            style={{
              objectFit: 'cover',
              width: '100%',
              height: '100%'
            }}
          />
        </div>
        <div className='space-y-4'>
          <div>
            <span className='legend font-bold text-primary'>{actualite.categorie.intitule_fr}</span>
            <h4 className='heading-3 line-clamp-2'>{actualite.titre_fr}</h4>
          </div>
          <p className='body-2 line-clamp-6 text-gray-500'>{actualite.description_fr}</p>
          <p className='body-3 text-gray-400'>Publié le {formatDateToLocal((new Date(actualite.date_publication)).toISOString())}</p>
        </div>
      </div >
    )
  }
  