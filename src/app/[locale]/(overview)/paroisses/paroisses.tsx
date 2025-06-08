import ParoisseItem from "@/components/ui/home/paroisse-item";
import { Link } from "@/i18n/routing";
import { Paroisse } from "@/types";

export default async function Paroisses( {paroisses}: {paroisses: Paroisse[]}) {
    return (
        <>
            {
                paroisses.length === 0 ? (
                    <div className="flex flex-col items-center justify-center h-full">
                        <p className="body-2 text-gray-500">Aucune paroisse trouvée.</p>
                    </div>
                ) :
                paroisses.map((item, index) => (
                    <Link key={`${index}`} href={`/paroisses/${item.id}`}>
                        <ParoisseItem data={item} />
                    </Link>
                ))
            }
        </>
    )
}