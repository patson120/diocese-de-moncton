

export type Language = "fr" | 'en'

export type MenuType = {
    id: number;
    image: string;
    title: string;
    description: string;
    link: string;
}

export type TypeEvent = {
    id: number;
    paroisse_id: number;
    categorie_id: number;
    titre_fr: string;
    titre_en: string;
    heure_event: string;
    date_event: string;
    prevId: number | null;
    nextId: number | null;
    lieu: string;
    gps: string;
    contact: string;
    description_fr: string;
    description_en: string;
    created_at: string;
    updated_at: string;
    paroisse: Paroisse;
    categorie: Category;
    galerie: Image[];
}

export type Category = {
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
    langue: string | null;
    horaire_bureau: string | null;
    created_at: string;
    updated_at: string;
    galerie: Image[];
    bulletins: Bulletin[];
    type: TypeParoisse;
    horaireparoisses: Horaire[];
    etabli_le: number | null,
    ordonne_le: number | null,
    premier_cure: number | null,
    statut: number,
}
export type Bulletin = {
    id: Number;
    paroisse_id: Number;
    titre_fr: string;
    titre_en: string;
    document: string;
    mois: Number;
    created_at: string;
    updated_at: string;
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
    description_fr: string;
    description_en: string;
    prevId: number | null;
    nextId: number | null;
    created_at: string;
    updated_at: string;
    categorie: Category;
    motcles: string[]
    galerie: Image[]
}

export type Message = {
    id: number;
    titre_fr: string;
    titre_en: string,
    message_fr: string;
    message_en: string,
    archeveque_id: number;
    prevId: number | null;
    nextId: number | null;
    etat: number;
    image: string | null;
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

export type Horaire = {
    id: number;
    paroisse_id: number;
    jour: string;
    heure: string;
    created_at: string;
    updated_at: string;
}


export type Membre = {
    id: number;
    categorie_id: number;
    image: string;
    nom: string;
    prenom: string;
    poste: string;
    coordonnees: string;
    description_fr: string;
    description_en: string;
    etat: number;
    unites: TypeParoisse[]
    created_at: string;
    updated_at: string;
    categorie: Category;
}

export type HoraireMesse = {
    id: number;
    jour: string;
    heure: string;
    created_at: string;
    updated_at: string;
    activites: Activite[];
}

export type Activite = {
    id: number;
    horaire_messe_id: number;
    intitule_fr: string;
    intitule_en: string | null;
    created_at: string;
    updated_at: string;
}

export type Image = {
    id: number;
    titre: string | null;
    path: string;
    path_en: string | null;
    label: string;
    value: number;
    comment: string;
    created_at: string;
    updated_at: string;
}