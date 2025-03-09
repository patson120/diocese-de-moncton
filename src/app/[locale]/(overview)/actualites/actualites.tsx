import { fetchActualites } from "@/_lib/data"
import Actualite from "@/components/ui/shared/actualite"
import Pagination from "@/components/ui/shared/pagination"
import { Link } from "@/i18n/routing"
import { TypeActualite } from "@/types"


export default async function Actualites({currentPage, query}: { currentPage: number, query: string}) {

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
                <Pagination totalPages={totalPages} />
            </div>
        </>
    )
}