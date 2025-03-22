

export type Language = "fr" | 'en'

export type MenuType = {
    id: number;
    image: string;
    title: string;
    description: string;
    link: string;
}

// export type ActualiteType = {
//     category: string;
//     title: string;
//     date: string;
//     image: string;
//     description: string;
// }

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


/////////////////////////////////////////////////////////////

export type TypeEvent = {
    id: number;
    paroisse_id: number;
    categorie_id: number;
    titre_fr: string;
    titre_en: string;
    heure_event: string;
    date_event: string;
    lieu: string;
    gps: string;
    contact: string;
    description_fr: string;
    description_en: string;
    created_at: string;
    updated_at: string;
    paroisse: Paroisse,
    categorie: Categorie
}

export type Categorie = {
    id: number;
    parent_id: number;
    intitule_fr: string;
    intitule_en: string;
    menu: string;
    created_at: string;
    updated_at: string;
}

export type Paroisse = {
    id: number;
    type_paroisse_id: number;
    nom: string;
    adresse: string;
    telephone: string;
    email: string;
    site_web: string;
    code_postal: string;
    horaires: string;
    lien_youtube: string;
    pretre_responsable: string;
    gps: string;
    histoire: string;
    created_at: string;
    updated_at: string;
    galerie: any[];
    type: TypeParoisse
}

export type TypeParoisse = {
    id: number;
    intitule_fr: string;
    intitule_en: string;
    couleur: string;
    created_at: string;
    updated_at: string;
}

export type TypeActualite = {
    id: number;
    categorie_id: number;
    titre_fr: string;
    titre_en: string;
    date_publication: string;
    is_brouillon: number;
    is_planifier: number;
    date_planification: any;
    description_fr: string,
    description_en: string,
    created_at: string,
    updated_at: string,
    categorie: Categorie,
    motcles: string[]
}

export type Message = {
    id: number;
    titre_fr: string;
    titre_en: string,
    message_fr: string;
    message_en: string,
    archeveque_id: number;
    etat: number;
    created_at: string;
    updated_at: string;
    message: string;
    archeveque: Archeveque;
}

export type Archeveque = {
    id: number;
    name: string;
    photo: string;
    created_at: string;
    updated_at: string;
}