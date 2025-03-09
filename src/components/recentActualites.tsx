import { fetchActualites } from "@/_lib/data";
import { Link } from "@/i18n/routing";
import { TypeActualite } from "@/types";
import Actualite from "./ui/shared/actualite";

export default async function RecentActualites() {
    const response = await fetchActualites("?paginate=4")
    const actualites: TypeActualite[] = response.data      
    return (
        <div className="flex flex-row overflow-x-scroll lg:overflow-x-hidden xl:grid-cols-4 gap-4 h-scroll pb-6">
            {
                actualites.map((item, index) => (
                    <Link key={index} href="/actualites/1" className='min-w-[280px] md:min-w-[308px] xl:w-full'>
                        <Actualite data={item} />
                    </Link>
                ))
            }
        </div>
    )
}