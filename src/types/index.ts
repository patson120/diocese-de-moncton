

export type Language = "fr" | 'en'

export type MenuType = {
    id: number;
    image: string;
    title: string;
    description: string;
    link: string;
}

export type ActualiteType = {
    category: string;
    title: string;
    date: string;
    image: string;
    description: string;
}