import { fetchActualites } from "@/_lib/data"
import Actualite from "@/components/ui/shared/actualite"
import Pagination from "@/components/ui/shared/pagination"
import { Link } from "@/i18n/routing"
import { TypeActualite } from "@/types"
import ImportantPost from "./ImportantPost"


export default async function Actualites({ currentPage, query, categorie_id }: { currentPage: number, query: string, categorie_id: string }) {

    let params = `?paginate=8&page=${currentPage}`
    if (query) { params = `${params}&intitule=${query}`}
    if (Number(categorie_id) > 0){ params = `${params}&categorie_id=${categorie_id}`}
    
    const response = await fetchActualites(params)
    const actualites: TypeActualite[] = response.data
    const totalPages = response.last_page

    if (!actualites) {
        return (
            <div className="mt-10">
                <h1 className="text-center text-gray-400">Pas de données !</h1>
            </div>
        )
    }

    return (
        <>
            {/* Important post  */}
            <div id='actualite-une' className='mt-8 mb-8 md:mb-12 xl:mb-24'>
                <ImportantPost  />
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
