import { fetchEvents, fetchParoisses } from "@/_lib/data";
import EventItem from "@/components/ui/home/event-item";
import { shimmer } from "@/components/ui/shared/skeletons";
import { events } from "@/constants";
import { Link } from "@/i18n/routing";


export default async function Evenements() {
    // const data = await new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //         resolve(true);
    //     }, 500);
    // })
    const data = await fetchEvents();
    console.log({ data });
    return (
        <>
            <h3 className='text-lg text-center font-extrabold mt-8 mb-4 border border-gray-200 rounded-md py-3'>Mois de septembre</h3>
            <div className="hidden md:block">
                <div className='flex flex-col gap-4'>
                    {
                        events.map((item, index) => (
                            <div key={index}>
                                <Link href="/evenements/1" className="hidden md:block">
                                    <EventItem data={item} row />
                                </Link>
                                <Link href="/evenements/1" className="md:hidden">
                                    <EventItem data={item} row={false} />
                                </Link>
                            </div>
                        ))
                    }
                </div>
            </div>
            {/* Desktop */}
            {/* <div className="hidden md:block">
                <div className='flex flex-col gap-4'>
                    {
                        events.map((item, index) => (
                            <Link key={index} href="/evenements/1" >
                                <EventItem data={item} row />
                            </Link>
                        ))
                    }
                </div>
            </div> */}
            {/* Mobile */}
            {/* <div className="md:hidden">
                <div className='flex flex-col gap-4'>
                    {
                        events.map((item, index) => (
                            <Link key={index} href="/evenements/1" >
                                <EventItem data={item} row={false} />
                            </Link>
                        ))
                    }
                </div>
            </div> */}

            <h3 className='text-lg text-center font-extrabold my-4 border border-gray-200 rounded-md py-3'>Mois d'octobre</h3>
            <div className='flex flex-col gap-4'>
                {
                    [1, 2].map((item) => (
                        <div key={item} className={`${shimmer} relative overflow-hidden shadow-sm h-16 border border-gray-100 bg-gray-200 rounded-md`}></div>
                    ))
                }
            </div>

            {/* Pagination */}
            <div className='flex justify-center mt-12'>
                <div className='flex gap-3'>
                    <div className='w-40 h-8 rounded-md bg-gray-100'></div>
                </div>
            </div>
        </>
    )
}