import { fetchEvents } from "@/_lib/data";
import { Link } from "@/i18n/routing";
import { TypeEvent } from "@/types";
import EventItem from "./ui/home/event-item";

export default async function RecentEvents() {
    const events: TypeEvent[] = await fetchEvents()
    return (
        <section className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {
               events.slice(0, 3).map((item, index) => (
                    <Link key={index} href={`/evenements/${item.id}`} className=''>
                        <EventItem data={item} />
                    </Link>
                ))
            }
        </section>
    )
}