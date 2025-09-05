import { clsx, type ClassValue } from 'clsx';
import { useLocale } from 'next-intl';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const formatDateToLocal = async (
    dateStr: string,
    //locale: string = 'fr-FR',
    pattern: "numeric" | "2-digit" | "long" | "short" | "narrow" = "short",
    ) => {
    const localeLang = useLocale()
    const language = localeLang === 'fr' ? "fr-FR": "en-EN"

    // console.log(localeLang);
    
    
    const date = new Date(dateStr);
    const options: Intl.DateTimeFormatOptions = {
        day: 'numeric',
        month: pattern,
        year: 'numeric',
    };
    const formatter = new Intl.DateTimeFormat(language, options);
    return formatter.format(date);
};