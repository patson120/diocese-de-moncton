import { fetchActualites } from "@/_lib/data";
import { Link } from "@/i18n/routing";
import Actualite from "./ui/shared/actualite";
import { news } from "@/constants";
import { TypeActualite } from "@/types";

export default async function RecentActualites() {
    let actualites: TypeActualite[] = await fetchActualites()    

    return (
        <div className="flex flex-row overflow-x-scroll lg:overflow-x-hidden xl:grid-cols-4 gap-4 h-scroll pb-6">
            {
                actualites.slice(0, 4).map((item, index) => (
                    <Link key={index} href="/actualites/1" className='min-w-[280px] md:min-w-[308px] xl:w-full'>
                        <Actualite data={item} />
                    </Link>
                ))
            }
        </div>
    )
}