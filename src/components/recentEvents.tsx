import { fetchEvents } from "@/_lib/data";
import { Link } from "@/i18n/routing";
import { TypeEvent } from "@/types";
import EventItem from "./ui/home/event-item";
import React from "react";
import Text from "./Text";

export default async function RecentEvents() {
    const response = await fetchEvents("?ordre=soon&paginate=3")
    const events: TypeEvent[] = response.data
    return (
        <React.Fragment>
            {
                events.length > 0 ?
                <section className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {
                        events.map((item, index) => (
                            <Link key={index} href={`/evenements/${item.id}`} className=''>
                                <EventItem data={item} />
                            </Link>
                        ))
                    }
                </section> :
                <div className="h-48 border border-gray-400 rounded-2xl border-dashed flex justify-center items-center">
                    <Text className="text-center text-muted-foreground" keyString="aucun_evenement_en_vu"/>
                </div>
            }
        </React.Fragment>
    )
}