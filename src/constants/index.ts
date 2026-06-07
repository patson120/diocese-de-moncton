import { MenuType } from "@/types"

export const NEXT_PUBLIC_GOOGLE_MAPS_API_KEY = 'AIzaSyApdnBLqJeVW4c5tlZ32v8BzVBVWyJnYlg'
export const BASE_URL = "https://diocese.wds-project.com/api"


export const archidiocese: MenuType[] = [
    {
        id: 1,
        menu: "archidiocese",
        image: '/assets/icons/noun-female-archbishop-1200093 1.png',
        titre_fr: 'Archevêque',
        titre_en: 'Archbishop',
        description_fr: 'Retrouvez tous les évêques de notre diocèse.',
        description_en: 'Find all the bishops of our diocese.',
        link: '/archeveques'
    },
    {
        id: 2,
        menu: "archidiocese",
        image: '/assets/icons/noun-bible-770951 1.png',
        titre_fr: 'Notre Histoire',
        titre_en: 'Our history',
        description_fr: 'Découvrez l’histoire du diocèse.',
        description_en: 'Discover the history of the diocese.',
        link: '/histoire'
    },
    {
        id: 3,
        menu: "archidiocese",
        image: '/assets/icons/noun-priest-51757 1.png',
        titre_fr: 'Catéchèse',
        titre_en: 'Catechesis',
        description_fr: 'Accompagner les personnes dans la foi.',
        description_en: 'Accompanying people in their faith.',
        link: '/catechese'
    },
    {
        id: 4,
        menu: "archidiocese",
        image: '/assets/icons/noun-clergy-4445372 1.png',
        titre_fr: 'Clergé',
        titre_en: 'Clergy',
        description_fr: 'Tous les membres de notre diocèse.',
        description_en: 'All the members of our diocese.',
        link: '/clerges'
    },
    /* {
        id: 5,
        menu: "archidiocese",
        image: '/assets/icons/noun-flame-122214 1.png',
        titre_fr: 'Education de la foi de ...',
        titre_en: 'Faith education from ...',
        description_fr: 'Accompagner les jeunes dans leur cheminement de foi.',
        description_en: 'Accompanying young people on their faith journey.',
        link: ''
    }, */
    {
        id: 6,
        menu: "archidiocese",
        image: '/assets/icons/noun-bible-770951 1.png',
        titre_fr: 'Liturgie',
        titre_en: 'Liturgy',
        description_fr: 'Formation et engagement des laïcs dans la liturgie.',
        description_en: 'Formation and involvement of lay people in the liturgy.',
        link: '/liturgie'
    },
    {
        id: 7,
        menu: "archidiocese",
        image: '/assets/icons/Frame.png',
        titre_fr: 'Justice & solidarité',
        titre_en: 'Justice & solidarity',
        description_fr: 'Promouvoir la justice sociale et la solidarité.',
        description_en: 'Promoting social justice and solidarity.',
        link: '/justice-solidarite'
    },
    {
        id: 8,
        menu: "archidiocese",
        image: '/assets/icons/noun-liturgy-5166501 1.png',
        titre_fr: 'Catéchuménat',
        titre_en: 'Catechumenate',
        description_fr: 'Accompagner les personnes dans la foi.',
        description_en: 'Accompanying people in their faith.',
        link: '/catechumenat'
    },
    {
        id: 9,
        menu: "archidiocese",
        image: '/assets/icons/noun-liturgy-5166501 1.png',
        titre_fr: 'Pastorale jeunesse',
        titre_en: 'Youth Ministry',
        description_fr: 'Accompagnement des jeunes dans la foi.',
        description_en: 'Guiding young people in their faith.',
        link: ''
    },
]

export const sacrements: MenuType[] = [
    {
        id: 1,
        image: '/assets/icons/Frame.png',
        titre_fr: 'Sacrement',
        titre_en: 'Sacrament',
        description_fr: 'Sacrement et eucharistie',
        description_en: 'Sacrament and Eucharist',
        link: '/sacrements'
    }, 
    {
        id: 2,
        image: '/assets/icons/noun-baptism-2786507 1.png',
        titre_fr: 'Baptême',
        titre_en: 'Baptism',
        description_fr: 'Porte d’entrée dans la vie chrétienne.',
        description_en: 'Gateway to the Christian life.',
        link: '/bapteme-sacrements'
    },
    {
        id: 3,
        image: '/assets/icons/sang.png',
        titre_fr: 'Confirmation',
        titre_en: 'Confirmation',
        description_fr: 'Recevoir l\'Esprit-Saint et devenir un témoin du Christ',
        description_en: 'Receive the Holy Spirit and become a witness to Christ',
        link: '/confirmation-sacrements'
    },
    {
        id: 4,
        image: '/assets/icons/noun-eucharist-7479333 1.png',
        titre_fr: 'Eucharistie',
        titre_en: 'Eucharist',
        description_fr: 'Le sacrement qui unit les fidèles au sacrifice du Christ.',
        description_en: 'The sacrament that unites the faithful to Christ\'s sacrifice.',
        link: '/eucharistie-sacrements'
    },
    {
        id: 5,
        image: '/assets/icons/noun-confession-886364 1.png',
        titre_fr: 'Reconcilliation',
        titre_en: 'Reconciliation',
        description_fr: 'Un sacrement de guérison et de miséricorde',
        description_en: 'A sacrament of healing and mercy',
        link: '/reconcilliation-sacrements'
    },
    /* {
        id: 6,
        image: '/assets/icons/plus.png',
        titre_fr: 'Onction des malades',
        titre_en: 'Anointing of the sick',
        description_fr: 'Un sacrement de réconfort, de guérison et d\'espérance',
        description_en: 'A sacrament of comfort, healing and hope',
        link: '/onction-malade-sacrements'
    }, */
    {
        id: 7,
        image: '/assets/icons/noun-religion-7293616 1.png',
        titre_fr: 'Ordre',
        titre_en: 'Order',
        description_fr: 'L’évêque, le prête et le diacre: mieux comprendre.',
        description_en: 'The bishop, the priest and the deacon: better understanding.',
        link: '/ordre-sacrements'
    },
    /* {
        id: 8,
        image: '/assets/icons/Frame.png',
        titre_fr: 'Mariages',
        titre_en: 'Weddings',
        description_fr: 'Une alliance d\'amour bénie par Dieu',
        description_en: 'A covenant of love blessed by God',
        link: '/mariage-sacrements'
    }, */ 
]

export const mouvements: MenuType[] = [
    {
        id: 1,
        image: '/assets/icons/people.png',
        titre_fr: 'Chevaliers de Colomb',
        titre_en: 'Knights of Columbus',
        description_fr: "Une vie de foi  en action, une vie d'audace dans la fraternité, une vie qui vaut d'être véçu.",
        description_en: "A life of faith in action, a life of courage in fellowship, a life worth living.",
        link: 'https://www2.kofc.org/un/fr/index.html'
    },
   
    {
        id: 2,
        image: '/assets/icons/people.png',
        titre_fr: 'Mouvements des Femmes Chrétiennes',
        titre_en: 'Catholic Women\'s League (C.W.L)',
        description_fr: 'Mouvement des femmes de tout âge peu importe leur situation et leur culture.',
        description_en: 'A movement of women of all ages, regardless of their circumstances or cultural background.',
        link: 'https://www.cwl.ca'
    },
    {
        id: 3,
        image: '/assets/icons/people.png',
        titre_fr: 'Laudato Si',
        titre_en: 'Laudato Si',
        description_fr: '',
        description_en: '',
        link: 'https://laudatosimovement.org/fr'
    },
    {
        id: 4,
        image: '/assets/icons/people.png',
        titre_fr: 'Cursillo',
        titre_en: 'Cursillo',
        description_fr: "Faire vivre dans l'espace de deux ou trois jours l'enseignement fondamental du Christ.",
        description_en: "To bring Christ's fundamental teachings to life over the course of two or three days.",
        link: 'https://www.cursillos.ca/indexfr.php'
    },
    {
        id: 5,
        image: '/assets/icons/people.png',
        titre_fr: 'Développement et paix',
        titre_en: 'Development and peace',
        description_fr: "Organisme officiel de solidarité internationale de l'Eglise catholique.",
        description_en: "The official international solidarity organization of the Catholic Church.",
        link: 'https://devp.org/fr/'
    },
    {
        id: 6,
        image: '/assets/icons/people.png',
        titre_fr: 'Legion de Marie',
        titre_en: 'Legion of Mary',
        description_fr: "L'étendard de la Légion de Marie est dressé aux quatre coins du globe grâce à son fondateur Frank Duff",
        description_en: "The banner of the Legion of Mary flies in every corner of the globe thanks to its founder, Frank Duff",
        link: 'https://legionofmary.ie/'
    },
    {
        id: 7,
        image: '/assets/icons/people.png',
        titre_fr: "Propagation de la foi et Services d'animation missionnaire",
        titre_en: 'Spreading the Faith and Missionary Outreach Services',
        description_fr: "Comité qui coordonne les différents intervenants de l'action missionnaire.",
        description_en: "A committee that coordinates the various stakeholders involved in missionary work.",
        link: 'https://opmcanada.ca/oppf'
    },
    {
        id: 8,
        image: '/assets/icons/people.png',
        titre_fr: 'Renouveau charismatique',
        titre_en: 'Charismatic renewal',
        description_fr: "Le mouvement a pour vocation d'incarner une culture de Pentecôte.",
        description_en: 'The movement aims to embody a Pentecostal culture.',
        link: 'https://renouveaucharismatique.ca/'
    },
    {
        id: 9,
        image: '/assets/icons/people.png',
        titre_fr: 'Service de préparation au mariage',
        titre_en: 'Pre-marriage counseling service',
        description_fr: "Préparer les couples fiancés au mariage chrétien.",
        description_en: "Prepare engaged couples for Christian marriage.",
        link: 'https://diocese-de-moncton.vercel.app/fr/contact'
    },
    {
        id: 10,
        image: '/assets/icons/people.png',
        titre_fr: 'Société St. Vincent de Paul',
        titre_en: 'St. Vincent de Paul Society',
        description_fr: "Notre travail est fondé sur l'amour du prochain et la justice.",
        description_en: 'Our work is based on love for others and justice.',
        link: 'https://ssvp.ca/fr/'
    },
    {
        id: 11,
        image: '/assets/icons/people.png',
        titre_fr: 'Vivre et aimer - Rencontre conjugale',
        titre_en: 'Live and love - Mariage Encounter',
        description_fr: "Les couples mariés sont appelés à vivre l'amour inconditionnel...",
        description_en: 'Married couples are called to live out unconditional love...',
        link: 'https://www.vivreetaimer.com/'
    },

    /*  {
        id: 1,
        image: '/assets/icons/people.png',
        titre_fr: 'Comité diocésain de la bible (Société biblique)',
        titre_en: 'Diocesan Bible Committee (Bible Society)',
        description_fr: 'Lorem ipsum dolor sit amet consectetur.',
        description_en: 'Lorem ipsum dolor sit amet consectetur.',
        link: 'https://www.diocesemoncton.ca/fr/comite-diocesain-de-la-bible-societe-biblique'
    }, */
    /* {
        id: 2,
        image: '/assets/icons/people.png',
        titre_fr: 'Service d\'animation missionnaire',
        titre_en: 'Missionary animation service',
        description_fr: 'Lorem ipsum dolor sit amet consectetur.',
        description_en: 'Lorem ipsum dolor sit amet consectetur.',
        link: 'https://www.diocesemoncton.ca/fr/service-danimation-missionnaire'
    }, */
    /* {
        id: 3,
        image: '/assets/icons/people.png',
        titre_fr: 'Protocole de minsitère responsable',
        titre_en: 'Responsible Ministry Protocol',
        description_fr: 'Lorem ipsum dolor sit amet consectetur.',
        description_en: 'Lorem ipsum dolor sit amet consectetur.',
        link: 'https://www.diocesemoncton.ca/fr/responsible-ministry-protocol'
    }, */
    /* {
        id: 4,
        image: '/assets/icons/people.png',
        titre_fr: 'Scouts',
        titre_en: 'Scouts',
        description_fr: 'Lorem ipsum dolor sit amet consectetur.',
        description_en: 'Lorem ipsum dolor sit amet consectetur.',
        link: 'https://www.diocesemoncton.ca/fr/scouts'
    }, */
    /* {
        id: 5,
        image: '/assets/icons/people.png',
        titre_fr: 'La vie montante',
        titre_en: 'Life on the rise',
        description_fr: 'Lorem ipsum dolor sit amet consectetur.',
        description_en: 'Lorem ipsum dolor sit amet consectetur.',
        link: 'https://www.diocesemoncton.ca/fr/la-vie-montante'
    }, */
]

export const ressources: MenuType[] = [
    {
        id: 1,
        image: '/assets/icons/noun-cemetery-6767879 1.png',
        titre_fr: 'Cimetières',
        titre_en: 'Cemeteries',
        description_fr: 'Un lieu de recueillement, de mémoire et de paix.',
        description_en: 'A place of remembrance and peace.',
        link: '/cimetiere'
    },
    {
        id: 2,
        image: '/assets/icons/time.png',
        titre_fr: 'Horaires des messes',
        titre_en: 'Mass times',
        description_fr: 'Horaire des messes de la semaine !',
        description_en: 'Weekly mass schedule !',
        link: '/horaires-messes'
    },
    {
        id: 3,
        image: '/assets/icons/noun-law-7399804 1.png',
        titre_fr: 'Chancellerie',
        titre_en: 'Chancery',
        description_fr: 'Pour les questions canoniques et historiques.',
        description_en: 'For canonical and historical questions.',
        link: '/chancellerie'
    },
    {
        id: 4,
        image: '/assets/icons/note.png',
        titre_fr: 'Tribunal matrimonial',
        titre_en: 'Marriage Tribunal',
        description_fr: 'Accompagnement aux personnes divorcées ',
        description_en: 'Support for divorced people ',
        link: '/tribunal-matrimonial'
    },
    {
        id: 5,
        image: '/assets/icons/note.png',
        titre_fr: 'Bulletins paroissiaux',
        titre_en: 'Parish bulletins',
        description_fr: 'Ensemble des bulletins pastoraux du diocèse',
        description_en: 'All pastoral bulletins of the diocese',
        link: '/bulletins'
    },
]


export const menusNavigation: MenuType[] = [
    {
        id: 1,
        menu: "archidiocese",
        image: '/assets/icons/noun-female-archbishop-1200093 1.png',
        titre_fr: 'Archevêque',
        titre_en: 'Archbishop',
        description_fr: 'Retrouvez tous les évêques de notre diocèse.',
        description_en: 'Find all the bishops of our diocese.',
        link: '/archeveques'
    },
    {
        id: 2,
        menu: "archidiocese",
        image: '/assets/icons/noun-bible-770951 1.png',
        titre_fr: 'Notre Histoire',
        titre_en: 'Our history',
        description_fr: 'Découvrez l’histoire du diocèse.',
        description_en: 'Discover the history of the diocese.',
        link: ''
    },
    {
        id: 3,
        menu: "archidiocese",
        image: '/assets/icons/noun-priest-51757 1.png',
        titre_fr: 'Catéchèse',
        titre_en: 'Catechesis',
        description_fr: 'Accompagner les personnes dans la foi.',
        description_en: 'Accompanying people in their faith.',
        link: '/catechese'
    },
    {
        id: 4,
        menu: "archidiocese",
        image: '/assets/icons/noun-clergy-4445372 1.png',
        titre_fr: 'Clergé',
        titre_en: 'Clergy',
        description_fr: 'Tous les membres de notre diocèse.',
        description_en: 'All the members of our diocese.',
        link: '/clerges'
    },
    {
        id: 5,
        menu: "archidiocese",
        image: '/assets/icons/noun-flame-122214 1.png',
        titre_fr: 'Education de la foi de ...',
        titre_en: 'Faith education from ...',
        description_fr: 'Accompagner les jeunes dans leur cheminement de foi.',
        description_en: 'Accompanying young people on their faith journey.',
        link: '/education-de-la-foi'
    },
    {
        id: 6,
        menu: "archidiocese",
        image: '/assets/icons/noun-bible-770951 1.png',
        titre_fr: 'Liturgie',
        titre_en: 'Liturgy',
        description_fr: 'Formation et engagement des laïcs dans la liturgie.',
        description_en: 'Formation and involvement of lay people in the liturgy.',
        link: '/liturgie'
    },
    {
        id: 7,
        menu: "archidiocese",
        image: '/assets/icons/Frame.png',
        titre_fr: 'Justice & solidarité',
        titre_en: 'Justice & solidarity',
        description_fr: 'Promouvoir la justice sociale et la solidarité.',
        description_en: 'Promoting social justice and solidarity.',
        link: '/justice-solidarite'
    },
    {
        id: 8,
        menu: "archidiocese",
        image: '/assets/icons/noun-liturgy-5166501 1.png',
        titre_fr: 'Catéchuménat',
        titre_en: 'Catechumenate',
        description_fr: 'Accompagner les personnes dans la foi.',
        description_en: 'Accompanying people in their faith.',
        link: '/education-de-la-foi'
    },

    ////////

    {
        id: 9,
        menu: "sacrements",
        image: '/assets/icons/noun-baptism-2786507 1.png',
        titre_fr: 'Baptêmes',
        titre_en: 'Baptisms',
        description_fr: 'Porte d’entrée dans la vie chrétienne.',
        description_en: 'Gateway to the Christian life.',
        link: '/bapteme-sacrements'
    },
    {
        id: 10,
        menu: "sacrements",
        image: '/assets/icons/sang.png',
        titre_fr: 'Confirmations',
        titre_en: 'Confirmations',
        description_fr: 'Recevoir l\'Esprit-Saint et devenir un témoin du Christ',
        description_en: 'Receive the Holy Spirit and become a witness to Christ',
        link: '/confirmation-sacrements'
    },
    {
        id: 11,
        menu: "sacrements",
        image: '/assets/icons/noun-eucharist-7479333 1.png',
        titre_fr: 'Eucharisties',
        titre_en: 'Eucharist',
        description_fr: 'Le sacrement qui unit les fidèles au sacrifice du Christ.',
        description_en: 'The sacrament that unites the faithful to Christ\'s sacrifice.',
        link: '/eucharistie-sacrements'
    },
    {
        id: 12,
        menu: "sacrements",
        image: '/assets/icons/noun-confession-886364 1.png',
        titre_fr: 'Reconcilliation',
        titre_en: 'Reconciliation',
        description_fr: 'Un sacrement de guérison et de miséricorde',
        description_en: 'A sacrament of healing and mercy',
        link: '/reconcilliation-sacrements'
    },
    {
        id: 13,
        menu: "sacrements",
        image: '/assets/icons/Frame.png',
        titre_fr: 'Mariages',
        titre_en: 'Weddings',
        description_fr: 'Une alliance d\'amour bénie par Dieu',
        description_en: 'A covenant of love blessed by God',
        link: '/mariage-sacrements'
    },
    {
        id: 14,
        menu: "sacrements",
        image: '/assets/icons/plus.png',
        titre_fr: 'Onction des malades',
        titre_en: 'Anointing of the sick',
        description_fr: 'Un sacrement de réconfort, de guérison et d\'espérance',
        description_en: 'A sacrament of comfort, healing and hope',
        link: '/onction-malade-sacrements'
    },
    {
        id: 15,
        menu: "sacrements",
        image: '/assets/icons/noun-religion-7293616 1.png',
        titre_fr: 'Ordre',
        titre_en: 'Order',
        description_fr: 'L’évêque, le prête et le diacre: mieux comprendre.',
        description_en: 'The bishop, the priest and the deacon: better understanding.',
        link: '/ordre-sacrements'
    },

    ///////////

    {
        id: 16,
        menu: "mouvements",
        image: '/assets/icons/people.png',
        titre_fr: 'Chevalier de Colomb',
        titre_en: 'Knights of Columbus',
        description_fr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        description_en: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        link: ''
    },
    {
        id: 17,
        menu: "mouvements",
        image: '/assets/icons/people.png',
        titre_fr: 'Comité diocésain de l...',
        titre_en: 'Diocesan Committee of l...',
        description_fr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        description_en: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        link: ''
    },
    {
        id: 18,
        menu: "mouvements",
        image: '/assets/icons/people.png',
        titre_fr: 'Mouvements des fem...',
        titre_en: 'Women\'s movements...',
        description_fr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        description_en: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        link: '/mouvements'
    },
    {
        id: 19,
        menu: "mouvements",
        image: '/assets/icons/people.png',
        titre_fr: 'Cursillo',
        titre_en: 'Cursillo',
        description_fr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        description_en: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        link: ''
    },
    {
        id: 20,
        menu: "mouvements",
        image: '/assets/icons/people.png',
        titre_fr: 'Développement et pai...',
        titre_en: 'Development and...',
        description_fr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        description_en: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        link: ''
    },

    {
        id: 21,
        menu: "mouvements",
        image: '/assets/icons/people.png',
        titre_fr: 'La vie montante',
        titre_en: 'Life on the rise',
        description_fr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        description_en: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        link: ''
    },
    {
        id: 22,
        menu: "mouvements",
        image: '/assets/icons/people.png',
        titre_fr: 'Legion de Marie',
        titre_en: 'Marie\'s Legion',
        description_fr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        description_en: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        link: ''
    },
    {
        id: 23,
        menu: "mouvements",
        image: '/assets/icons/people.png',
        titre_fr: 'Renouveau charismat...',
        titre_en: 'Charismatic renewal...',
        description_fr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        description_en: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        link: ''
    },
    {
        id: 24,
        menu: "mouvements",
        image: '/assets/icons/people.png',
        titre_fr: "Service d'animation",
        titre_en: "Animation service",
        description_fr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        description_en: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        link: ''
    },


    //////////////////


    {
        id: 25,
        menu: "ressources",
        image: '/assets/icons/noun-cemetery-6767879 1.png',
        titre_fr: 'Cimetières',
        titre_en: 'Cemeteries',
        description_fr: 'Un lieu de recueillement, de mémoire et de paix.',
        description_en: 'A place of remembrance and peace.',
        link: '/cimetiere'
    },
    {
        id: 26,
        menu: "ressources",
        image: '/assets/icons/time.png',
        titre_fr: 'Horaires des messes',
        titre_en: 'Mass times',
        description_fr: 'Horaire des messes de la semaine !',
        description_en: 'Weekly mass schedule !',
        link: '/horaires-messes'
    },
    {
        id: 27,
        menu: "ressources",
        image: '/assets/icons/noun-law-7399804 1.png',
        titre_fr: 'Chancellerie',
        titre_en: 'Chancellery',
        description_fr: 'Pour les questions canoniques et historiques.',
        description_en: 'For canonical and historical questions.',
        link: '/chancellerie'
    },
    {
        id: 28,
        menu: "ressources",
        image: '/assets/icons/note.png',
        titre_fr: 'Tribunal matrimonial',
        titre_en: 'Matrimonial court',
        description_fr: 'Accompagnement aux personnes divorcées ',
        description_en: 'Support for divorced people ',
        link: '/tribunal-matrimonial'
    },

]

export const mapper: any = {
    "dimanche": "Sunday",
    "lundi": "Monday",
    "mardi": "Tuesday",
    "mercredi": "Wednesday",
    "jeudi": "Thursday",
    "vendredi": "Friday",
    "samedi": "Saturday"
}