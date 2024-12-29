

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

export type ParoisseType = {
    title: string;
    adresse: string;
    tel: string;
    image: string;
}

export type EventType = {
    jour: string;
    heure: string;
    mois: string;
    lieu: string;
    title: string;
    type: string;
}

export type MessageType = {
    title: string;
    date: string;
    description: string;
}