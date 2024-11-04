'use client'

import { useLocale } from 'next-intl';

const LocalSwitcher = () => {
    const localActive = useLocale()
    const onSelectChange = async (lang: string) => {
        if (localActive === lang) return
        // set language to cookies
        document.cookie = `NEXT_LOCALE=${lang}`
        window.location.href = window.location.href.replace(`/${localActive}`, `/${lang}`)
        // window.location.reload() // refresh page to apply new language settings
    };
    const activeClasses = ` rounded-full bg-primary text-white transition-all`;
    const inactiveClasses = `text-gray-600 transition-all`
    return (
        <div className="w-[70px] lg:w-auto border-2 border-gray-100 p-1 rounded-full flex flex-row gap-x-1">
            <button
                onClick={() => onSelectChange("fr")}
                className={`h-7 w-7 text-center font-medium text-xs ${(localActive === 'fr' ? activeClasses : inactiveClasses)}`}>FR</button>
            <button
                onClick={() => onSelectChange("en")}
                className={`h-7 w-7 text-center font-medium text-xs ${(localActive === 'en' ? activeClasses : inactiveClasses)}`}>EN</button>
        </div>
    )
}

export default LocalSwitcher