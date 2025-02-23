import { fetchParoisses } from "@/_lib/data";
import { paroisses } from "@/constants";
import { Link } from "@/i18n/routing";
import ParoisseItem from "./ui/home/paroisse-item";
import { Button } from "./ui/shared/button";
import { ArrowRight } from "lucide-react";

export default async function RecentParoisses() {
    const data = await fetchParoisses()
    console.log({ data });

    return (
        <div className="col-span-3 md:col-span-1 flex flex-col gap-4 lg:gap-5">
            {
                paroisses.map((item, index) => (
                    <Link key={index} href="/paroisses/1">
                        <ParoisseItem data={item} />
                    </Link>
                ))
            }
            <Link href="/paroisses">
                <Button className="w-full md:py-6 text-sm md:text-base lg:text-xl">
                    Voir toutes les 23 paroisses
                    <ArrowRight className="ml-2 h-4 w-6 hover:ml-4 hover:transition-all hover:duration-300 " />
                </Button>
            </Link>
        </div>
    )
}