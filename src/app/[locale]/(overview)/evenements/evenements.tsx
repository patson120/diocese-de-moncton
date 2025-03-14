import { fetchEvents } from "@/_lib/data";
import EventItem from "@/components/ui/home/event-item";
import Pagination from "@/components/ui/shared/pagination";
import { shimmer } from "@/components/ui/shared/skeletons";
import { Link } from "@/i18n/routing";
import { TypeEvent } from "@/types";


export default async function Evenements({ currentPage, query }: { currentPage: number, query: string }) {

    const response = await fetchEvents(`?paginate=8&page=${currentPage}&titre_fr=${query}`)
    const events: TypeEvent[] = response.data
    const totalPages = response.last_page

    if (!events) {
        return (
            <div>
                <h1 className="text-center text-gray-400">Pas de données !</h1>
            </div>
        )
    }

    return (
        <>
            <h3 className='text-lg text-center font-extrabold mt-8 mb-4 border border-gray-200 rounded-md py-3'>Mois de septembre</h3>
            <div className='flex flex-col gap-4'>
                {
                    events.map((item, index) => (
                        <div key={index}>
                            <Link href="/evenements/1" className="hidden md:block">
                                <EventItem data={item} row />
                            </Link>
                            <Link href="/evenements/1" className="md:hidden">
                                <EventItem data={item} row={false} />
                            </Link>
                        </div>
                    ))
                }
            </div>

            <h3 className='text-lg text-center font-extrabold my-4 border border-gray-200 rounded-md py-3'>Mois d'octobre</h3>
            <div className='flex flex-col gap-4'>
                {
                    [1, 2].map((item) => (
                        <div key={item} className={`${shimmer} relative overflow-hidden shadow-sm h-16 border border-gray-100 bg-gray-200 rounded-md`}></div>
                    ))
                }
            </div>

            {/* Pagination */}
            <div className="mt-20 flex w-full justify-center">
                <Pagination totalPages={totalPages} />
            </div>
        </>
    )
}