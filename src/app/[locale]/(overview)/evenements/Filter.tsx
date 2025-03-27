
'use client'




export const Filter = () => {
    return (
        <div className='flex justify-center items-center gap-2'>
            <div className='flex items-center space-x-2 lg:w-[90%]'>
                <h5 className='text-sm font-bold whitespace-nowrap'>Filtrer par</h5>
                <div className="border border-gray-100 rounded-lg w-full">
                    <input type="month" name="month" id="month" className="px-3 h-9 w-full rounded-lg" />
                </div>
                {/* <select id="mois" name="mois" className="border border-gray-100 outline-primary outline-offset-1 px-3 py-2 rounded-lg w-full">
                    <option value="" disabled>Par mois</option>
                    <option value="janvier">Janvier</option>
                    <option value="fevrier">Février</option>
                    <option value="mars">Mars</option>
                    <option value="avril">Avril</option>
                    <option value="mai">Mai</option>
                    <option value="juin">Juin</option>
                    <option value="juillet">Juillet</option>
                    <option value="aout">Août</option>
                    <option value="septembre">Septembre</option>
                    <option value="actobre">Octobre</option>
                    <option value="novembre">Novembre</option>
                    <option value="decembre">Décembre</option>

                </select> */}
                <select id="categorie" name="categorie" className="border border-gray-100 outline-primary outline-offset-1 px-3 py-2 rounded-lg w-full">
                    <option value="" disabled>Par catégorie</option>
                    <option value="actualite">Actualité</option>
                    <option value="evenement">Evènement</option>
                </select>

            </div>

        </div>
    )
}