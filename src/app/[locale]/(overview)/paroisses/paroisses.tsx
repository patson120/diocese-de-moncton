import ParoisseItem from "@/components/ui/home/paroisse-item";
import { Link } from "@/i18n/routing";
import { Paroisse } from "@/types";

export default async function Paroisses( {paroisses}: {paroisses: Paroisse[]}) {
    return (
        <>
            {
                paroisses.map((item, index) => (
                    <Link key={`${index}`} href={`/paroisses/${item.id}`}>
                        <ParoisseItem data={item} />
                    </Link>
                ))
            }
        </>
    )
}