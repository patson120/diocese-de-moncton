import { fetchActualites } from "@/_lib/data"
import Actualite from "@/components/ui/shared/actualite"
import { news } from "@/constants"
import { Link } from "@/i18n/routing"


export default async function Actualites() {
    const actualites = await fetchActualites()
    console.log({ actualites });

    return (
        <>
            <div className="grid gap-6 grid-cols-2 lg:grid-cols-4">
                {
                    [...news, ...news].map((item, index) => (
                        <Link key={index} href="/actualites/1" className=''>
                            <Actualite data={item} />
                        </Link>
                    ))
                }
            </div>

            {/* Pagination */}
            <div className='flex justify-center mt-12'>
                <div className='flex gap-3'>
                    <div className="w-40 h-8 rounded-md bg-gray-100"></div>
                </div>
            </div>
        </>
    )
}