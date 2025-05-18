import { fetchEvents } from "@/_lib/data";
import { formatDateToLocal } from "@/_lib/utils";
import Text from "@/components/Text";
import EventItem from "@/components/ui/home/event-item";
import Pagination from "@/components/ui/shared/pagination";
import { Link } from "@/i18n/routing";
import { TypeEvent } from "@/types";


export default async function Evenements(
    { currentPage, query, month, categorie_id }:
        {
            currentPage: number,
            query: string,
            month: number,
            categorie_id: string,
        }) {

    let events: TypeEvent[] = []
    let params = `?paginate=8&page=${currentPage}`
    if (query) { params = `${params}&intitule=${query}` }
    if (month) { params = `${params}&month=${month}` }
    if (categorie_id) { params = `${params}&categorie_id=${categorie_id}` }


    const response = await fetchEvents(params)
    events = response.data
    const totalPages = response.last_page

    if (!events) {
        return (
            <div className="h-44 mt-10 rounded-lg border-2 border-gray-400 border-dashed border-spacing-4  flex justify-center items-center">
                <h1 className="text-center text-gray-400"><Text keyString="pas_de_donnees" /> !</h1>
            </div>
        )
    }

    const verifyDate = (item: TypeEvent, index: number): boolean => {
        if (index < 0) return true
        return (
            formatDateToLocal((new Date(item.date_event)).toISOString(), 'fr-FR', 'long').split(" ")[1] !==
            formatDateToLocal((new Date(events[index].date_event)).toISOString(), 'fr-FR', 'long').split(" ")[1]
        )
    }

    return (
        <>
            <div className='flex flex-col gap-4 mt-6'>
                {
                    events.map((item, index) => (
                        <div key={index}>
                            {
                                (verifyDate(item, index - 1)) &&
                                <h3 className='text-lg text-center font-extrabold my-4 border border-gray-200 rounded-md py-3'>
                                    Mois de {formatDateToLocal((new Date(item.date_event)).toISOString(), 'fr-FR', 'long').split(" ")[1]}
                                </h3>
                            }
                            <Link href={`/evenements/${item.id}`} className="hidden md:block">
                                <EventItem data={item} row />
                            </Link>
                            <Link href={`/evenements/${item.id}`} className="md:hidden">
                                <EventItem data={item} row={false} />
                            </Link>
                        </div>
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