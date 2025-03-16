import { Link } from "@/i18n/routing";
import { Paroisse } from "@/types";
import { ArrowRight } from "lucide-react";
import ParoisseItem from "./ui/home/paroisse-item";
import { Button } from "./ui/shared/button";

export default function RecentParoisses({ paroisses, total }: { paroisses: Paroisse[], total: number }) {
    return (
        <div className="col-span-3 md:col-span-1 flex flex-col justify-between gap-4 lg:gap-5">
            <div className="flex flex-col gap-4">
                {
                    paroisses.map((item, index) => (
                        <Link key={index} href={`/paroisses/${item.id}`}>
                            <ParoisseItem data={item} />
                        </Link>
                    ))
                }
            </div>
            <Link href="/paroisses">
                <Button className="w-full md:py-6 text-sm md:text-base lg:text-xl">
                    Voir toutes les {total} paroisses
                    <ArrowRight className="ml-2 h-4 w-6 hover:ml-4 hover:transition-all hover:duration-300 " />
                </Button>
            </Link>
        </div>
    )
}