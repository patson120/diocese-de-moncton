

export type Language = "fr" | 'en'

export type MenuType = {
    id: number;
    menu?: string;
    image: string;
    titre_fr: string;
    titre_en: string;
    description_fr: string;
    description_en: string;
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
    date_fin: string | null;
    prevId: number | null;
    nextId: number | null;
    lieu: string;
    gps: string;
    etat: number;
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
    media: Image[];
    bulletins: Bulletin[];
    pretre: Membre[];
    type: TypeParoisse;
    horaireparoisses: Horaire[]
    statut: number,
}
export type Bulletin = {
    id: number;
    paroisse_id: Number;
    titre_fr: string;
    titre_en: string;
    document: string;
    lien_externe: string | null;
    mois: number;
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

export type Menu = {
    id: number;
    intitule_fr: string;
    intitule_en: string;
    label: string | null;
    created_at: string;
    updated_at: string;
    liens: Lien[]
}

export type Lien = {
    id: number;
    pages_id: number;
    menu_id: number;
    intitule_fr: string;
    intitule_en: string | null;
    statut: number;
    menu: Menu,
    lapage: Page[],
    created_at: string;
    updated_at: string;
}

export type Page = {
    id: number;
    titre: string;
    is_planifier: number;
    is_publier: number;
    description: string;
    data: string;
    contenu_html: string | null;
    contenu_json: string | null;
    date_planification: string | null;
    contenus: any[],
    created_at: string;
    updated_at: string;
}