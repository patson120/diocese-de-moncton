import { cn } from "@/_lib/utils"

const Filter = ({ day, setDay }: {
    day: string,
    setDay: (d: string) => void
}) => {
    const days = [
        "Dimanche",
        "Lundi",
        "Mardi",
        "Mercredi",
        "Jeudi",
        "Vendredi",
        "Samedi"
    ]

    return (
        <div className='flex flex-col md:flex-row justify-center items-start gap-4'>
            <div className='flex items-center flex-wrap gap-2'>
                {
                    days.map((d, dayIndex) => (
                        <label onClick={() => setDay(d)} key={dayIndex} className={cn("text-sm font-bold p-[10px] rounded-xl  cursor-pointer",
                            day === d ? 'bg-[#1D0104] text-white' : 'bg-[#F5F5F5]'
                        )}>{d}</label>
                    ))
                }
            </div>
        </div>
    )
}

export default Filter
