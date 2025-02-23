import { fetchActualites, fetchEvents } from "@/_lib/data";
import { Link } from "@/i18n/routing";
import Actualite from "./ui/shared/actualite";
import { events, news } from "@/constants";
import EventItem from "./ui/home/event-item";

export default async function RecentEvents() {
    const data = await fetchEvents()
    console.log({ data });

    return (
        <section className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {
                events.map((item, index) => (
                    <Link key={index} href="/evenements/1" className=''>
                        <EventItem data={item} />
                    </Link>
                ))
            }
        </section>
    )
}