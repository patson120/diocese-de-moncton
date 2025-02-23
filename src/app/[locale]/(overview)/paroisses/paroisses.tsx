import { fetchParoisses } from "@/_lib/data";
import ParoisseItem from "@/components/ui/home/paroisse-item";
import { paroisses } from "@/constants";
import { Link } from "@/i18n/routing";


export default async function Paroisses() {
    const data = await fetchParoisses()
    console.log({ data });

    return (
        <>
            {
                [...paroisses, ...paroisses].map((item, index) => (
                    <Link key={index} href="/paroisses/1">
                        <ParoisseItem data={item} />
                    </Link>
                ))
            }
        </>
    )
}