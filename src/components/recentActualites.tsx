import { fetchActualites } from "@/_lib/data";
import { Link } from "@/i18n/routing";
import Actualite from "./ui/shared/actualite";
import { news } from "@/constants";

export default async function RecentActualites() {
    setTimeout(async () => {
        const actualites = await fetchActualites()
        console.log({ actualites });
    }, 5000);

    return (
        <div className="flex flex-row overflow-x-scroll lg:overflow-x-hidden gap-4 h-scroll pb-6">
            {
                news.map((item, index) => (
                    <Link key={index} href="/actualites/1" className='min-w-[280px] md:min-w-[308px]'>
                        <Actualite data={item} />
                    </Link>
                ))
            }
        </div>
    )
}