// Loading animation
export const shimmer =
    'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent';

export function ActualiteSkeleton() {
    return (
        <div
            className={`${shimmer} relative overflow-hidden rounded-xl bg-gray-100 p-4 shadow-sm w-full flex flex-col space-y-3`}>
            <div className='relative h-56 md:h-60 w-full rounded-2xl overflow-hidden bg-gray-50'>

            </div>
            <span className='h-2 w-1/3 rounded bg-gray-200 ' />
            <h4 className='h-4 w-1/2 rounded bg-gray-200' />
            <p className='h-2 rounded bg-gray-200' />
            <p className='h-2 rounded bg-gray-200' />
            <p className='h-2 w-2/3 rounded bg-gray-200' />
            <p className='h-2 w-1/3 rounded bg-gray-200' />
        </div>
    );
}

export function ActualitesSkeleton( {items}:{ items: number}) {
    let comps = []
    for(let i = 0; i < items; i++) {
        comps.push(<ActualiteSkeleton />)
    }
    return (
        <div className="grid gap-6 grid-cols-2 lg:grid-cols-4">
            {
                comps.map(item => item )
            }
        </div>
    );
}